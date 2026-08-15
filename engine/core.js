'use strict';

import { UI } from './ui.js';
import { saveGame } from './save.js';
import { unlockTrait, checkTraits, setTheme as traitsSetTheme } from './traits.js';
import { touchChar, charName, setTheme as charsSetTheme } from './characters.js';
import { scheduleThread, checkThreads, actOf, setTheme as narratorSetTheme } from './narrator.js';

const CURRENT = { THEME: null, S: null };

const ACT_NAMES = {
  birth: '誕生之光',
  childhood: '童年之光',
  youth: '青春十字路',
  departure: '啟程',
  nest: '築巢',
  midlife: '中流砥柱',
  oldage: '回望'
};

const FAMILY_DEF = {
  poor: { money: 0, family: 40, parentsJob: '藍領勞工與夜市攤販' },
  middle: { money: 60000, family: 55, parentsJob: '上班族與家庭主婦' },
  rich: { money: 400000, family: 70, parentsJob: '企業經營者與名醫' }
};

const ECHO_NOTES = [
  '多年後想來，那一步沒有對錯，只是你之所以成為你的起點。',
  '多年後想來，你感謝當時那個沒有放棄的自己。',
  '多年後想來，遺憾也是人生的一部分，你學會與它平靜相處。',
  '多年後想來，人與人之間的緣分，比最後的結果更值得珍惜。',
  '多年後想來，那一天你做出的選擇，比你想的還要勇敢。'
];

const EPITAPHS = {
  mood: '他以溫柔丈量這個世界，最後被溫柔接住。',
  health: '他活得像盛夏的風，熱烈而徹底地走完一生。',
  social: '許多人記得他的笑聲，那是他留給人間的禮物。',
  confidence: '他始終相信自己的路，未曾動搖。',
  curiosity: '他一生都在追問，直到最後一刻仍未停下。',
  family: '他把家放在心裡最亮的位置，從未錯過。',
  independence: '他孤身走完自己選擇的路，無怨無悔。'
};

const DEATH_EPITAPHS = {
  mood: '他以溫柔入世，最後在安詳中睡去。',
  health: '他的生命像一場燦爛的夏天，熱烈而來，安靜而去。',
  social: '他遠行時，許多人想起他的笑。',
  confidence: '他走完自己的路，帶著他始終相信的一切。',
  curiosity: '他帶著未竟的疑問遠行，眼神仍是明亮的。',
  family: '他安歇時，心裡仍放著他的家人。',
  independence: '他孤身而來，孤身而去，路上始終自由。'
};

const clamp = (v, min = 0, max = 100) => Math.max(min, Math.min(max, v));

function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h >>> 0;
}

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedNum(str) {
  return fnv1a(String(str || ''));
}

function initRng(S) {
  let seedNum = S._seedNum;
  if (typeof seedNum !== 'number' || !isFinite(seedNum)) {
    seedNum = fnv1a(String(S.seed || 'abc12345'));
    S._seedNum = seedNum;
  }
  const rng = mulberry32(seedNum);
  let used = S._rngUsed | 0;
  while (used-- > 0) rng();
  S._rng = { next: rng, used: S._rngUsed | 0 };
  return S._rng;
}

function R() {
  const S = CURRENT.S;
  if (!S) return Math.random();
  if (!S._rng) initRng(S);
  const g = S._rng;
  const v = g.next();
  g.used++;
  S._rngUsed = g.used;
  return v;
}

function ri(a, b) {
  return a + Math.floor(R() * (b - a + 1));
}

function pick(arr) {
  return arr.length ? arr[Math.floor(R() * arr.length)] : null;
}

function weightedPick(items, wf) {
  if (!items.length) return null;
  let total = 0;
  for (const it of items) total += Math.max(0, wf(it) || 0);
  if (total <= 0) return pick(items);
  let r = R() * total;
  for (const it of items) {
    r -= Math.max(0, wf(it) || 0);
    if (r < 0) return it;
  }
  return items[items.length - 1];
}

function requireGame() {
  if (!CURRENT.S) throw new Error('尚未開始遊戲：請先呼叫 newGame()');
  return CURRENT;
}

function stageOf(age) {
  if (age <= 6) return 'birth';
  if (age <= 12) return 'kid';
  if (age <= 18) return 'teen';
  if (age <= 40) return 'adult';
  if (age <= 60) return 'midlife';
  return 'old';
}

function scenesPerAct(THEME, age) {
  const map = (THEME && THEME.scenesPerAct) || {};
  let key;
  if (age <= 6) key = 'birth';
  else if (age <= 12) key = 'childhood';
  else if (age <= 18) key = 'youth';
  else if (age <= 40) key = 'adult';
  else if (age <= 60) key = 'midlife';
  else key = 'oldage';
  return map[key] != null ? map[key] : 2;
}

function milestoneAt(THEME, age) {
  const list = (THEME && THEME.milestones) || [];
  return list.find((m) => m && m.age === age) || null;
}

function applyFamilyDefaults(S, family) {
  const def = FAMILY_DEF[family] || FAMILY_DEF.middle;
  S.money = def.money;
  S.stats.family = def.family;
  if (!S.birth.parentsJob) S.birth.parentsJob = def.parentsJob;
  recomputeExpense(S);
}

