'use strict';

const PREFIX = 'laj_';
export const SLOTS = ['auto', 's1', 's2', 's3'];

function key(slot) {
  return PREFIX + (slot || 'auto');
}

function hasStorage() {
  return typeof localStorage !== 'undefined';
}

function serialize(S, savedAt) {
  try {
    return JSON.stringify({ S, savedAt });
  } catch (e) {
    return null;
  }
}

export function saveGame(S, slot) {
  if (!S || !hasStorage()) return false;
  try {
    const savedAt = Date.now();
    S.saveTime = savedAt;
    const payload = serialize(S, savedAt);
    if (payload == null) return false;
    localStorage.setItem(key(slot), payload);
    return true;
  } catch (e) {
    return false;
  }
}

export function loadGame(slot) {
  if (!hasStorage()) return null;
  try {
    const raw = localStorage.getItem(key(slot));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const S = (parsed && parsed.S) || parsed;
    if (!S || typeof S !== 'object' || typeof S.age !== 'number') return null;
    S.saveTime = (parsed && parsed.savedAt) || S.saveTime || null;
    S._usedScenes = S._usedScenes || {};
    S._queuedScenes = S._queuedScenes || [];
    S.flags = S.flags || {};
    S._rngUsed = S._rngUsed | 0;
    S._started = !!S._started;
    S._echoShown = !!S._echoShown;
    S.stats = S.stats || {};
    S.skills = S.skills || {};
    S.history = S.history || [];
    S.threads = S.threads || [];
    S.statsHistory = S.statsHistory || [];
    S.milestones = S.milestones || {};
    return S;
  } catch (e) {
    return null;
  }
}

export function listSlots() {
  if (!hasStorage()) return [];
  const out = [];
  for (const s of SLOTS) {
    try {
      const raw = localStorage.getItem(key(s));
      if (!raw) continue;
      const parsed = JSON.parse(raw);
      const S = (parsed && parsed.S) || parsed;
      if (!S || typeof S.age !== 'number') continue;
      out.push({
        slot: s,
        age: S.age,
        name: S.name || '',
        seed: S.seed || '',
        saveTime: (parsed && parsed.savedAt) || S.saveTime || null,
        alive: !!S.alive,
        ended: !!S.ended
      });
    } catch (e) {
      /* skip corrupt slot */
    }
  }
  return out;
}

export function clearSlot(slot) {
  if (!hasStorage()) return;
  try {
    localStorage.removeItem(key(slot));
  } catch (e) {
    /* ignore */
  }
}
