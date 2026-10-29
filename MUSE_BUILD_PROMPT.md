# Muse build prompt — 12-Week Power Clean Block (copy-paste this whole file to your Muse)

> Paste everything below the line into your own Muse and ask it to build this
> as a Muse **fullstack artifact**. Do not ask it to host this on an external
> server, use an external database, or copy data from anyone else's app.
> Your new artifact starts completely empty, with its own private database.

---

Build me a Muse fullstack artifact called “12-Week Power Clean Block” — a
personal coaching app for power clean (高翻) training. Use Muse's out-of-the-box
artifact frontend and backend/database services only. No external backend, no
external hosting, no substitute database, no third-party account.

## 0. Ground rules

- Units are LB everywhere. Never show kg.
- The app starts EMPTY. Do not seed any 1RMs, PRs, session logs, or demo
  data. If no working 1RM is entered yet, prescribed loads show as % only
  with a prompt to enter a PR.
- Light theme is the DEFAULT. Provide a header button that switches the
  whole UI between Light and Dark theme, persists the choice, and labels
  itself with the theme it will switch to.
- This is a training log, not medical advice. Include this footer note:
  “Stop if you feel sharp pain, your back rounds on deadlifts, or your
  elbows drop in the catch — technique first, PRs second.”
- Warm-up 15 minutes and stretching 20 minutes are stated on the program.
  The weekly template is 3 main days per week plus an optional light
  technique day (50–60% technique work + mobility only, no heavy squat or
  deadlift).

## 1. The 12-week program (this is the whole training plan)

Blocks:

- Weeks 1–4 — Accumulation (65–75% range, base + technique). Week 4 is a
  deload.
- Weeks 5–8 — Transmutation (70–88% range, strength conversion). Week 8
  is a deload.
- Weeks 9–12 — Realization (85–93% range, peak). Week 11 is a taper.
  Week 12 has a single test day only.

Deload rule (weeks 4 and 8): same exercises as the block template, main-lift
% minus 10 percentage points (floor 50%), main-lift sets reduced to
ceil(sets × 0.6) with a minimum of 2 sets, accessories reduced to 2 sets.

Weekly template (one heavy lower-body lift per day — never a heavy squat
AND a heavy deadlift AND a heavy clean maxed in the same session):

- Day 1 — Clean + front squat.
- Day 2 — Pull + squat / deadlift strength.
- Day 3 — Technique clean + press + accessories / core.

### Block A — weeks 1–3 (week 4 = deload of this template)

- Day 1: Technique Clean 62% × 4 sets × 3 reps (technique work);
  Hang Power Clean 65% × 3 × 3; Front Squat 72% × 4 × 5;
  Core — abdomen, accessory, 3 × 12–15.
- Day 2: Clean Pull 80% × 4 × 3; on odd weeks Back Squat 72% × 4 × 5, on
  even weeks Narrow Deadlift 75% × 3 × 3; Back accessory (row / pull-up),
  3 × 12–15.
- Day 3: Power Clean 70% × 4 × 3; Strict Press 68% × 3 × 8;
  Chest / triceps + core, accessory, 3 × 12–15.

### Block B — weeks 5–7 (week 8 = deload of this template)

- Day 1: Power Clean 80% × 5 × 2; Above-Knee Clean 80% × 4 × 2;
  Front Squat 80% × 3 × 3; Core — obliques, accessory, 3 × 12–15.
- Day 2: Clean Pull 95% × 4 × 3; on odd weeks Back Squat 82% × 4 × 4, on
  even weeks Narrow Deadlift 82% × 3 × 3; Back accessory, 2 × 12–15.
- Day 3: Technique Clean 75% × 4 × 3 (technique work); Strict Press
  78% × 4 × 5; Shoulder / core, accessory, 2 × 12–15.

### Week 9