export function newGame(THEME, opts) {
  const o = opts || {};
  const seedStr = String(o.seed || '');
  const S = {
    version: '1.0.0',
    seed: seedStr,
    age: 0,
    stage: 'birth',
    act: 'birth',
    alive: true,
    ended: false,
    deathCause: null,
    name: String(o.name || ''),
    birth: {
      city: (o.birth && o.birth.city) || 'taipei',
      family: (o.birth && o.birth.family) || 'middle',
      parentsJob: (o.birth && o.birth.parentsJob) || '',
      talent: '',
      talentDesc: ''
    },
    stats: { mood: 60, health: 70, social: 50, confidence: 45, curiosity: 55, family: 55, independence: 30, stress: 15 },
    skills: { language: 0, math: 0, science: 0, arts: 0, sport: 0, leadership: 0, tech: 0 },
    money: 0,
    income: 0,
    expense: 0,
    education: '',
    school: '',
    major: '',
    job: null,
    jobHistory: [],
    housing: '',
    spouse: null,
    children: [],
    parentStatus: { mom: 'alive', dad: 'alive' },
    chars: {},
    traits: [],
    threads: [],
    history: [],
    milestones: {},
    statsHistory: [],
    diceCount: 0,
    dicePass: 0,
    gameStart: Date.now(),
    saveTime: null,
    flags: {},
    _usedScenes: {},
    _queuedScenes: [],
    _rngUsed: 0,
    _seedNum: 0,
    _started: false,
    _echoShown: false,
    // 後代系統
    generation: 1,          // 第幾代
    lineage: [],            // 祖先列傳 [{ gen, name, age, epitaph, summary }]
    childMeta: {},          // childId -> { name, gender, birthAge, alive }
    charNames: {},          // 角色 id -> 動態姓名（爸媽/子女/親屬真名）
    family: null            // 三代家族樹（buildFamilyTree 填入）
  };
  applyFamilyDefaults(S, S.birth.family);
  CURRENT.THEME = THEME;
  CURRENT.S = S;
  UI.setTheme(THEME);
  narratorSetTheme(THEME);
  traitsSetTheme(THEME);
  charsSetTheme(THEME);
  initRng(S);
  buildFamilyTree(S, null);
  return S;
}

export function resumeGame(THEME, S) {
  CURRENT.THEME = THEME;
  CURRENT.S = S;
  UI.setTheme(THEME);
  narratorSetTheme(THEME);
  traitsSetTheme(THEME);
  charsSetTheme(THEME);
  initRng(S);
  UI.boardReset();
  UI.board(S);
  UI.timeline(S);
  return S;
}

export function pickScene() {
  const { THEME, S } = requireGame();
  const pool = (THEME && THEME.scenes ? THEME.scenes : []).filter((s) =>
    s &&
    s.act === S.act &&
    (s.minAge == null || s.minAge <= S.age) &&
    (s.maxAge == null || S.age <= s.maxAge) &&
    (!s.cond || !!s.cond(S)) &&
    (!s.once || !S._usedScenes[s.id])
  );
  const scene = weightedPick(pool, (s) => (typeof s.weight === 'number' ? s.weight : 1));
  if (scene && scene.once) S._usedScenes[scene.id] = true;
  return scene || null;
}

export function rollDice(S, dice) {
  const skill = (dice && dice.skill) || 'math';
  const base = (S.stats && (skill in S.stats))
    ? S.stats[skill]
    : (S.skills && (skill in S.skills)) ? S.skills[skill] : 0;
  const d1 = ri(1, 6);
  const d2 = ri(1, 6);
  const roll = d1 + d2 + Math.round(base / 20);
  const dc = (dice && dice.dc != null) ? dice.dc : 12;
  const pass = roll >= dc;
  S.diceCount = (S.diceCount || 0) + 1;
  if (pass) S.dicePass = (S.dicePass || 0) + 1;
  return { roll, dc, pass };
}

function applyEffects(S, fx) {
  if (!fx) return;
  for (const k of Object.keys(fx)) {
    const v = fx[k];
    if (k === 'money') {
      S.money = Math.round((S.money || 0) + (v || 0));
    } else if (k in S.stats) {
      S.stats[k] = clamp(S.stats[k] + (v || 0));
    } else if (k in S.skills) {
      S.skills[k] = clamp(S.skills[k] + (v || 0));
    }
  }
}

function recomputeExpense(S) {
  let base = 0;
  if (S.housing === 'family') base = 6000;
  else if (S.housing === 'rent') base = 15000;
  else if (S.housing === 'own' || S.housing === 'own_house') base = 10000;
  S.expense = base + (S.children || []).length * 12000;
}

function applySetJob(S, job) {
  const salary = Math.round(job.salary || 0);
  for (const h of S.jobHistory) {
    if (h.endAge === null) h.endAge = S.age;
  }
  S.job = {
    id: job.id || '',
    title: job.title || '',
    salary,
    tier: job.tier || '基層',
    startAge: S.age,
    _base: salary
  };
  S.income = salary * 12;
  S.jobHistory.push({ title: S.job.title, startAge: S.age, endAge: null, salary });
}

function applySetSchool(S, sc) {
  if (sc && sc.name) S.school = sc.name;
  if (sc && sc.level) S.education = sc.level;
}

