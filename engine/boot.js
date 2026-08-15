'use strict';

import { newGame, resumeGame, playYear, seedNum } from './core.js';
import { loadGame, saveGame, listSlots, clearSlot } from './save.js';

let _theme = null;
let _bootPromise = null;

function qs(name) {
  if (typeof window === 'undefined') return null;
  try {
    return new URLSearchParams(window.location.search).get(name);
  } catch (e) {
    return null;
  }
}

function randSeed() {
  return Math.random().toString(36).slice(2, 10);
}

export function boot() {
  if (_bootPromise) return _bootPromise;
  _bootPromise = doBoot();
  return _bootPromise;
}

async function doBoot() {
  if (typeof window === 'undefined') return null;
  const themeId = qs('theme') || 'life';
  const urlSeed = qs('seed');
  const mod = await import('../themes/' + themeId + '/theme.js');
  _theme = mod.THEME;

  window.LifeEngine = {
    theme: _theme,
    boot,
    startGame,
    listSlots,
    saveGame,
    loadGame,
    clearSlot,
    seedNum
  };

  const auto = loadGame('auto');
  const contBtn = document.getElementById('continueBtn');
  if (contBtn) {
    if (auto && !auto.ended) {
      contBtn.hidden = false;
      contBtn.classList.remove('hidden');
      contBtn.addEventListener('click', () => {
        resumeGame(_theme, auto);
        const start = document.getElementById('start');
        if (start) start.classList.add('hidden');
        runLoop();
      });
    } else {
      contBtn.hidden = true;
      contBtn.classList.add('hidden');
    }
  }

  const seedText = document.getElementById('seedText');
  if (seedText) seedText.textContent = urlSeed || randSeed();
  const seedRe = document.getElementById('seedRe');
  if (seedRe) {
    seedRe.addEventListener('click', () => {
      if (seedText) seedText.value = randSeed();
    });
  }

  const el = document.getElementById('gameTitle');
  if (el) el.textContent = _theme.title || '人生冒險誌';
  const sub = document.getElementById('gameSubtitle');
  if (sub) sub.textContent = _theme.subtitle || '';
  const credit = document.getElementById('credit');
  if (credit) credit.textContent = _theme.credit || 'Produce By: CrazyRL7';

  // §13.5 接縫：綁定 #startForm 送出 → startGame(formData)
  const startForm = document.getElementById('startForm');
  if (startForm) {
    startForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(startForm);
      startGame({
        name: String(fd.get('name') || '').trim(),
        city: fd.get('city') || 'taipei',
        family: fd.get('family') || 'middle',
        parentsJob: '',
        seed: seedText ? seedText.textContent : ''
      });
    });
  }

  return _theme;
}

export function startGame(formData) {
  const fd = formData || {};
  if (!_theme) {
    boot().then(() => startGame(fd));
    return;
  }
  const seed = fd.seed || randSeed();
  const S = newGame(_theme, {
    seed,
    name: fd.name || '',
    birth: {
      city: fd.city || 'taipei',
      family: fd.family || 'middle',
      parentsJob: fd.parentsJob || ''
    }
  });
  const start = document.getElementById('start');
  if (start) start.classList.add('hidden');
  saveGame(S, 'auto');
  runLoop();
}

async function runLoop() {
  if (typeof window === 'undefined') return;
  while (true) {
    const res = await playYear();
    if (res.handoff) continue; // 世代交替：以子女身分繼續，不中斷循環
    if (res.ended || !res.alive) break;
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
}
