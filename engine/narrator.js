'use strict';

let _THEME = null;

export function setTheme(t) {
  _THEME = t;
}

export function actOf(age) {
  const a = age | 0;
  if (a <= 6) return 'birth';
  if (a <= 12) return 'childhood';
  if (a <= 18) return 'youth';
  if (a <= 24) return 'departure';
  if (a <= 40) return 'nest';
  if (a <= 60) return 'midlife';
  return 'oldage';
}

export function sceneCountForAge(age) {
  const map = (_THEME && _THEME.scenesPerAct) || {};
  let key;
  const a = age | 0;
  if (a <= 6) key = 'birth';
  else if (a <= 12) key = 'childhood';
  else if (a <= 18) key = 'youth';
  else if (a <= 40) key = 'adult';
  else if (a <= 60) key = 'midlife';
  else key = 'oldage';
  return map[key] != null ? map[key] : 2;
}

export function scheduleThread(S, thread) {
  if (!thread || !thread.sceneId) return null;
  S.threads = S.threads || [];
  const entry = {
    threadId: thread.threadId || thread.type || 'revisit',
    atAge: thread.atAge != null ? thread.atAge : (S.age + 5),
    sceneId: thread.sceneId,
    type: thread.type || 'revisit',
    source: thread.source || null,
    triggered: false
  };
  S.threads.push(entry);
  return entry;
}

export function checkThreads(S) {
  const scenes = (_THEME && _THEME.threadScenes) || [];
  let n = 0;
  for (const t of (S.threads || [])) {
    if (t.triggered) continue;
    if (S.age >= (t.atAge || 0)) {
      t.triggered = true;
      const exists = !!t.sceneId && scenes.some((s) => s.id === t.sceneId);
      if (exists) {
        S._queuedScenes = S._queuedScenes || [];
        S._queuedScenes.push(t.sceneId);
        n++;
      }
    }
  }
  return n;
}