- Day 1: Power Clean 87% × 4 × 2; Front Squat 87% × 3 × 3.
- Day 2: Clean Pull 95% × 3 × 3; Back Squat 87% × 3 × 3.
- Day 3: Technique Clean 80% × 3 × 2; Strict Press 82% × 3 × 3.

### Week 10

- Day 1: Power Clean 91% × 5 × 1–2; Front Squat 90% × 3 × 2.
- Day 2: Clean Pull 100% × 3 × 2; Back Squat 90% × 3 × 2.
- Day 3: Technique Clean 85% × 3 × 2; Strict Press 85% × 3 × 3.

### Week 11 — taper (volume roughly halved, keep reps fast)

- Day 1: Power Clean 82% × 3 × 2; Front Squat 82% × 2 × 3.
- Day 2: Clean Pull 80% × 3 × 2; Back Squat 80% × 2 × 3.
- Day 3: Technique Clean 80% × 3 × 2; Strict Press 80% × 2 × 3.

### Week 12 — test (Day 1 only is a main day; Days 2–3 are rest / light mobility)

- Day 1: Power Clean singles ladder at 70%, 80%, 85%, 90%, 95%, 100%
  (1 rep each), then a PR attempt ONLY if the previous single was fast
  and technically clean, then stop; Front Squat 60% × 2 × 3 (light).
- Total main days in the program: 34 (3 per week for weeks 1–11, plus
  1 test day in week 12).

### % bases and prescribed-weight calculation (exact)

- Clean, Technique Clean, Hang Power Clean, Above-Knee Clean, and Clean
  Pull percentages are based on the POWER CLEAN working 1RM.
- Front Squat % is based on the Front Squat working 1RM; Back Squat %
  on the Back Squat working 1RM; Narrow Deadlift % on the Narrow
  Deadlift working 1RM; Strict Press % on the Strict Press working 1RM.
- Prescribed lb = round(working 1RM × % / 100) to the NEAREST 2.5 lb.
  Example: 91% of a 222.5 lb power clean = 202.5 lb.
- Accessories use a 12–15RM weight and the instruction “stop 1–2 reps
  short of failure” — they are never prescribed as a % of a 1RM.
- Progression note shown in the app: “Add 5 lb next week if all sets were
  completed at RPE ≤ 8.” If session RPE was 9–10, repeat the same loads;
  after missed reps, drop 5–10% and rebuild. Do NOT retest 1RM mid-block
  except through the PR rule in section 4; recalculate from a new max
  only after the week-12 test or a logged PR that beats the working 1RM.

## 2. Tabs (in this order, Dashboard first)

Dashboard (landing tab), Train, PRs, Records, Movements.

## 3. Train tab

- Week selector (1–12) and Day selector (Day 1 / Day 2 / Day 3), plus a
  session-date picker defaulting to today.
- Each exercise card shows: exercise name, % × sets × reps, prescribed lb
  (when a working 1RM exists), coaching cues, and a demo video/guide link
  (see section 6).
- Per-set checkboxes: one large checkbox per prescribed set, so the user
  checks each set off as it is finished. A “+ Set” button adds an extra
  set to an exercise. Each set also has an actual-lb input (defaulting to
  the prescribed lb).
- Checking a set AUTO-SAVES progress to the backend (see same-day merge
  in section 5) AND opens a pop-up rest timer (section 3a). Unchecking a
  set just unchecks and saves — it does not reopen the timer.
- Reopening a logged day shows its earlier sets already checked.
- Session check-in fields: sleep (hours), soreness (0–10), session RPE
  (1–10), “I downgraded today” checkbox, downgrade reason (text), notes
  (text). A “Save / update today’s record” button saves all of it, and
  the app confirms with a message that it updated the existing record
  for that date with no duplicate created.

### 3a. Rest timer — exact defaults

A modal pop-up timer that appears when a set is checked, with:

- Default rest by set type: 3:00 at ≥90%; 2:30 at 85–89%; 2:00 at 75–84%;
  1:30 for technique work; 1:00 for accessories; 3:00 for week-12 test
  singles. All other sets default to 1:30.
