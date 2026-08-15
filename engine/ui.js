'use strict';

import { charPanel } from './characters.js';
import { actOf } from './narrator.js';

const STAGE_NAMES = {
  birth: '誕生之光',
  childhood: '童年之光',
  youth: '青春十字路',
  departure: '啟程',
  nest: '築巢',
  midlife: '中流砥柱',
  oldage: '回望'
};

let _theme = null;

function $(id) {
  return (typeof document !== 'undefined') ? document.getElementById(id) : null;
}

function statLabel(key) {
  const t = _theme || {};
  const sd = (t.statsDef || []).find((x) => x.key === key);
  if (sd) return sd.label || key;
  const sk = (t.skillDef || []).find((x) => x.key === key);
  return (sk && sk.label) || key;
}

function needUnmet(opt, S) {
  if (!opt || !opt.need || !S) return false;
  const { stat, min } = opt.need;
  const val = (S.stats && (stat in S.stats))
    ? S.stats[stat]
    : (S.skills && (stat in S.skills)) ? S.skills[stat] : 0;
  return val < (min || 0);
}

export const UI = {};

UI.setTheme = function (t) {
  _theme = t;
};

UI.clearActions = function () {
  const title = $('actionTitle');
  if (title) title.textContent = '';
  const body = $('actionBody');
  if (body) body.innerHTML = '';
  const actions = $('actions');
  if (actions) actions.classList.remove('show');
};

UI.choose = function (opts, extra) {
  const body = $('actionBody');
  if (!body) return Promise.resolve(-1);
  const title = extra && extra.title;
  const S = extra && extra.S;
  const t = $('actionTitle');
  if (t && title) t.textContent = title;
  const actions = $('actions');
  if (actions) actions.classList.add('show');
  body.innerHTML = '';
  return new Promise((resolve) => {
    const list = opts || [];
    let enabledCount = 0;
    list.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'stable-choice' + (opt.main ? ' main' : '') + (opt.warn ? ' warn' : '');
      const locked = needUnmet(opt, S);
      if (locked) btn.disabled = true;
      else enabledCount++;
      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = String(i + 1);
      const titleEl = document.createElement('span');
      titleEl.className = 'title';
      titleEl.textContent = opt.label || '';
      const small = document.createElement('small');
      small.className = 'desc';
      const hints = [];
      if (opt.hint) hints.push(opt.hint);
      if (locked && opt.need) hints.push('需要 ' + statLabel(opt.need.stat) + ' ≥ ' + opt.need.min);
      small.textContent = hints.join(' · ');
      const arrow = document.createElement('span');
      arrow.className = 'arrow';
      arrow.textContent = '›';
      btn.appendChild(num);
      btn.appendChild(titleEl);
      btn.appendChild(small);
      btn.appendChild(arrow);
      btn.addEventListener('click', () => {
        UI.clearActions();
        resolve(i);
      });
      body.appendChild(btn);
    });
    if (enabledCount === 0 && list.length) {
      body.querySelectorAll('.stable-choice').forEach((b) => {
        b.disabled = false;
        b.classList.add('forced');
      });
    }
    if (!list.length) resolve(-1);
  });
};

UI.card = function (cls, title, html) {
  const log = $('log');
  if (!log) return;
  const card = document.createElement('div');
  card.className = 'card' + (cls ? ' ' + cls : '');
  if (title) {
    const h4 = document.createElement('h4');
    h4.textContent = title;
    card.appendChild(h4);
  }
  if (html) {
    const p = document.createElement('p');
    p.innerHTML = html;
    card.appendChild(p);
  }
  log.appendChild(card);
  log.scrollTop = log.scrollHeight;
};

UI.divider = function (text) {
  const log = $('log');
  if (!log) return;
  const d = document.createElement('div');
  d.className = 'yearHead';
  d.textContent = text;
  log.appendChild(d);
  log.scrollTop = log.scrollHeight;
};

UI.diceShow = function (text) {
  UI.card('info', '骰子判定', text || '');
};

let _prevBoard = null;

UI.boardReset = function () {
  _prevBoard = null;
};

function deltaHtml(prev, key, val) {
  if (!prev) return '';
  const pv = prev[key];
  if (pv == null || pv === val) return '';
  const d = val - pv;
  return '<em class="delta ' + (d > 0 ? 'up' : 'down') + '">' + (d > 0 ? '+' : '') + d + '</em>';
}

