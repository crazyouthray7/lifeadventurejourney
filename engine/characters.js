'use strict';

const clamp = (v, min = 0, max = 100) => Math.max(min, Math.min(max, v));

let _THEME = null;

export function setTheme(t) {
  _THEME = t;
}

export function touchChar(S, id, delta) {
  if (!id) return null;
  S.chars = S.chars || {};
  const c = (S.chars[id] = S.chars[id] || { rel: 60, arcIdx: 0, met: false, extra: {} });
  if (typeof delta === 'number') {
    c.rel = clamp(c.rel + delta);
  } else if (delta && typeof delta === 'object') {
    if (typeof delta.rel === 'number') c.rel = clamp(c.rel + delta.rel);
    if (typeof delta.relSet === 'number') c.rel = clamp(delta.relSet);
    if (delta.met !== undefined) c.met = !!delta.met;
    if (delta.arcIdx !== undefined) c.arcIdx = delta.arcIdx | 0;
  }
  c.met = true;
  return c;
}

export function charName(S, id) {
  if (!id) return '';
  const defs = (_THEME && _THEME.characters) || [];
  const d = defs.find((x) => x.id === id);
  return (d && d.name) || id;
}

export function charPanel(S, THEME) {
  const t = THEME || _THEME;
  const defs = (t && t.characters) || [];
  const chars = S.chars || {};
  const met = Object.keys(chars).filter((id) => chars[id] && chars[id].met);
  if (!met.length) {
    return '<p class="muted">尚未遇見任何人。</p>';
  }
  return met.map((id) => {
    const c = chars[id];
    const d = defs.find((x) => x.id === id);
    const name = (d && d.name) || id;
    const arc = (d && d.arcs && d.arcs[c.arcIdx]) ? d.arcs[c.arcIdx] : '';
    const relPct = Math.max(0, Math.min(100, c.rel | 0));
    return '<div class="charCard">' +
      '<div class="charName">' + name + '</div>' +
      '<div class="charRel"><i style="width:' + relPct + '%"></i><b>' + relPct + '</b></div>' +
      (arc ? '<div class="charArc">' + arc + '</div>' : '') +
      '</div>';
  }).join('');
}