- A short reason line, e.g. “Technique work — short rest to keep quality
  and speed (1:30).”
- Preset chips (1:00, 1:30, 2:00, 2:30, 3:00), −30s / +30s / +1:00
  adjustments, Pause / Resume, and Skip / close.
- A beep and vibration (where the device supports it) when time is up.

## 4. PRs tab

- A form to log a PR: lift (Power Clean, Front Squat, Back Squat, Narrow
  Deadlift, Strict Press), PR weight in lb, date (default today).
- PR logic (exact): if the new PR beats the current working 1RM for that
  lift (or no working 1RM exists yet), it BECOMES the new working 1RM
  immediately and every prescribed set in Train recalculates from it.
  If the new PR is at or below the working 1RM, it is kept as history
  only and NEVER lowers the working 1RM or the prescribed loads.
- A separate “Set a working 1RM without logging a PR” form for starting
  maxes (after that, log PRs — they update the working 1RM automatically
  under the rule above).
- Current bests per lift, with gain since the first recorded PR for that
  lift.
- A recommended-weight ladder per lift: 50%, 60%, 70%, 80%, 90%, 100%,
  110% of the working 1RM, each rounded to the nearest 2.5 lb.
- A full PR timeline, newest first, showing for each entry the change
  versus the previous PR for the same lift (“+X lb vs previous” or
  “first recorded”).

## 5. Records tab and same-day merge (exact)

- Session history: one record per (date + week + day). The backend must
  enforce this uniqueness.
- Same-day merge rule: saving the same date + week + day a second time
  UPDATES that one record (merging/aggregating its checked sets and
  check-in fields) — it must never create a second session row for that
  date and training day, and the history count must stay at one for it.
- Each history row shows date, week/day, sets checked, total load in lb,
  and whether the day was downgraded. A Delete button removes that one
  session record.
- If the artifact runtime supports file download, also include Export
  data (JSON) and Import data (JSON). This is optional for the artifact
  version and must not break the core features if it is omitted.

## 6. Movements library tab

One card per movement, each with coaching cues and a demo video/guide
link that opens in a new tab. Do NOT host or copy any video file. Use
these verified public guide links where they fit, and a public search /
guide page for the rest — never invent a video URL:

- Power Clean / Technique Clean / Power-position clean:
  https://catalystathletics.com/exercise/630/Power-Clean-From-Power-Position/
  Cues: bar close to the legs throughout; drive through the whole foot,
  then pull yourself under fast; elbows through to a high, secure rack.
- Hang Power Clean (hang-clean family):
  https://www.catalystathletics.com/exercise/664/Hang-Muscle-Clean/
  Cues: start from above the knee, bar against the legs; vertical leg
  drive, then fast elbows.
- Above-Knee Clean: use a public search/guide page for “above knee power
  clean demo”. Cues: start just above the knee, shoulders over the bar;
  sweep the bar back to the hips, do not swing it out.
- Clean Pull:
  https://www.catalystathletics.com/exercise/454/Flat-Footed-Clean-Pull-To-Hold/
  Cues: stay over the bar until past the knees; full vertical extension,
  shrug up and back, bar stays close.
- Front Squat: https://barbell-logic.com/gym-shorts-the-front-squat/
  Cues: bar on the front deltoids, elbows up; stay tall, knees track with
  toes, drive through midfoot.
- Back Squat: use a public search/guide page for “how to back squat
  barbell demo”. Cues: brace hard, control the descent; drive up without
  the hips shooting up first.
- Narrow Deadlift: use a public search/guide page for “narrow stance
  deadlift demo”. Cues: back set and never rounded; push the floor away;
  if the back moves, lower the weight.
- Strict Press: use a public search/guide page for “strict overhead
  press demo”. Cues: ribs down, glutes tight, no leg drive; head through
  at the top, every rep locked out.