function applySetHousing(S, h) {
  S.housing = h || '';
  recomputeExpense(S);
}

function applySetSpouse(S, id) {
  if (!id) return;
  S.spouse = id;
  touchChar(S, id, { rel: 30, met: true });
  // 伴侶第一次出現時取名（動態寫入 charNames，供後代系統/角色面板顯示真名）
  if (!S.charNames[id]) S.charNames[id] = newName();
}

function applySetChild(S) {
  const id = 'child' + (S.children.length + 1);
  S.children.push(id);
  S.childMeta[id] = { name: newName(), gender: R() < 0.5 ? 'f' : 'm', birthAge: S.age, alive: true };
  S.charNames[id] = S.childMeta[id].name;
  touchChar(S, id, { rel: 15, met: true });
  recomputeExpense(S);
  return id;
}

/** 用引擎隨機源產生一個姓名（theme 提供姓名池，引擎提供可重現的 R） */
function newName(gender) {
  const THEME = CURRENT.THEME || {};
  if (THEME.names && typeof THEME.names.genName === 'function') {
    return THEME.names.genName(R, gender);
  }
  return (gender === 'f' ? '小柔' : '小剛');
}

/* ============ 後代系統：無聲自動模式 ============ */

let _autoMode = false;

/** 進入/離開無聲自動模式（後代系統背景快轉用，不吃 UI、不寫存檔） */
export function setAutoMode(v) {
  _autoMode = !!v;
  return _autoMode;
}

/** 自動選項：複製 UI 的 needUnmet 邏輯，選第一個可解鎖選項；全鎖定則強制第一個 */
function autoPick(opts, S) {
  const list = opts || [];
  for (let i = 0; i < list.length; i++) {
    const o = list[i];
    if (!o) continue;
    if (!o.need || !S) return i;
    const { stat, min } = o.need;
    const val = (S.stats && (stat in S.stats))
      ? S.stats[stat]
      : (S.skills && (stat in S.skills)) ? S.skills[stat] : 0;
    if (val >= (min || 0)) return i;
  }
  return 0;
}

/* ============ 後代系統：三代家族樹 ============ */

/**
 * 建立 S.family 三代家族樹。
 * gen1 = 祖輩（阿公/阿嬤/外公/外婆）
 * gen2 = 父輩（爸爸/媽媽 + 叔伯姨舅姑）
 * gen3 = 己輩（自己 + 兄弟姐妹 + 堂/表兄弟姐妹）
 * @param {object} S 目前的 S（己輩本人）
 * @param {object|null} parentS 交棒用的父輩 S（第一代傳 null，自行生成祖輩/父輩）
 */
function buildFamilyTree(S, parentS) {
  const gen1 = [], gen2 = [], gen3 = [];

  if (parentS) {
    // 子輩：上一代的爸爸媽媽 = 這一代的阿公阿嬤；上一代的主角 = 爸爸，伴侶 = 媽媽
    const pf = (parentS.family && parentS.family.tree) || null;
    const g2p = pf ? pf.gen2 : [];
    const g3p = pf ? pf.gen3 : [];

    gen1.push(
      { role: '阿公', name: (g2p.find((m) => m.role === '爸爸') || {}).name || (parentS.charNames.dad || '阿公'), gender: 'm' },
      { role: '阿嬤', name: (g2p.find((m) => m.role === '媽媽') || {}).name || (parentS.charNames.mom || '阿嬤'), gender: 'f' },
      { role: '外公', name: newName('m'), gender: 'm' },
      { role: '外婆', name: newName('f'), gender: 'f' }
    );

    // 爸爸 = 上一代主角（真名）；媽媽 = 伴侶真名（未結婚則生成）
    const dadName = parentS.name || '爸爸';
    const momName = (parentS.spouse && parentS.charNames[parentS.spouse]) || newName('f');
    gen2.push(
      { role: '爸爸', name: dadName, gender: 'm' },
      { role: '媽媽', name: momName, gender: 'f' }
    );
    // 伯伯/姑姑 = 上一代主角的兄弟姐妹（一男一女）；舅舅/阿姨 = 伴侶的兄弟姐妹（新生成）
    const sibs = g3p.filter((m) => m.role === '兄弟姐妹');
    const bro = sibs.find((m) => m.gender === 'm');
    const sis = sibs.find((m) => m.gender === 'f');
    gen2.push(
      { role: '伯伯', name: (bro && bro.name) || newName('m'), gender: 'm' },
      { role: '姑姑', name: (sis && sis.name) || newName('f'), gender: 'f' },
      { role: '舅舅', name: newName('m'), gender: 'm' },
      { role: '阿姨', name: newName('f'), gender: 'f' }
    );

    // 己輩：自己 + 兄弟姐妹（父輩其他子女）+ 堂/表兄弟姐妹
    gen3.push({ role: '自己', name: S.name || '我', gender: S._selfGender || '?' });
    (parentS.children || []).forEach((cid) => {
      const cm = parentS.childMeta[cid];
      if (cm && cid !== S._selfChildId) gen3.push({ role: '兄弟姐妹', name: cm.name || cid, gender: cm.gender || 'm' });
    });
    gen3.push(
      { role: '堂兄弟姐妹', name: newName(R() < 0.5 ? 'm' : 'f'), gender: '?' },
      { role: '表兄弟姐妹', name: newName(R() < 0.5 ? 'm' : 'f'), gender: '?' }
    );
  } else {
    // 第一代：爸媽取真名（下一代成為阿公阿嬤時用）；兄弟姐妹一男一女（下一代成為伯伯/姑姑時用）
    const dadReal = newName('m');
    const momReal = newName('f');
    gen1.push(
      { role: '阿公', name: newName('m'), gender: 'm' },
      { role: '阿嬤', name: newName('f'), gender: 'f' },
      { role: '外公', name: newName('m'), gender: 'm' },
      { role: '外婆', name: newName('f'), gender: 'f' }
    );
    gen2.push(
      { role: '爸爸', name: dadReal, gender: 'm' },
      { role: '媽媽', name: momReal, gender: 'f' },
      { role: '伯伯', name: newName('m'), gender: 'm' },
      { role: '姑姑', name: newName('f'), gender: 'f' },
      { role: '舅舅', name: newName('m'), gender: 'm' },
      { role: '阿姨', name: newName('f'), gender: 'f' }
    );
    gen3.push(
      { role: '自己', name: S.name || '我', gender: '?' },
      { role: '兄弟姐妹', name: newName('m'), gender: 'm' },
      { role: '兄弟姐妹', name: newName('f'), gender: 'f' },
      { role: '堂兄弟姐妹', name: newName(R() < 0.5 ? 'm' : 'f'), gender: '?' },
      { role: '表兄弟姐妹', name: newName(R() < 0.5 ? 'm' : 'f'), gender: '?' }
    );
    // 爸媽真名寫入 charNames（角色面板/最重要的人顯示真名）
    S.charNames = S.charNames || {};
    S.charNames.dad = dadReal;
    S.charNames.mom = momReal;
  }

  S.family = { gen: (parentS ? (parentS.generation || 1) + 1 : 1), tree: { gen1, gen2, gen3 } };
  return S.family;
}

