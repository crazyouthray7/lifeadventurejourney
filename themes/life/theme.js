/**
 * 人生冒險誌｜人生模擬器 — 人生主題（THEME Contract 組裝）
 * Produce By: CrazyRL7
 *
 * 依 .omo/spec.md §13.5 組裝 THEME 物件。所有 data 檔契約見 §1。
 */
import { SCENES as BIRTH_SCENES, BIRTH_MILESTONES } from './data/scenes-birth.js';
import { SCENES as CHILDHOOD_SCENES, CHILDHOOD_MILESTONES } from './data/scenes-childhood.js';
import { SCENES as YOUTH_SCENES, YOUTH_MILESTONES } from './data/scenes-youth.js';
import { SCENES as DEPARTURE_SCENES, DEPARTURE_MILESTONES } from './data/scenes-departure.js';
import { SCENES as NEST_SCENES, NEST_MILESTONES } from './data/scenes-nest.js';
import { SCENES as MIDLIFE_SCENES, MIDLIFE_MILESTONES } from './data/scenes-midlife.js';
import { SCENES as OLDAGE_SCENES, OLDAGE_MILESTONES, ENDING } from './data/scenes-oldage.js';
import { THREAD_SCENES } from './data/threads.js';
import { CHARACTERS } from './data/characters.js';
import { JOBS } from './data/jobs.js';
import { SCHOOLS } from './data/schools.js';

// 注意：THREAD_SCENES 不併入 SCENES——引擎經由 THEME.threadScenes 獨立存取，
// 併入會導致伏筆場景被當普通場景抽走（見 .omo/spec.md §13.5）。
const SCENES = [
  ...BIRTH_SCENES,
  ...CHILDHOOD_SCENES,
  ...YOUTH_SCENES,
  ...DEPARTURE_SCENES,
  ...NEST_SCENES,
  ...MIDLIFE_SCENES,
  ...OLDAGE_SCENES,
];

const MILESTONES = [
  ...BIRTH_MILESTONES,
  ...CHILDHOOD_MILESTONES,
  ...YOUTH_MILESTONES,
  ...DEPARTURE_MILESTONES,
  ...NEST_MILESTONES,
  ...MIDLIFE_MILESTONES,
  ...OLDAGE_MILESTONES,
].sort((a, b) => a.age - b.age);

export const THEME = {
  id: 'life',
  title: '人生冒險誌',
  subtitle: '從出生到終幕，一場屬於你的人生',
  credit: 'Produce By: CrazyRL7',
  meta: {
    description: '人生冒險誌：從 0 歲出生開始的完整人生模擬器，經歷校園、友情、升學、工作、關係、家庭、住房、金錢、夢想與老後。',
    author: 'CrazyRL7',
  },

  statsDef: [
    { key: 'mood', label: '心情', icon: '☀', pos: true },
    { key: 'health', label: '健康', icon: '✚', pos: true },
    { key: 'social', label: '人際', icon: '◉', pos: true },
    { key: 'confidence', label: '自信', icon: '▲', pos: true },
    { key: 'curiosity', label: '好奇', icon: '？', pos: true },
    { key: 'family', label: '家庭', icon: '⌂', pos: true },
    { key: 'independence', label: '獨立', icon: '➤', pos: true },
    { key: 'stress', label: '壓力', icon: '⚠', pos: false },
  ],
  skillDef: [
    { key: 'language', label: '語文' },
    { key: 'math', label: '數理' },
    { key: 'science', label: '自然' },
    { key: 'arts', label: '藝術' },
    { key: 'sport', label: '體育' },
    { key: 'leadership', label: '領導' },
    { key: 'tech', label: '科技' },
  ],

  scenes: SCENES,
  milestones: MILESTONES,
  characters: CHARACTERS,
  jobs: JOBS,
  schools: SCHOOLS,
  threadScenes: THREAD_SCENES,
  ending: ENDING,

  scenesPerAct: { birth: 2, childhood: 3, youth: 3, adult: 3, midlife: 3, oldage: 2 },

  fmtMoney: (n) => 'NT$ ' + n.toLocaleString('zh-TW'),
  diceText: (roll, dc, pass) => `骰出 ${roll} ／ 目標 ${dc}${pass ? ' —— 通過' : ' —— 未通過'}`,
  deathCheck: null,
};
