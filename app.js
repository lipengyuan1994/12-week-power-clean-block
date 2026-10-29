// 12-Week Power Clean Block — standalone, localStorage only, all weights in LB.
const LIFTS = ['Power Clean', 'Front Squat', 'Back Squat', 'Narrow Deadlift', 'Strict Press'];
const MOVEMENTS = {
  'Power Clean': { base: 'clean', cues: ['Bar close to the legs throughout', 'Drive through the whole foot, then pull yourself under fast', 'Elbows through to a high, secure rack'], video: 'https://catalystathletics.com/exercise/630/Power-Clean-From-Power-Position/', note: 'Catalyst Athletics demo guide (power-position clean, same turnover).' },
  'Technique Clean': { base: 'clean', cues: ['Weight you can move fast with perfect positions', 'Stop the set if bar speed or positions break down'], video: 'https://catalystathletics.com/exercise/630/Power-Clean-From-Power-Position/', note: 'Catalyst Athletics demo guide.' },
  'Hang Power Clean': { base: 'clean', cues: ['Start from above the knee, bar against the legs', 'Vertical leg drive, then fast elbows'], video: 'https://www.catalystathletics.com/exercise/664/Hang-Muscle-Clean/', note: 'Catalyst Athletics hang-clean family demo guide.' },
  'Above-Knee Clean': { base: 'clean', cues: ['Start just above the knee, shoulders over the bar', 'Sweep the bar back to the hips, do not swing it out'], video: 'https://www.youtube.com/results?search_query=above+knee+power+clean+demo', note: 'Search results page — pick a coaching demo (no video is hosted here).' },
  'Clean Pull': { base: 'clean', cues: ['Stay over the bar until past the knees', 'Full vertical extension, shrug up and back, bar stays close'], video: 'https://www.catalystathletics.com/exercise/454/Flat-Footed-Clean-Pull-To-Hold/', note: 'Catalyst Athletics clean-pull demo guide.' },
  'Front Squat': { base: 'front', cues: ['Bar on the front deltoids, elbows up', 'Stay tall, knees track with toes, drive through midfoot'], video: 'https://barbell-logic.com/gym-shorts-the-front-squat/', note: 'Barbell Logic front-squat demo.' },
  'Back Squat': { base: 'back', cues: ['Brace hard, control the descent', 'Drive up without the hips shooting up first'], video: 'https://www.youtube.com/results?search_query=how+to+back+squat+barbell+demo', note: 'Search results page — pick a coaching demo.' },
  'Narrow Deadlift': { base: 'deadlift', cues: ['Back set and never rounded', 'Push the floor away; if the back moves, lower the weight'], video: 'https://www.youtube.com/results?search_query=narrow+stance+deadlift+demo', note: 'Search results page — pick a coaching demo.' },
  'Strict Press': { base: 'press', cues: ['Ribs down, glutes tight, no leg drive', 'Head through at the top, every rep locked out'], video: 'https://www.youtube.com/results?search_query=strict+overhead+press+demo', note: 'Search results page — pick a coaching demo.' },
  'Core / Accessory': { base: null, cues: ['12–15RM weight', 'Stop 1–2 reps short of failure'], video: 'https://www.youtube.com/results?search_query=core+accessory+training+barbell+athlete', note: 'Search results page — pick a coaching demo.' }
};
function round25(x) { return Math.round(x / 2.5) * 2.5; }
function baseFor(ex) {
  if (ex.base === 'clean') return 'Power Clean';
  if (ex.base === 'front') return 'Front Squat';
  if (ex.base === 'back') return 'Back Squat';
  if (ex.base === 'deadlift') return 'Narrow Deadlift';
  if (ex.base === 'press') return 'Strict Press';
  return null;
}
function prescribedLb(ex, oneRMs) {
  // Program exercises carry a name, not a base field — derive the base from
  // the movement library (same mapping the UI uses for demo videos/cues).
  const base = ex.base || (typeof MOVEMENTS !== 'undefined' && MOVEMENTS[ex.name] ? MOVEMENTS[ex.name].base : null);
  const lift = base ? baseFor({ base }) : null;
  if (!lift || !oneRMs[lift] || !ex.pct) return null;
  return round25(oneRMs[lift] * ex.pct / 100);
}
// Rest-timer defaults (seconds) — the spec the app ships with.
function timerDefault(ex) {
  if (ex.test) return 180;
  if (ex.technique) return 90;
  if (ex.kind === 'accessory') return 60;
  if (ex.pct >= 90) return 180;
  if (ex.pct >= 85) return 150;
  if (ex.pct >= 75) return 120;
  return 90;
}
function timerReason(ex) {
  if (ex.test) return 'Week-12 test single — full recovery (3:00).';
  if (ex.technique) return 'Technique work — short rest to keep quality and speed (1:30).';
  if (ex.kind === 'accessory') return 'Accessory — short rest (1:00).';
  return ex.pct + '% set — ' + Math.floor(timerDefault(ex) / 60) + ':' + String(timerDefault(ex) % 60).padStart(2, '0') + ' rest.';
}
// ---- Program ----
function ex(name, pct, sets, reps, extra) { return Object.assign({ name, pct, sets, reps }, extra || {}); }
function acc(name, sets) { return { name, pct: null, sets, reps: '12–15', kind: 'accessory' }; }
function blockADay(day, week) {
  const lower = (week % 2 === 1) ? ex('Back Squat', 72, 4, 5) : ex('Narrow Deadlift', 75, 3, 3);
  if (day === 0) return [ex('Technique Clean', 62, 4, 3, { technique: true }), ex('Hang Power Clean', 65, 3, 3), ex('Front Squat', 72, 4, 5), acc('Core — abdomen', 3)];
  if (day === 1) return [ex('Clean Pull', 80, 4, 3), lower, acc('Back accessory — row / pull-up', 3)];
  return [ex('Power Clean', 70, 4, 3), ex('Strict Press', 68, 3, 8), acc('Chest / triceps + core', 3)];
}
function blockBDay(day, week) {
  const lower = (week % 2 === 1) ? ex('Back Squat', 82, 4, 4) : ex('Narrow Deadlift', 82, 3, 3);
  if (day === 0) return [ex('Power Clean', 80, 5, 2), ex('Above-Knee Clean', 80, 4, 2), ex('Front Squat', 80, 3, 3), acc('Core — obliques', 3)];
  if (day === 1) return [ex('Clean Pull', 95, 4, 3), lower, acc('Back accessory — row / pull-up', 2)];
  return [ex('Technique Clean', 75, 4, 3, { technique: true }), ex('Strict Press', 78, 4, 5), acc('Shoulder / core', 2)];
}
function deload(days) {
  return days.map(list => list.map(e => {
    if (e.kind === 'accessory') return Object.assign({}, e, { sets: 2 });
    return Object.assign({}, e, { pct: Math.max(50, e.pct - 10), sets: Math.max(2, Math.ceil(e.sets * 0.6)) });
  }));
}
function programForWeek(week) {
  let days, block, label;
  if (week <= 4) { block = 'Accumulation'; label = '65–75% · base + technique'; days = [blockADay(0, week), blockADay(1, week), blockADay(2, week)]; if (week === 4) days = deload(days); }
  else if (week <= 8) { block = 'Transmutation'; label = '70–88% · strength conversion'; days = [blockBDay(0, week), blockBDay(1, week), blockBDay(2, week)]; if (week === 8) days = deload(days); }
  else if (week === 9) { block = 'Realization'; label = '85–93% · peak'; days = [[ex('Power Clean', 87, 4, 2), ex('Front Squat', 87, 3, 3)], [ex('Clean Pull', 95, 3, 3), ex('Back Squat', 87, 3, 3)], [ex('Technique Clean', 80, 3, 2, { technique: true }), ex('Strict Press', 82, 3, 3)]]; }
  else if (week === 10) { block = 'Realization'; label = '85–93% · peak'; days = [[ex('Power Clean', 91, 5, '1–2'), ex('Front Squat', 90, 3, 2)], [ex('Clean Pull', 100, 3, 2), ex('Back Squat', 90, 3, 2)], [ex('Technique Clean', 85, 3, 2, { technique: true }), ex('Strict Press', 85, 3, 3)]]; }
  else if (week === 11) { block = 'Realization — taper'; label = 'Volume roughly halved, keep speed'; days = [[ex('Power Clean', 82, 3, 2), ex('Front Squat', 82, 2, 3)], [ex('Clean Pull', 80, 3, 2), ex('Back Squat', 80, 2, 3)], [ex('Technique Clean', 80, 3, 2, { technique: true }), ex('Strict Press', 80, 2, 3)]]; }
  else { block = 'Realization — test'; label = 'Single test day only'; days = [[ex('Power Clean', 70, 1, 1, { test: true, ladder: true }), ex('Front Squat', 60, 2, 3)], null, null]; }
  return { block, label, days };
}
function mainDays(week) { return week === 12 ? 1 : 3; }
function totalMainDays() { let n = 0; for (let w = 1; w <= 12; w++) n += mainDays(w); return n; } // 34
// Merge rule: same date + same week + same day overwrites/aggregates into ONE record.
function sessionKey(date, week, day) { return date + '|' + week + '|' + day; }
function mergeSession(sessions, key, patch) {
  const prev = sessions[key] || { sets: {}, exercises: {} };
  const next = JSON.parse(JSON.stringify(prev));
  Object.assign(next, patch);
  if (patch.sets) { next.sets = Object.assign({}, prev.sets, patch.sets); }
  if (patch.exercises) { next.exercises = Object.assign({}, prev.exercises, patch.exercises); }
  sessions[key] = next;
  return sessions[key];
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { round25, timerDefault, timerReason, prescribedLb, programForWeek, totalMainDays, sessionKey, mergeSession, LIFTS };
}