/* ============ 後代系統：交棒（以子女身分繼續） ============ */

/**
 * 以父輩的某個子女開啟下一代。
 * - seed = seedNum(父seed + '|g' + 代數 + '|' + childId)（可重現）
 * - 遺產：父輩財富 30%
 * - 天賦遺傳：父輩 top2 技能 ×25% 加成
 * - 背景快轉：用無聲自動模式把 0 歲跑到「交棒時孩子應有的年齡」
 * @param {object} parentS 即將交棒的父輩 S
 * @param {number} childIdx S.children 的 index
 * @returns {object|null} 子輩 S（快轉完成、可接續）；失敗回 null
 */
export async function spawnChild(parentS, childIdx) {
  const THEME = CURRENT.THEME;
  if (!parentS || !THEME) return null;
  const prevS = CURRENT.S; // 交棒前的主角（newGame 會覆寫 CURRENT.S，先留底）
  const childId = (parentS.children || [])[childIdx];
  const meta = (parentS.childMeta || {})[childId];
  if (!childId || !meta || meta.alive === false) return null;

  const gen = (parentS.generation || 1) + 1;
  const seed = seedNum(String(parentS.seed || '') + '|g' + gen + '|' + childId);
  const childAge = Math.max(0, (parentS.age || 0) - (meta.birthAge || 0));
  const family = parentS.money >= 3000000 ? 'rich' : (parentS.money >= 800000 ? 'middle' : 'poor');

  const S = newGame(THEME, {
    seed: String(seed),
    name: meta.name || '繼承者',
    birth: { city: parentS.birth.city || 'taipei', family, parentsJob: (parentS.job && parentS.job.title) || '' }
  });

  // 家譜與世代
  S.generation = gen;
  S._selfChildId = childId;
  S._selfGender = meta.gender || '?';
  S.lineage = (parentS.lineage || []).concat([{
    gen: parentS.generation || 1,
    name: parentS.name || '祖輩',
    age: parentS.age || 0,
    money: parentS.money || 0,
    job: (parentS.job && parentS.job.title) || ''
  }]);

  // 遺產（30%）+ 天賦遺傳
  S.money = Math.round((S.money || 0) + (parentS.money || 0) * 0.3);
  const top = Object.keys(parentS.skills || {}).map((k) => [k, parentS.skills[k] || 0]).sort((a, b) => b[1] - a[1]).slice(0, 2);
  top.forEach(([k, v]) => {
    if (v > 20) S.skills[k] = clamp((S.skills[k] || 0) + Math.round(v * 0.25));
  });

  // 父母身份：爸爸 = 上一代主角真名；媽媽 = 伴侶真名
  S.charNames.dad = parentS.name || '爸爸';
  S.charNames.mom = (parentS.spouse && parentS.charNames[parentS.spouse]) || '媽媽';
  S.family = buildFamilyTree(S, parentS);

  // 背景快轉：無聲跑完孩子出生到現在的人生
  if (childAge > 0) {
    CURRENT.S = S;
    setAutoMode(true);
    try {
      let guard = 0;
      while (S.alive && !S.ended && S.age < childAge && guard < 120) {
        await playYear();
        guard++;
      }
    } finally {
      setAutoMode(false);
      CURRENT.S = prevS;
    }
  }
  if (!S.alive || S.ended) return null;
  saveGame(S, 'auto');
  return S;
}

