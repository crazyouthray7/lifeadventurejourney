'use strict';

import { UI } from './ui.js';

let _THEME = null;

export function setTheme(t) {
  _THEME = t;
}

function findTraitDef(THEME, id) {
  const t = THEME || _THEME;
  const list = (t && t.traits) || [];
  return list.find((x) => x.id === id) || null;
}

export function unlockTrait(S, THEME, id) {
  if (!id) return false;
  S.traits = S.traits || [];
  if (S.traits.includes(id)) return false;
  S.traits.push(id);
  const def = findTraitDef(THEME, id);
  const name = (def && def.name) || id;
  const desc = (def && def.desc) || '';
  UI.card('gold', '隱藏特質解鎖：' + name, desc);
  if (def && typeof def.apply === 'function') {
    try {
      def.apply(S);
    } catch (e) {
      /* 內容鉤子容錯 */
    }
  }
  return true;
}

export function checkTraits(S, THEME) {
  const t = THEME || _THEME;
  const list = (t && t.traits) || [];
  for (const def of list) {
    if (!def || !def.hidden || !def.id || S.traits.includes(def.id)) continue;
    if (typeof def.cond !== 'function') continue;
    try {
      if (def.cond(S)) unlockTrait(S, t, def.id);
    } catch (e) {
      /* 條件容錯 */
    }
  }
}