// ---- Browser UI (guarded so the pure functions above stay testable in Node) ----
if (typeof document !== 'undefined') {
  const KEY = 'pcb-v1';
  const todayStr = () => new Date().toISOString().slice(0, 10);
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || { theme: 'light', oneRMs: {}, prs: [], sessions: {} }; } catch (e) { return { theme: 'light', oneRMs: {}, prs: [], sessions: {} }; } }
  function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
  let state = load();
  let currentWeek = 1, currentDay = 0;
  document.documentElement.setAttribute('data-theme', state.theme || 'light');
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = s => { const m = Math.floor(s / 60), sec = s % 60; return m + ':' + String(sec).padStart(2, '0'); };
  // Theme
  function syncThemeBtn() { $('themeBtn').textContent = (state.theme === 'dark') ? '☀️ Light theme' : '🌙 Dark theme'; }
  $('themeBtn').onclick = () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', state.theme); save(); syncThemeBtn(); };
  // Tabs
  document.querySelectorAll('.tab').forEach(b => b.onclick = () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); $('tab-' + b.dataset.tab).classList.add('active');
    renderAll();
  });
  // Timer
  let timerId = null, timerLeft = 0, timerPaused = false;
  function openTimer(ex) {
    timerLeft = timerDefault(ex); timerPaused = false;
    $('timerReason').textContent = timerReason(ex);
    $('timerModal').classList.remove('hidden'); tickTimer();
    clearInterval(timerId); timerId = setInterval(tickTimer, 1000);
  }
  function tickTimer() {
    if (!timerPaused) {
      if (timerLeft > 0) timerLeft--;
      if (timerLeft === 0) { clearInterval(timerId); beep(); try { navigator.vibrate && navigator.vibrate([200, 100, 200]); } catch (e) {} }
    }
    $('timerDisplay').textContent = fmt(timerLeft);
  }
  function beep() { try { const ctx = new (window.AudioContext || window.webkitAudioContext)(); const o = ctx.createOscillator(); o.connect(ctx.destination); o.start(); setTimeout(() => o.stop(), 600); } catch (e) {} }
  function closeTimer() { clearInterval(timerId); $('timerModal').classList.add('hidden'); }
  document.querySelectorAll('[data-preset]').forEach(b => b.onclick = () => { timerLeft = +b.dataset.preset; timerPaused = false; $('timerDisplay').textContent = fmt(timerLeft); });
  $('timerMinus30').onclick = () => { timerLeft = Math.max(0, timerLeft - 30); $('timerDisplay').textContent = fmt(timerLeft); };
  $('timerPlus30').onclick = () => { timerLeft += 30; $('timerDisplay').textContent = fmt(timerLeft); };
  $('timerPlus60').onclick = () => { timerLeft += 60; $('timerDisplay').textContent = fmt(timerLeft); };
  $('timerPause').onclick = e => { timerPaused = !timerPaused; e.target.textContent = timerPaused ? 'Resume' : 'Pause'; };
  $('timerSkip').onclick = closeTimer;
  // Selects
  function fillSelects() {
    $('trainWeek').innerHTML = Array.from({ length: 12 }, (_, i) => '<option value="' + (i + 1) + '">Week ' + (i + 1) + '</option>').join('');
    $('trainWeek').value = currentWeek;
    $('prLift').innerHTML = LIFTS.map(l => '<option>' + l + '</option>').join('');
    $('rmLift').innerHTML = LIFTS.map(l => '<option>' + l + '</option>').join('');
  }
  function currentWeekFromStart() {
    if (!state.programStart) return null;
    const d = Math.floor((new Date(todayStr()) - new Date(state.programStart)) / 86400000 / 7) + 1;
    return Math.min(12, Math.max(1, d));
  }
  function sessionsList() { return Object.entries(state.sessions).map(([k, v]) => Object.assign({ key: k }, v)).sort((a, b) => (b.date || '').localeCompare(a.date || '')); }
  function sessionLoad(s) { let total = 0; Object.values(s.sets || {}).forEach(set => { if (set.checked) total += (set.lb || 0) * (typeof set.reps === 'number' ? set.reps : 1); }); return total; }
  function renderDashboard() {
    const prog = programForWeek(currentWeek);
    const cw = currentWeekFromStart();
    $('dashProgram').innerHTML = 'Current week: <b>Week ' + (cw || currentWeek) + ' — ' + esc(prog.block) + '</b> · ' + esc(prog.label) +
      (state.programStart ? ' · started ' + esc(state.programStart) : ' · set a start date to track the week automatically');
    $('programStart').value = state.programStart || '';
    const list = sessionsList();
    const doneDays = new Set(list.map(s => s.week + '-' + s.day));
    const totalSets = list.reduce((n, s) => n + Object.values(s.sets || {}).filter(x => x.checked).length, 0);
    const totalLoad = list.reduce((n, s) => n + sessionLoad(s), 0);
    const pcPrs = state.prs.filter(p => p.lift === 'Power Clean').sort((a, b) => a.date.localeCompare(b.date));
    const pcBest = state.oneRMs['Power Clean'] || (pcPrs.length ? pcPrs[pcPrs.length - 1].lb : null);
    const pcGain = pcPrs.length > 1 ? pcPrs[pcPrs.length - 1].lb - pcPrs[0].lb : 0;
    $('dashStats').innerHTML = [
      ['Main days logged', doneDays.size + ' / ' + totalMainDays()],
      ['Sets completed', totalSets],
      ['Total load', totalLoad.toLocaleString() + ' lb'],
      ['Power clean best', pcBest ? pcBest + ' lb' + (pcGain ? ' (' + (pcGain > 0 ? '+' : '') + pcGain + ' lb)' : '') : '— enter a PR']
    ].map(([k, v]) => '<div class="card stat"><span>' + k + '</span><b>' + esc(v) + '</b></div>').join('');
    let grid = '<div class="weekgrid">';
    for (let w = 1; w <= 12; w++) for (let d = 0; d < mainDays(w); d++) grid += '<div class="weekcell ' + (doneDays.has(w + '-' + d) ? 'done' : '') + '" data-w="' + w + '" data-d="' + d + '">W' + w + 'D' + (d + 1) + '</div>';
    grid += '</div>';
    $('progressGrid').innerHTML = grid;
    document.querySelectorAll('.weekcell').forEach(c => c.onclick = () => { currentWeek = +c.dataset.w; currentDay = +c.dataset.d; $('trainWeek').value = currentWeek; $('trainDay').value = currentDay; document.querySelector('[data-tab="train"]').click(); });
    const plan = prog.days[currentDay] || prog.days[0] || [];
    $('weekPlan').innerHTML = plan.map(e => '<div>• ' + esc(e.name) + ' — ' + (e.pct ? e.pct + '% × ' + e.sets + ' × ' + e.reps : e.sets + ' × ' + e.reps + ' (12–15RM)') + (prescribedLb(e, state.oneRMs) != null ? ' → <b>' + prescribedLb(e, state.oneRMs) + ' lb</b>' : ' <i>(enter a PR to see lb)</i>') + '</div>').join('') || '<p class="hint">Rest / light mobility day.</p>';
    const weekly = {}; list.forEach(s => { weekly[s.week] = (weekly[s.week] || 0) + sessionLoad(s); });
    const maxW = Math.max(1, ...Object.values(weekly));
    $('loadChart').innerHTML = Array.from({ length: 12 }, (_, i) => { const w = i + 1, v = weekly[w] || 0; return '<div>Week ' + w + ': <div class="bar" style="width:' + Math.max(v ? 4 : 0, v / maxW * 100) + '%">' + (v ? v.toLocaleString() + ' lb' : '—') + '</div></div>'; }).join('');
    if (!pcPrs.length) { $('prChart').innerHTML = '<p class="hint">No power-clean PRs yet — log one in the PRs tab and this chart fills in.</p>'; }
    else {
      const xs = pcPrs.map((p, i) => (pcPrs.length === 1 ? 10 : 10 + i * 80 / (pcPrs.length - 1)) + ',' + (90 - Math.min(80, (p.lb / Math.max(pcBest, 1)) * 80)));
      $('prChart').innerHTML = '<svg viewBox="0 0 100 100" width="100%" height="140" style="background:var(--accent2);border-radius:8px"><polyline points="' + xs.join(' ') + '" fill="none" stroke="#0f6b4f" stroke-width="2"/>' +
        pcPrs.map((p, i) => '<circle cx="' + xs[i].split(',')[0] + '" cy="' + xs[i].split(',')[1] + '" r="3" fill="#0f6b4f"/>').join('') + '</svg>' +
        '<p>' + pcPrs.map(p => esc(p.date) + ': ' + p.lb + ' lb').join(' → ') + '</p>';
    }
    const notes = [];
    const last = list[0];
    if (!list.length) notes.push('Start here: enter your PRs in the PRs tab, then open Train for Week 1 Day 1. Do not chase a PR in week 1 — the block builds toward the week-12 test.');
    if (last) {
      if (last.soreness >= 7) notes.push('Last session soreness was ' + last.soreness + '/10 — take the next day light or use the deload weights, even if the plan says heavy.');
      if (last.sleepH && last.sleepH < 6) notes.push('Last session followed only ' + last.sleepH + 'h sleep — expect lower bar speed; keep technique sets fast and do not grind.');
      if (last.sessionRpe >= 9) notes.push('Last session RPE was ' + last.sessionRpe + '/10 — repeat the same loads next week rather than adding 5 lb.');
      if (last.downgraded) notes.push('You downgraded last time' + (last.downgradeReason ? ' (' + esc(last.downgradeReason) + ')' : '') + ' — that is the right call; the program only works if bad days stay light.');
      if (currentWeek === 4 || currentWeek === 8) notes.push('Deload week: volume and intensity are already reduced in Train. Use it — do not add extra heavy work.');
      if (currentWeek === 11) notes.push('Taper week: keep reps fast and volume low. The test is next week, not today.');
      if (currentWeek === 12) notes.push('Test week: one test day only. Build singles and stop when speed or positions break down — a clean miss is data, not failure.');
    }
    if (!state.oneRMs['Power Clean']) notes.push('No power-clean working 1RM yet — prescribed lb values will show as % only until you log a PR.');
    $('coachNotes').innerHTML = notes.map(n => '<li>' + n + '</li>').join('');
    $('latestSession').innerHTML = last ? '<p>' + esc(last.date || '') + ' · Week ' + last.week + ' Day ' + (last.day + 1) + ' · ' + Object.values(last.sets || {}).filter(x => x.checked).length + ' sets checked · ' + sessionLoad(last).toLocaleString() + ' lb</p>' : '<p class="hint">No sessions logged yet.</p>';
  }
  function renderTrain() {
    const prog = programForWeek(currentWeek);
    const day = prog.days[currentDay];
    $('trainHint').textContent = 'Week ' + currentWeek + ' — ' + prog.block + ' · ' + prog.label + (currentWeek === 12 ? ' · Optional light technique day: 50–60% technique work only, no heavy squat or deadlift.' : ' · Optional 4th day: light technique at 50–60% + mobility only.');
    if (!$('sessionDate').value) $('sessionDate').value = todayStr();
    if (!day) { $('trainExercises').innerHTML = '<div class="card"><h2>Rest / light day</h2><p>Light technique at 50–60% and mobility only. No heavy squat or deadlift.</p></div>'; return; }
    const key = sessionKey($('sessionDate').value, currentWeek, currentDay);
    const saved = state.sessions[key] || { sets: {} };
    $('sleepH').value = saved.sleepH || ''; $('soreness').value = saved.soreness || ''; $('sessionRpe').value = saved.sessionRpe || '';
    $('downgraded').checked = !!saved.downgraded; $('downgradeReason').value = saved.downgradeReason || ''; $('sessionNotes').value = saved.notes || '';
    $('trainExercises').innerHTML = day.map((e, ei) => {
      const mv = MOVEMENTS[e.name] || MOVEMENTS['Core / Accessory'];
      const lb = prescribedLb(e, state.oneRMs);
      let setsHtml = '';
      if (e.ladder) {
        [70, 80, 85, 90, 95, 100].forEach((pct, si) => {
          const skey = ei + '-' + si, s = saved.sets[skey] || {};
          const slb = state.oneRMs['Power Clean'] ? round25(state.oneRMs['Power Clean'] * pct / 100) : null;
          setsHtml += '<div class="setrow"><label><input type="checkbox" data-ei="' + ei + '" data-si="' + si + '" ' + (s.checked ? 'checked' : '') + '> Single ' + (si + 1) + ' — ' + pct + '%' + (slb ? ' → ' + slb + ' lb' : '') + '</label> <input type="number" step="2.5" placeholder="actual lb" data-alb="' + skey + '" value="' + (s.lb || '') + '"></div>';
        });
        setsHtml += '<p class="hint">After 100%, attempt a PR only if the previous single was fast and technically clean. Then stop.</p>';
      } else {
        for (let si = 0; si < e.sets; si++) {
          const skey = ei + '-' + si, s = saved.sets[skey] || {};
          setsHtml += '<div class="setrow"><label><input type="checkbox" data-ei="' + ei + '" data-si="' + si + '" ' + (s.checked ? 'checked' : '') + '> Set ' + (si + 1) + ' — ' + e.reps + ' reps' + (lb != null ? ' @ ' + lb + ' lb' : e.pct ? ' @ ' + e.pct + '%' : ' @ 12–15RM') + '</label> <input type="number" step="2.5" placeholder="actual lb" data-alb="' + skey + '" value="' + (s.lb || '') + '"></div>';
        }
        setsHtml += '<button type="button" class="secondary" data-addset="' + ei + '">+ Set</button>';
      }
      return '<div class="card"><h3>' + esc(e.name) + '</h3><p>' + (e.pct ? e.pct + '% × ' + e.sets + ' × ' + e.reps : e.sets + ' × ' + e.reps) + (lb != null ? ' → <b>' + lb + ' lb</b>' : '') + '</p><p class="hint">' + esc(mv.cues.join(' · ')) + '</p><p><a href="' + mv.video + '" target="_blank" rel="noopener">▶ Demo video / guide</a> <span class="hint">' + esc(mv.note) + '</span></p>' + setsHtml + '</div>';
    }).join('');
    document.querySelectorAll('#trainExercises input[type="checkbox"]').forEach(cb => cb.onchange = () => {
      const ei = +cb.dataset.ei, si = +cb.dataset.si, e = day[ei];
      const key2 = sessionKey($('sessionDate').value, currentWeek, currentDay);
      const patch = { date: $('sessionDate').value, week: currentWeek, day: currentDay, sets: {} };
      const skey = ei + '-' + si;
      const alb = document.querySelector('[data-alb="' + skey + '"]');
      patch.sets[skey] = { checked: cb.checked, lb: alb && alb.value ? +alb.value : (prescribedLb(e, state.oneRMs) || null), reps: (typeof e.reps === 'number' ? e.reps : 1) };
      mergeSession(state.sessions, key2, patch); save();
      $('saveStatus').textContent = '✓ Saved — updated the existing record for ' + $('sessionDate').value + ' (no duplicate created).';
      if (cb.checked) openTimer(e);
    });
    document.querySelectorAll('[data-addset]').forEach(b => b.onclick = () => {
      const ei = +b.dataset.addset, e = day[ei];
      const key2 = sessionKey($('sessionDate').value, currentWeek, currentDay);
      const cur = state.sessions[key2] || { sets: {} };
      const extra = Object.keys(cur.sets).filter(k => k.startsWith(ei + '-')).length;
      const skey = ei + '-' + extra;
      mergeSession(state.sessions, key2, { date: $('sessionDate').value, week: currentWeek, day: currentDay, sets: { [skey]: { checked: false, lb: prescribedLb(e, state.oneRMs), reps: (typeof e.reps === 'number' ? e.reps : 1) } } });
      save(); renderTrain();
    });
  }
  $('trainWeek').onchange = e => { currentWeek = +e.target.value; renderAll(); };
  $('trainDay').onchange = e => { currentDay = +e.target.value; renderAll(); };
  $('sessionDate').onchange = () => renderTrain();
  $('saveSession').onclick = () => {
    const key = sessionKey($('sessionDate').value, currentWeek, currentDay);
    const cur = state.sessions[key] || { sets: {} };
    const sets = JSON.parse(JSON.stringify(cur.sets || {}));
    document.querySelectorAll('#trainExercises input[type="checkbox"]').forEach(cb => {
      const skey = cb.dataset.ei + '-' + cb.dataset.si;
      const alb = document.querySelector('[data-alb="' + skey + '"]');
      sets[skey] = sets[skey] || {};
      sets[skey].checked = cb.checked;
      if (alb && alb.value) sets[skey].lb = +alb.value;
    });
    mergeSession(state.sessions, key, { date: $('sessionDate').value, week: currentWeek, day: currentDay, sets, sleepH: $('sleepH').value ? +$('sleepH').value : null, soreness: $('soreness').value ? +$('soreness').value : null, sessionRpe: $('sessionRpe').value ? +$('sessionRpe').value : null, downgraded: $('downgraded').checked, downgradeReason: $('downgradeReason').value, notes: $('sessionNotes').value });
    save(); $('saveStatus').textContent = '✓ Saved — updated the existing record for ' + $('sessionDate').value + ' (no duplicate created).'; renderAll();
  };
  $('saveStart').onclick = () => { state.programStart = $('programStart').value || null; save(); renderDashboard(); };
  $('clearStart').onclick = () => { state.programStart = null; save(); renderDashboard(); };
  function renderPRs() {
    $('prDate').value = $('prDate').value || todayStr();
    const bests = LIFTS.map(l => {
      const hist = state.prs.filter(p => p.lift === l).sort((a, b) => a.date.localeCompare(b.date));
      const gain = hist.length > 1 ? hist[hist.length - 1].lb - hist[0].lb : 0;
      return '<div><b>' + l + ':</b> ' + (state.oneRMs[l] ? state.oneRMs[l] + ' lb working 1RM' : '—') + (gain ? ' · +' + gain + ' lb since first PR' : '') + '</div>';
    }).join('');
    $('currentBests').innerHTML = bests;
    $('ladder').innerHTML = LIFTS.map(l => {
      if (!state.oneRMs[l]) return '<div><b>' + l + ':</b> enter a PR first.</div>';
      return '<div><b>' + l + ' (' + state.oneRMs[l] + ' lb):</b> ' + [50, 60, 70, 80, 90, 100, 110].map(p => p + '% = ' + round25(state.oneRMs[l] * p / 100) + ' lb').join(' · ') + '</div>';
    }).join('');
    const tl = [...state.prs].sort((a, b) => b.date.localeCompare(a.date) || b.lb - a.lb);
    $('prTimeline').innerHTML = tl.length ? tl.map(p => {
      const prev = [...state.prs].filter(x => x.lift === p.lift && (x.date < p.date || (x.date === p.date && x.lb < p.lb))).sort((a, b) => b.date.localeCompare(a.date));
      const d = prev.length ? p.lb - prev[0].lb : null;
      return '<div>' + esc(p.date) + ' · ' + esc(p.lift) + ': <b>' + p.lb + ' lb</b>' + (d != null ? ' (' + (d >= 0 ? '+' : '') + d + ' lb vs previous)' : ' (first recorded)') + '</div>';
    }).join('') : '<p class="hint">No PRs yet.</p>';
  }
  $('addPr').onclick = () => {
    const lift = $('prLift').value, lb = +$('prLb').value, date = $('prDate').value || todayStr();
    if (!lb) { $('prStatus').textContent = 'Enter a PR weight first.'; return; }
    state.prs.push({ lift, lb, date });
    if (!state.oneRMs[lift] || lb > state.oneRMs[lift]) { state.oneRMs[lift] = lb; $('prStatus').textContent = '✓ ' + lb + ' lb is now your working 1RM for ' + lift + ' — all prescribed sets recalculated.'; }
    else { $('prStatus').textContent = '✓ ' + lb + ' lb saved to history only (working 1RM stays ' + state.oneRMs[lift] + ' lb).'; }
    save(); renderAll();
  };
  $('setRm').onclick = () => { const lift = $('rmLift').value, lb = +$('rmLb').value; if (!lb) return; state.oneRMs[lift] = lb; save(); renderAll(); };
  function renderRecords() {
    const list = sessionsList();
    $('sessionHistory').innerHTML = list.length ? list.map(s => '<div class="setrow"><span>' + esc(s.date || '') + ' · Week ' + s.week + ' Day ' + (s.day + 1) + ' · ' + Object.values(s.sets || {}).filter(x => x.checked).length + ' sets · ' + sessionLoad(s).toLocaleString() + ' lb' + (s.downgraded ? ' · downgraded' : '') + '</span> <button type="button" class="secondary" data-del="' + esc(s.key) + '">Delete</button></div>').join('') : '<p class="hint">No sessions yet.</p>';
    document.querySelectorAll('[data-del]').forEach(b => b.onclick = () => { delete state.sessions[b.dataset.del]; save(); renderAll(); });
  }
  function renderMovements() {
    $('movementList').innerHTML = Object.entries(MOVEMENTS).map(([name, m]) => '<div class="card"><h3>' + esc(name) + '</h3><p>' + esc(m.cues.join(' · ')) + '</p><p><a href="' + m.video + '" target="_blank" rel="noopener">▶ Demo video / guide</a> <span class="hint">' + esc(m.note) + '</span></p></div>').join('');
  }
  $('exportBtn').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })); a.download = 'power-clean-data.json'; a.click(); };
  $('importFile').onchange = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { state = JSON.parse(r.result); save(); renderAll(); } catch (err) { alert('Could not import that file.'); } }; r.readAsText(f); };
  function renderAll() { syncThemeBtn(); fillSelects(); renderDashboard(); renderTrain(); renderPRs(); renderRecords(); renderMovements(); }
  fillSelects(); renderAll();
}