function applySetParent(S, p) {
  if (!p) return;
  for (const k of ['mom', 'dad']) {
    if (p[k]) S.parentStatus[k] = p[k];
  }
}

function effectLabel(k, v) {
  const THEME = CURRENT.THEME || {};
  let label = k;
  const sd = (THEME.statsDef || []).find((x) => x.key === k);
  if (sd) label = sd.label;
  else {
    const sk = (THEME.skillDef || []).find((x) => x.key === k);
    if (sk) label = sk.label;
  }
  if (k === 'money') label = '金錢';
  const sign = v > 0 ? '+' : '';
  return label + sign + v;
}

function buildEffectsText(opt) {
  const fx = [];
  const eff = opt.effects || {};
  for (const k of Object.keys(eff)) {
    const v = eff[k];
    const cls = v > 0 ? 'fx-pos' : (v < 0 ? 'fx-neg' : 'fx-zero');
    const text = (k === 'money') ? ('金錢' + (v > 0 ? '+' : '') + v) : effectLabel(k, v);
    fx.push('<span class="' + cls + '">' + text + '</span>');
  }
  if (opt.dice) fx.push('（骰子判定）');
  return fx.join('、');
}

function recordHistory(S, opt, scene, meta) {
  const fx = buildEffectsText(opt);
  S.history.push({
    age: S.age,
    act: S.act,
    sceneId: scene ? scene.id : '',
    title: scene ? scene.title : '',
    optionLabel: opt.label || '',
    tag: (scene && scene.tag) || '里程碑',
    effectsText: fx,
    dice: !!meta.dice,
    thread: !!meta.thread,
    hasChars: !!meta.hasChars,
    mag: meta.mag || 0
  });
  if (fx) UI.card('info', '後果', fx);
}

export function applyOption(S, opt, scene) {
  if (!opt) return;
  const meta = { mag: 0, dice: false, thread: false, hasChars: false };

  if (opt.effects) {
    for (const k of Object.keys(opt.effects)) {
      const v = opt.effects[k];
      meta.mag += Math.abs(v || 0);
    }
    applyEffects(S, opt.effects);
  }

  if (opt.chars) {
    for (const id of Object.keys(opt.chars)) {
      touchChar(S, id, opt.chars[id]);
      meta.hasChars = true;
      if (opt.chars[id] && typeof opt.chars[id].rel === 'number') meta.mag += Math.abs(opt.chars[id].rel);
    }
  }

  if (opt.dice) {
    const r = rollDice(S, opt.dice);
    meta.dice = true;
    const THEME = CURRENT.THEME;
    const text = THEME && typeof THEME.diceText === 'function'
      ? THEME.diceText(r.roll, r.dc, r.pass)
      : '骰出 ' + r.roll + ' ／ 目標 ' + r.dc + (r.pass ? ' —— 通過' : ' —— 未通過');
    if (!_autoMode) UI.diceShow(text);
    const res = r.pass ? opt.dice.pass : opt.dice.fail;
    if (res) {
      applyEffects(S, res);
      if (res.thread) {
        scheduleThread(S, Object.assign({}, res.thread, { source: scene && scene.id }));
        meta.thread = true;
      }
    }
  }

  if (opt.thread) {
    scheduleThread(S, Object.assign({}, opt.thread, { source: scene && scene.id }));
    meta.thread = true;
  }

  if (opt.setJob) applySetJob(S, opt.setJob);
  if (opt.setSchool) applySetSchool(S, opt.setSchool);
  if (opt.setMajor) S.major = opt.setMajor;
  if (opt.setHousing) applySetHousing(S, opt.setHousing);
  if (opt.setSpouse) applySetSpouse(S, opt.setSpouse);
  if (opt.setChild) applySetChild(S, opt.setChild);
  if (opt.setParent) applySetParent(S, opt.setParent);
  if (opt.addTraits) {
    const list = Array.isArray(opt.addTraits) ? opt.addTraits : [opt.addTraits];
    for (const id of list) unlockTrait(S, CURRENT.THEME, id);
  }
  if (typeof opt.f === 'function') {
    try {
      opt.f(S);
    } catch (e) {
      /* 內容鉤子容錯 */
    }
  }

  recordHistory(S, opt, scene, meta);
  if (!_autoMode) UI.board(S);
}

async function playOneScene(THEME, S) {
  let scene = null;
  if (S._queuedScenes && S._queuedScenes.length) {
    const tid = S._queuedScenes.shift();
    scene = (THEME && THEME.threadScenes ? THEME.threadScenes : []).find((s) => s && s.id === tid) || null;
    if (scene && scene.once) S._usedScenes[scene.id] = true;
  }
  if (!scene) scene = pickScene();
  if (!scene) {
    if (_autoMode) return;
    UI.card('info', '平淡的一年', '這一年沒有特別的事發生，日子在日出日落之間平穩流過。');
    return;
  }
  if (scene.flags && scene.flags.key) S.flags[scene.flags.key] = true;
  const cls = scene.tag && scene.tag.indexOf('伏筆') >= 0 ? 'gold' : '';
  if (!_autoMode) UI.card(cls || '', scene.title || '', scene.text || '');
  const opts = scene.opts || [];
  if (!opts.length) return;
  const idx = _autoMode ? autoPick(opts, S) : await UI.choose(opts, { title: scene.title, S });
  const opt = opts[idx];
  if (!opt) return;
  applyOption(S, opt, scene);
}