UI.board = function (S) {
  const board = $('board');
  if (!board) return;
  const t = _theme || {};
  const prev = _prevBoard;

  let statsEl = board.querySelector('.stats');
  if (!statsEl) {
    statsEl = document.createElement('div');
    statsEl.className = 'stats';
    board.appendChild(statsEl);
  }
  statsEl.innerHTML = '';
  const statsDef = t.statsDef || [];
  const statsSnap = {};
  for (const d of statsDef) {
    const val = S.stats[d.key] != null ? S.stats[d.key] : 0;
    statsSnap[d.key] = val;
    const item = document.createElement('span');
    item.className = 'stat' + (d.pos ? '' : ' neg');
    item.innerHTML = '<i>' + (d.icon || '') + '</i>' + (d.label || d.key) + '<b>' + val + '</b>' +
      deltaHtml(prev && prev.stats, d.key, val);
    statsEl.appendChild(item);
  }

  let skillsEl = board.querySelector('.skills');
  if (!skillsEl) {
    skillsEl = document.createElement('div');
    skillsEl.className = 'skills';
    board.appendChild(skillsEl);
  }
  skillsEl.innerHTML = '';
  const skillDef = t.skillDef || [];
  const skillSnap = {};
  for (const d of skillDef) {
    const val = S.skills[d.key] != null ? S.skills[d.key] : 0;
    skillSnap[d.key] = val;
    const item = document.createElement('span');
    item.className = 'skill';
    item.innerHTML = (d.label || d.key) + ' <b>' + val + '</b>' +
      deltaHtml(prev && prev.skills, d.key, val);
    skillsEl.appendChild(item);
  }

  let meta = $('boardMeta');
  if (!meta) {
    meta = document.createElement('div');
    meta.id = 'boardMeta';
    board.appendChild(meta);
  }
  const pills = [
    '歲數 ' + S.age,
    S.job ? S.job.title : '無業',
    housingLabel(S.housing)
  ];
  const money = t.fmtMoney ? t.fmtMoney(S.money) : '$ ' + S.money;
  const moneyDelta = (prev && prev.money != null && prev.money !== S.money)
    ? '<em class="delta ' + (S.money > prev.money ? 'up' : 'down') + '">' +
      (S.money > prev.money ? '+' : '') + (t.fmtMoney ? t.fmtMoney(Math.abs(S.money - prev.money)).replace('$ ', '') : (S.money - prev.money)) +
      '</em>'
    : '';
  meta.innerHTML = pills.map((x) => '<span class="pill">' + x + '</span>').join('') +
    '<span class="pill money">' + money + moneyDelta + '</span>';

  let traits = $('traits');
  if (!traits) {
    traits = document.createElement('div');
    traits.id = 'traits';
    board.appendChild(traits);
  }
  traits.innerHTML = (S.traits || []).map((id) => {
    const def = (t.traits || []).find((x) => x.id === id);
    return '<span class="trait">' + ((def && def.name) || id) + '</span>';
  }).join('');

  let cp = board.querySelector('.charsPanel');
  if (!cp) {
    cp = document.createElement('div');
    cp.className = 'charsPanel';
    board.appendChild(cp);
  }
  cp.innerHTML = charPanel(S, _theme);

  _prevBoard = { stats: statsSnap, skills: skillSnap, money: S.money };
};

function housingLabel(h) {
  if (h === 'family') return '住家裡';
  if (h === 'rent') return '租屋';
  if (h === 'own') return '自有房';
  if (h === 'own_house') return '自有宅';
  return '家';
}

UI.timeline = function (S) {
  const list = $('timelineList');
  if (!list) return;
  list.innerHTML = '';
  const byAge = new Map();
  for (const h of (S.history || [])) {
    if (!byAge.has(h.age)) byAge.set(h.age, []);
    byAge.get(h.age).push(h);
  }
  const maxAge = Math.max(0, S.age | 0);
  let curAct = null;
  for (let age = 0; age <= maxAge; age++) {
    const act = actOf(age);
    if (act !== curAct) {
      curAct = act;
      const st = document.createElement('div');
      st.className = 'tlStage';
      st.textContent = (STAGE_NAMES[act] || act) + ' · ' + age + ' 歲起';
      list.appendChild(st);
    }
    const recs = byAge.get(age) || [];
    const label = recs.length
      ? recs.map((r) => r.title || r.optionLabel).filter(Boolean).join('、')
      : '這一年沒有特別的事';
    const d = document.createElement('div');
    d.className = 'tlItem';
    const dot = document.createElement('span');
    dot.className = 'tlDot';
    dot.textContent = String(age);
    const txt = document.createElement('span');
    txt.className = 'tlText';
    txt.textContent = label;
    d.appendChild(dot);
    d.appendChild(txt);
    list.appendChild(d);
  }
  list.scrollTop = list.scrollHeight;
};

UI.modal = function (html) {
  const modal = $('modal');
  const box = $('modalBox');
  if (!modal || !box) return { close() {} };
  box.innerHTML = html;
  modal.classList.add('show');
  return {
    el: modal,
    close() {
      modal.classList.remove('show');
    }
  };
};

UI.finale = function (html) {
  const el = $('finale');
  if (!el) return null;
  el.innerHTML = html;
  el.hidden = false;
  el.classList.add('show');
  el.scrollTop = 0;
  return el;
};

UI.hideFinale = function () {
  const el = $('finale');
  if (el) {
    el.hidden = true;
    el.classList.remove('show');
  }
};
