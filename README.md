# 12-Week Power Clean Block

A personal coaching app for power clean (高翻) training: a 12-week block
program with a dashboard, PR tracking, per-set checkboxes, a rest timer,
and session history. All weights are in **LB**. Light theme by default,
with a Dark / Light toggle.

> **Read this first — the PRIMARY way to use this repo is the Muse
> Artifact path below.** That is how a friend gets the exact same app,
> with Muse's own frontend and backend/database services. The standalone
> files in this repo (`index.html`, `styles.css`, `app.js`) are only a
> secondary reference/demo — see “Standalone reference (secondary)” at
> the bottom. They are not the main deliverable and they do not replace
> the artifact spec.

## ⭐ Primary path: build it as your own Muse Artifact (recommended)

This is the path the repo is designed for. A friend does **not** need a
server, a database account, hosting, or anyone else's data. They give
this repo — or just `MUSE_BUILD_PROMPT.md` — to their own Muse, and
Muse rebuilds the app as a **Muse fullstack artifact**, using Muse's
out-of-the-box artifact frontend + backend/database services. No
external backend, no external hosting, no substitute database.

### Step-by-step for a friend

1. Open your own Muse (the same app this was built in) and start a new
   conversation.
2. Share this repo with Muse, or paste the contents of
   [`MUSE_BUILD_PROMPT.md`](MUSE_BUILD_PROMPT.md) into the chat. The
   simplest prompt that works is:

   > Build me the app in `MUSE_BUILD_PROMPT.md` as a Muse fullstack
   > artifact, using Muse's built-in artifact frontend and backend /
   > database services only. Start empty — do not seed any PRs or logs.

   If you only pasted the file contents (not the repo link), say the
   same thing: “Build this as a Muse fullstack artifact …” and paste
   the whole prompt.
3. Wait for Muse to finish building and present the artifact card.
   Open it from that card — that is your private copy of the app.
4. **First thing inside the app:** go to the **PRs** tab and enter your
   own working maxes / PRs (Power Clean, Front Squat, Back Squat,
   Narrow Deadlift, Strict Press, in lb). Until you do, prescribed
   loads show as % only — that is by design, not a bug.
5. Go to **Dashboard**, optionally set your program start date, then
   open **Train** for Week 1 Day 1 and start logging: check each set
   off as you finish it (the rest timer pops up), fill in sleep /
   soreness / RPE, and save. Re-saving the same date + training day
   updates that one record — it never duplicates it.
6. When you hit a new PR, log it in **PRs**. If it beats your working
   1RM it becomes the new working 1RM at once and every prescribed set
   recalculates. A PR at or below your working 1RM is kept as history
   only and never lowers your loads.

### What you get (the exact app)

- **Tabs, in order:** Dashboard (landing tab), Train, PRs, Records,
  Movements.
- **Program:** Weeks 1–4 Accumulation (65–75%, deload week 4), 5–8
  Transmutation (70–88%, deload week 8), 9–12 Realization (85–93%,
  taper week 11, single week-12 test day). 3 main days/week + an
  optional light technique day; 34 main days total. Warm-up 15 min,
  stretch 20 min.
- **% bases:** clean / pulls off the power-clean 1RM; each squat off
  its own 1RM; press off the press 1RM. Prescribed lb is rounded to the
  nearest 2.5 lb. Progression note: add 5 lb next week if all sets were
  completed at RPE ≤ 8.
- **Train:** prescribed % × sets × reps in lb, demo video/guide link +
  cues per movement, a checkbox per set, a “+ Set” button, actual-lb
  input per set, and session check-in (sleep, soreness, RPE, downgrade
  flag + reason, notes).
- **Rest timer:** pop-up on checking a set — 3:00 at ≥90%, 2:30 at
  85–89%, 2:00 at 75–84%, 1:30 for technique work, 1:00 for accessories,
  3:00 for week-12 test singles — with presets, ±30s / +1:00, Pause /
  Resume, Skip, and a beep/vibration at the end.
- **PRs:** PR entry per lift, working-1RM logic above, a 50–110%
  recommended-weight ladder, current bests with gain since first PR,
  and a full PR timeline with change vs. the previous PR.
- **Same-day merge:** one backend record per (date + week + day);
  re-saving merges/updates it, never duplicates it.
- **Dashboard:** current week/block, 12-week progress grid (tap a day
  to jump to Train), stat tiles, this week's plan, weekly training-load
  chart, power-clean PR progression chart with the working 1RM marked,
  rule-based Coach's notes (sleep / soreness / RPE / downgrades /
  deload / taper / test-week rules), and the latest session.
- **Movements library:** every movement with cues and a public demo
  video/guide link. No video files are hosted or copied in this repo.
- **Backend data model** (implemented with Muse's built-in artifact
  database service, not an external database): `settings` (theme,
  program start date), `one_rms` (working 1RM per lift),
  `pr_records` (every logged PR, with whether it became the working
  1RM), `session_logs` (unique on date + week + day), and
  `exercise_logs` (one row per set: checked, prescribed/actual lb,
  prescribed/actual reps).