async function runMilestone(THEME, S, ms) {
  if (!ms) return;
  // 條件觸發：回傳 false 則跳過（例如「已有子女」才出現二胎/三胎）
  if (typeof ms.when === 'function' && !ms.when(S)) return;
  S.milestones[ms.id] = true;
  if (!_autoMode) UI.card('gold', ms.title || '', ms.text || '');
  if (ms.kind === 'choice' && ms.opts && ms.opts.length) {
    const idx = _autoMode ? autoPick(ms.opts, S) : await UI.choose(ms.opts, { title: ms.title, S });
    const opt = ms.opts[idx];
    if (opt) applyOption(S, opt, ms);
  }
}

export async function playYear() {
  const { THEME, S } = requireGame();
  if (S.ended || !S.alive) return { ended: true, alive: S.alive, age: S.age };

  const first = !S._started;
  S._started = true;

  // phasePre
  if (!first) S.age = (S.age | 0) + 1;
  S.age = Math.max(0, S.age | 0);
  S.stage = stageOf(S.age);
  S.act = actOf(S.age);

  const ms = milestoneAt(THEME, S.age);
  if (ms) await runMilestone(THEME, S, ms);
  if (S.ended || !S.alive) return { ended: true, alive: S.alive, age: S.age };

  if (!_autoMode) UI.divider(yearText(S));
  if (!_autoMode) UI.timeline(S);

  // phaseMid
  const n = scenesPerAct(THEME, S.age);
  for (let i = 0; i < n; i++) {
    if (S.ended || !S.alive) break;
    await playOneScene(THEME, S);
  }
  if (!_autoMode) UI.timeline(S);

  // phaseEnd
  const ph = await phaseEnd(THEME, S);
  if (ph && ph.handoff) return ph; // 交棒給下一代
  return { ended: S.ended, alive: S.alive, age: S.age, deathCause: S.deathCause };
}

function yearText(S) {
  const THEME = CURRENT.THEME || {};
  const name = (THEME.actNames && THEME.actNames[S.act]) || ACT_NAMES[S.act] || S.act;
  const gen = (S.generation && S.generation > 1) ? '第 ' + S.generation + ' 代 · ' : '';
  return gen + '第 ' + S.age + ' 年 · ' + S.age + ' 歲 · ' + name;
}

async function phaseEnd(THEME, S) {
  if (S.job && S.job._base) {
    const cap = Math.round(S.job._base * 1.5);
    if (S.job.salary < cap) {
      S.job.salary = Math.min(cap, Math.round(S.job.salary * 1.02));
      S.income = S.job.salary * 12;
    }
  }
  recomputeExpense(S);
  S.money = Math.round((S.money || 0) + (S.income || 0) - (S.expense || 0));

  checkThreads(S);
  checkTraits(S, THEME);

  // 自然漂移
  S.stats.stress = clamp(S.stats.stress - ri(0, 2));
  S.stats.mood = clamp(Math.round(S.stats.mood + (60 - S.stats.mood) * 0.08 + ri(-2, 2)));
  if (S.age >= 50 && S.age % 2 === 0) S.stats.health = clamp(S.stats.health - 1);
  if (S.age >= 18 && S.age <= 40) S.stats.independence = clamp(S.stats.independence + 1);

  // 人生檢視（晚年自然安歇）
  if (S.alive && S.age >= 72) {
    let p = (S.age - 70) / 250;
    if (THEME && typeof THEME.deathCheck === 'function') {
      try {
        const tp = THEME.deathCheck(S);
        if (typeof tp === 'number') p = tp;
      } catch (e) {
        /* 容錯 */
      }
    }
    if (S.age >= 95 || R() < p) {
      S.alive = false;
      S.deathCause = '在睡夢中安詳安歇（晚年）';
    }
  }

  // 每 5 歲記錄
  if (S.age % 5 === 0) {
    S.statsHistory.push({
      age: S.age,
      mood: S.stats.mood,
      health: S.stats.health,
      social: S.stats.social,
      confidence: S.stats.confidence,
      stress: S.stats.stress,
      money: S.money
    });
  }

  if (!S.alive) {
    S.ended = true;
    if (_autoMode) return { ended: true, alive: false, age: S.age }; // 無聲模式：交棒模擬中死亡 → 直接結束
    UI.board(S);
    const act = await showFinale(S, { death: true, canInherit: (S.children || []).length > 0 });
    if (act && act.action === 'child') {
      const childS = await spawnChild(S, act.childIdx);
      if (childS) {
        CURRENT.S = childS;
        CURRENT.THEME = THEME;
        UI.board(childS);
        return { ended: false, alive: true, age: childS.age, handoff: true, nextGen: childS.generation };
      }
    }
    return { ended: true, alive: false, age: S.age, deathCause: S.deathCause };
  }

  S.saveTime = Date.now();
  if (!_autoMode) saveGame(S, 'auto');

  if (S.milestones.m_echo && S.age >= 80 && !S._echoShown && !_autoMode) {
    UI.board(S);
    await showFinale(S, { death: false, canContinue: true });
    saveGame(S, 'auto');
  }
}