- Core / Accessory: use a public search/guide page for core accessory
  training. Cues: 12–15RM weight; stop 1–2 reps short of failure.

## 7. Dashboard tab (landing tab)

- Program status: current week and block. If the user sets a program
  start date (with Save / Clear controls), current week = weeks elapsed
  since that date, clamped to 1–12; otherwise show the selected week.
- Stat tiles: main days logged (out of 34), sets completed, total load
  (lb, sum over checked sets of actual lb × reps), power-clean best in
  lb with gain since the first power-clean PR.
- A 12-week progress grid (weeks 1–12 × their main days). A filled day
  means a session is logged for that week/day. Tapping a week/day jumps
  to it in the Train tab.
- This week’s plan: the current day’s exercises with % and prescribed lb.
- Weekly training-load chart (total load in lb per program week, weeks
  1–12).
- Power-clean PR progression chart: PRs in date order with the current
  working 1RM marked. Empty state if no power-clean PRs exist yet.
- Coach’s notes, generated by rules from the latest logged session and
  the current week — at minimum:
  - No sessions yet → tell the user to enter PRs first, then start
    Week 1 Day 1, and not to chase a PR in week 1.
  - Soreness ≥ 7 → take the next day light / use deload weights.
  - Sleep < 6 hours → expect lower bar speed, keep technique sets fast,
    do not grind.
  - Session RPE ≥ 9 → repeat the same loads next week, do not add 5 lb.
  - Downgraded last session → affirm that keeping a bad day light was
    the right call.
  - Week 4 or 8 → deload week, do not add extra heavy work.
  - Week 11 → taper week, keep reps fast and volume low, test is next
    week.
  - Week 12 → test week, one test day only, stop when speed or
    positions break down.
  - No power-clean working 1RM → prescribed lb values show as % only
    until a PR is logged.
- Latest session summary: date, week/day, sets checked, total load.

## 8. Backend data model (implement with Muse's built-in artifact database service)

Use persistent server-side tables (or the artifact service's equivalent
named collections) with exactly this shape. No external database:

- `settings`: one row — theme (`light` | `dark`, default `light`),
  program_start_date (nullable date).
- `one_rms`: one row per lift — lift (one of the five lifts in section 4),
  lb (working 1RM), updated_at. This is what prescribed loads are
  calculated from.
- `pr_records`: one row per logged PR — id, lift, lb, date,
  became_working_1rm (true only when that PR raised the working 1RM).
  PRs are never deleted when a newer PR arrives; history is permanent
  unless the user explicitly deletes that PR entry.
- `session_logs`: one row per (date, week, day) — id, date, week, day,
  sleep_hours (nullable), soreness (nullable 0–10), session_rpe
  (nullable 1–10), downgraded (boolean), downgrade_reason (text),
  notes (text). Enforce uniqueness on (date, week, day) so re-saves
  update this row instead of inserting a duplicate.
- `exercise_logs`: one row per set in a session — session_id (references
  session_logs), exercise_name, set_index, checked (boolean),
  prescribed_lb (nullable), actual_lb (nullable), prescribed_reps,
  actual_reps (defaults to prescribed reps). Extra sets added with
  “+ Set” get the next set_index for that exercise in that session.
- Total load for a session = sum over checked exercise_logs of
  actual_lb × actual_reps (falling back to prescribed lb when no actual
  lb was entered).

## 9. Acceptance checks (verify before calling it done)

- With a test power-clean working 1RM of 225 lb, Technique Clean at 62%
  prescribes 140 lb, and at 91% of 222.5 lb it prescribes 202.5 lb.
- Checking a set opens the timer with the section 3a default and
  auto-saves; saving the same date + week + day three times still
  shows exactly one session in Records history.
- Logging a PR above the working 1RM changes every prescribed set;
  logging a PR at or below it changes nothing except history.
- The app opens in light theme by default; the header button switches
  the whole UI to dark and back.
- No 1RMs, PRs, or sessions exist until the user enters them.

---

End of prompt.