- **Theme:** light by default, with a header button switching the whole
  UI between Light and Dark, persisted across visits.

The full, copy-pasteable specification — every tab, every week's
sets/reps/%, every timer default, the PR logic, the merge rule, the
dashboard charts and coach's-note rules, and the data model — is in
[`MUSE_BUILD_PROMPT.md`](MUSE_BUILD_PROMPT.md). If your Muse's rebuild
is missing anything, point it at the section of that file that covers
it and ask it to fix that section.

### What does and does NOT transfer — read before you share

- ✅ **Transfers:** the program, the UI, the features, the rules, and
  this spec. Any friend who follows the steps above gets the same app
  structure and behavior.
- ❌ **Does NOT transfer:** anyone's personal data. A friend's Muse
  artifact is a **fresh instance with its own private database that
  starts empty**. Their PRs, 1RMs, and session logs do not come from
  this repo and do not come from the original user's artifact. The
  original user's data is never in this repo (see “Privacy” below).
- ❌ **No auto-updates for artifacts.** If this repo is updated later,
  an existing Muse artifact does **not** automatically update from
  GitHub. To get an update, a friend must ask their own Muse to apply
  it — e.g. “Apply the updated spec in `MUSE_BUILD_PROMPT.md` to my
  12-Week Power Clean Block artifact, keeping my existing PRs and
  session logs” — and Muse will rebuild / edit that artifact from the
  updated spec. Do not promise anyone automatic artifact updates.

### How future updates work (honest version)

1. The repo owner updates this repo when requested (usually the spec
   in `MUSE_BUILD_PROMPT.md`, and the standalone reference if it
   changes too).
2. For the **standalone reference** (below), friends just pull the
   latest code from this repo and re-open it.
3. For a **Muse Artifact** copy, friends must ask their Muse to apply
   the updated spec/README to their existing artifact, as described
   above. Muse artifacts do not sync from GitHub on their own.

## Spec-coverage checklist (verified before publishing)

Every item below is covered in `MUSE_BUILD_PROMPT.md` — checked
section by section against the list in the build request:

| Required feature | Spec section |
|---|---|
| Dashboard, Train, PRs, Records, Movements tabs; Dashboard as landing tab | §2, §7 |
| 12-week blocks, deload weeks 4 & 8, taper week 11, single week-12 test day, 34 main days | §1 |
| % bases (clean/pulls off clean 1RM, squats/press off their own) | §1 |
| LB units, 2.5 lb rounding, “add 5 lb” progression note | §0, §1 |
| Light theme default + Dark/Light toggle button, persisted | §0 |
| Per-set checkboxes, “+ Set”, actual-lb input, auto-save on check | §3 |
| Rest-timer defaults 3:00 / 2:30 / 2:00 / 1:30 / 1:00 / 3:00 test singles, presets, pause, skip, beep/vibration | §3a |
| Same-day merge: one record per date + week + day, never duplicates | §5 |
| PR logic: beating PR becomes new working 1RM and recalculates sets; lower PR history-only | §4 |
| Demo video/guide link per movement, no hosted/copied video files, no invented URLs | §6 |
| Dashboard charts (weekly load, PR progression) and Coach's notes rules | §7 |
| Backend data model: settings, one_rms, pr_records, session_logs, exercise_logs, via Muse's built-in artifact database service | §8 |
| Starts empty; no seeded 1RMs, PRs, or logs | §0, §9 |
| Acceptance checks (140 lb at 62% of 225 lb; 202.5 lb at 91% of 222.5 lb; 3 saves = 1 history row; light default) | §9 |

## Privacy

This repo contains **no personal data**: no names, emails, passwords,
training logs, PRs, or 1RMs of any real user. The app starts empty by
design, and every user enters only their own numbers into their own
private copy.

## Standalone reference (secondary — not the main deliverable)

The files `index.html`, `styles.css`, and `app.js` in this repo are a
clean, standalone re-implementation of the same spec, kept only as a
reference/demo so the program and interactions can be inspected and
tried without Muse. They are **not** the Muse artifact, they do not
share data with any Muse artifact, and they must not be treated as a
substitute for the artifact build above.

- **Run it locally:** from this directory, run a static server, e.g.
  `python3 -m http.server 8000`, then open
  <http://localhost:8000/>. Or open `index.html` directly in a browser
  (a local server is more reliable for the timer beep and file links).
- **Data:** the standalone version stores everything in the browser's
  localStorage under the key `pcb-v1`. Nothing leaves your browser
  unless you use its Export (JSON) button. Import restores an exported
  file. Clearing browser storage deletes its data — that is a
  limitation of the standalone demo, not of the Muse artifact version,
  which uses Muse's backend database service.
- **If the standalone reference and `MUSE_BUILD_PROMPT.md` ever
  disagree, the prompt/spec wins** — it is the authoritative
  definition of the app, and the artifact build should follow it.

## Safety note

This is a training log, not medical advice and not a coach. The app
assumes technique is already solid, as the original plan states.
Stop if you feel sharp pain, your back rounds on deadlifts, or your
elbows drop in the catch.