export function checkEnd() {
  const { S } = requireGame();
  return {
    ended: !!S.ended,
    alive: !!S.alive,
    age: S.age,
    deathCause: S.deathCause,
    atEcho: !!(S.milestones && S.milestones.m_echo && S.age >= 80)
  };
}

function pickMoments(S, count) {
  const cands = (S.history || []).filter((h) => h.optionLabel);
  const scored = cands.map((h, i) => {
    let sc = 0;
    if (h.thread) sc += 6;
    if (h.dice) sc += 5;
    if (h.hasChars) sc += 3;
    sc += Math.min(h.mag || 0, 60) / 12;
    sc += (i / Math.max(1, cands.length)) * 0.5;
    return { h, sc };
  }).sort((a, b) => b.sc - a.sc);
  return scored.slice(0, count);
}

function mostImportant(S) {
  let best = null;
  let bestRel = 0;
  for (const id of Object.keys(S.chars || {})) {
    const c = S.chars[id];
    if (!c || !c.met) continue;
    if (c.rel >= bestRel) {
      bestRel = c.rel;
      best = id;
    }
  }
  return best ? { id: best, rel: bestRel } : null;
}

function svgChart(S) {
  const data = S.statsHistory || [];
  if (data.length < 2) return '<p class="muted">歲月還太短，尚未留下曲線。</p>';
  const W = 560;
  const H = 180;
  const pad = 24;
  const xs = data.map((d) => d.age);
  const minAge = xs[0];
  const maxAge = Math.max(xs[xs.length - 1], minAge + 1);
  const X = (a) => pad + ((a - minAge) / (maxAge - minAge)) * (W - pad * 2);
  const Y = (v) => pad + ((100 - clamp(v, 0, 100)) / 100) * (H - pad * 2);
  const lines = [];
  const series = [['mood', '#e8c36f'], ['health', '#84b7d8'], ['stress', '#e47b72']];
  for (const [key, color] of series) {
    const pts = data.map((d) => X(d.age) + ',' + Y(d[key] || 0)).join(' ');
    lines.push('<polyline points="' + pts + '" fill="none" stroke="' + color + '" stroke-width="2"/>');
  }
  const step = Math.max(1, Math.floor(data.length / 6));
  const labels = data.filter((d, i) => i % step === 0)
    .map((d) => '<text x="' + X(d.age) + '" y="' + (H - 6) + '" font-size="10" fill="#aab4c1">' + d.age + '</text>')
    .join('');
  return '<svg viewBox="0 0 ' + W + ' ' + H + '" class="curve" role="img" aria-label="人生曲線圖">' +
    lines.join('') + labels + '</svg>';
}

function buildFinaleHTML(S, opts) {
  const death = !!opts.death;
  const THEME = CURRENT.THEME || {};
  const ending = THEME.ending || {};
  const part = [];

  // 1. 終幕序
  part.push('<section class="finaleOpen"><h2>人生終幕</h2>' +
    '<p>' + ((death ? ending.openDeathText : ending.openText) || '從 0 歲到 ' + S.age + ' 歲，你走完了這一段。') + '</p></section>');

  // 2. 迴響
  const notes = (ending.echoNotes && ending.echoNotes.length) ? ending.echoNotes : ECHO_NOTES;
  const moments = pickMoments(S, 5);
  if (moments.length) {
    part.push('<section><h3>迴響</h3>');
    moments.forEach((m, i) => {
      const h = m.h;
      const note = notes[i % notes.length];
      const fx = h.effectsText ? '，' + h.effectsText : '';
      part.push('<div class="echo"><p><b>那年，你' + S_ageMark(h.age) + '</b>——' +
        (h.title || '那一年') + '。你選擇了「' + (h.optionLabel || '') + '」' + fx + '。</p>' +
        '<p class="echo-note">' + note + '</p></div>');
    });
    part.push('</section>');
  }

  // 3. 成績單
  part.push('<section><h3>一生的成績單</h3><div class="report">' +
    reportRow('最終心情', S.stats.mood) +
    reportRow('最終健康', S.stats.health) +
    reportRow('最終自信', S.stats.confidence) +
    reportRow('技能頂峰', topSkill(S)) +
    reportRow('財富', fmtMoney(S.money)) +
    reportRow('職業', S.jobHistory.length ? S.jobHistory.map((j) => j.title).join(' → ') : '從未就業') +
    reportRow('家庭', familySummary(S)) +
    reportRow('骰子勝率', (S.diceCount ? Math.round((S.dicePass / S.diceCount) * 100) : 0) + '%（' + S.dicePass + '/' + S.diceCount + '）') +
    '</div></section>');

  // 4. 人生曲線圖
  part.push('<section><h3>人生曲線圖</h3>' + svgChart(S) + '</section>');

  // 5. 最重要的人
  const person = mostImportant(S);
  if (person) {
    const name = charName(S, person.id);
    part.push('<section><h3>最重要的人</h3><p class="person">' + name + '，陪你走過最長的一段路。' +
      '你們的關係指數是 ' + person.rel + '。</p></section>');
  }

  // 6. 一生的註腳
  const dominant = dominantTrait(S);
  const pool = death ? DEATH_EPITAPHS : EPITAPHS;
  const epitaph = (ending.epitaphs && ending.epitaphs.length)
    ? pick(ending.epitaphs)
    : (pool[dominant] || pool.mood);
  part.push('<section><h3>一生的註腳</h3><p class="epitaph">「' + epitaph + '」</p></section>');

  // 6.5 家族樹（三代）
  if (S.family && S.family.tree) {
    part.push(familyTreeHTML(S));
  }

  // 6.6 繼承：以子女身分繼續
  if (opts.canInherit && S.children && S.children.length) {
    const kids = S.children.map((cid) => (S.childMeta || {})[cid] || {}).filter((c) => c.name);
    if (kids.length) {
      const btns = kids.map((c, i) =>
        '<button class="stable-choice inherit" data-child="' + i + '"><span class="title">以「' + c.name + '」的身分繼續</span>' +
        '<span class="sub">繼承遺產與天賦，從此延續家族</span></button>'
      ).join('');
      part.push('<section><h3>交棒給下一代</h3><p class="inherit-hint">你的人生畫下句點，但血脈與記憶仍會延續。選擇一個孩子，以他／她的視角繼續這個故事。</p>' +
        '<div class="inheritBtns">' + btns + '</div></section>');
    }
  }

  // 7. 製作人卡
  const credit = ending.credit || THEME.credit || 'Produce By: CrazyRL7';
  part.push('<section class="finaleCredit"><div class="credit">' + credit + '</div>' +
    '<div class="finaleBtns">' +
    (opts.canContinue ? '<button id="finaleContinue" class="stable-choice main"><span class="title">繼續人生</span></button>' : '') +
    '<button id="finaleRestart" class="stable-choice"><span class="title">重新開始</span></button>' +
    '</div></section>');

  return part.join('');
}

/** 三代家族樹 HTML：祖輩 / 父輩 / 己輩（自己標註 highlight） */
function familyTreeHTML(S) {
  const t = S.family.tree;
  const mk = (p) => '<span class="fnode' + (p.role === '自己' ? ' self' : '') + '"><i>' + p.role + '</i><b>' + p.name + '</b></span>';
  const row = (label, list) => '<div class="frow"><div class="fgen">' + label + '</div><div class="fmembers">' + (list || []).map(mk).join('') + '</div></div>';
  return '<section><h3>家族樹（第 ' + (S.generation || 1) + ' 代）</h3>' +
    '<div class="familyTree">' +
    row('祖輩', t.gen1) +
    row('父輩', t.gen2) +
    row('己輩', t.gen3) +
    '</div></section>';
}

function S_ageMark(age) {
  return '（' + age + ' 歲）';
}

function reportRow(label, value) {
  return '<div class="row"><span>' + label + '</span><b>' + value + '</b></div>';
}

function topSkill(S) {
  let best = { key: '', val: -1 };
  for (const k of Object.keys(S.skills)) {
    if (S.skills[k] > best.val) best = { key: k, val: S.skills[k] };
  }
  const THEME = CURRENT.THEME || {};
  const sk = (THEME.skillDef || []).find((x) => x.key === best.key);
  return (sk ? sk.label : best.key) + ' ' + best.val;
}

function familySummary(S) {
  const parts = [];
  if (S.spouse) parts.push('已婚');
  if (S.children.length) parts.push('子女 ' + S.children.length + ' 人');
  if (!S.spouse && !S.children.length) parts.push('單身');
  return parts.join('、');
}

function dominantTrait(S) {
  const order = ['mood', 'health', 'social', 'confidence', 'curiosity', 'family', 'independence'];
  let best = order[0];
  for (const k of order) {
    if (S.stats[k] > S.stats[best]) best = k;
  }
  return best;
}

function fmtMoney(n) {
  const THEME = CURRENT.THEME || {};
  return (typeof THEME.fmtMoney === 'function')
    ? THEME.fmtMoney(n)
    : '$ ' + Math.round(n || 0).toLocaleString('zh-TW');
}

function showFinale(S, opts) {
  const el = UI.finale(buildFinaleHTML(S, opts));
  if (!el) return Promise.resolve({ action: 'none' });
  return new Promise((resolve) => {
    const cont = el.querySelector('#finaleContinue');
    const restart = el.querySelector('#finaleRestart');
    const inherits = el.querySelectorAll('.inheritBtns button[data-child]');
    let done = false;
    const finish = (r) => {
      if (done) return;
      done = true;
      resolve(r);
    };
    // 重新開始：任何 finale 都必須可用（m_echo 的 canContinue 分支不能提早 return 跳過綁定）
    if (restart) {
      restart.addEventListener('click', () => {
        if (typeof window !== 'undefined') window.location.reload();
      });
    }
    if (inherits.length) {
      inherits.forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-child'), 10);
          if (isNaN(idx)) return;
          UI.hideFinale();
          finish({ action: 'child', childIdx: idx });
        });
      });
    }
    if (opts.canContinue && cont) {
      cont.addEventListener('click', () => {
        S._echoShown = true;
        UI.hideFinale();
        finish({ action: 'continue' });
      });
      return;
    }
    finish({ action: 'none' });
  });
}
