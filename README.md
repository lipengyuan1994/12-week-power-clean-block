# MUSE ONLY — DO NOT USE AS A HUMAN TUTORIAL

Audience: a Muse agent, not a human reader.

Purpose of this repo: let a Muse agent install or rebuild the exact 12-Week Power Clean Block app as a Muse fullstack artifact, using Muse's out-of-the-box artifact frontend and backend/database services only.

## Muse entrypoint

1. Read `artifact.json` in this repo for the machine-readable definition.
2. Read `MUSE_BUILD_PROMPT.md` in full. That file is the authoritative specification.
3. Build a Muse fullstack artifact named `12-Week Power Clean Block` exactly from that specification.
4. Use Muse's built-in artifact frontend and backend/database services only. Do not use an external backend, external hosting, a substitute database, or a third-party account.
5. Start empty. Do not seed any 1RMs, PRs, session logs, or demo data. Do not copy any user's data from this repo, because this repo contains none.
6. Present the finished artifact to the user from its artifact card. That artifact is the user's private copy, with its own private database.

## Files in this repo, and what Muse should do with them

- `artifact.json`: machine-readable artifact definition. Parse it first.
- `MUSE_BUILD_PROMPT.md`: authoritative build specification. Follow every section. If any other file disagrees with it, this file wins.
- `index.html`, `styles.css`, `app.js`: source bundle for Muse ingestion only. Use them as a logic reference for the program, prescribed-weight math, PR logic, timer defaults, and same-day merge. Do not treat them as a human demo, and do not present them to a human as the deliverable. The deliverable is the Muse artifact built from the specification.
- No other files are required to build the artifact.

## Install as a zip

A Muse agent may also obtain this repo as a zip archive from GitHub at `https://github.com/lipengyuan1994/12-week-power-clean-block/archive/refs/heads/master.zip`, unzip it, and then follow the entrypoint above. The zip is a distribution container only. It does not change the build: still build a Muse fullstack artifact from `MUSE_BUILD_PROMPT.md` using Muse's built-in services only, starting empty.

## Updates

This repo does not auto-update any existing artifact.

To apply an update, a Muse agent must read the updated `MUSE_BUILD_PROMPT.md` and `artifact.json`, apply the changes to the user's existing artifact, keep all existing PRs, working 1RMs, and session logs, and verify one prescribed set against the working 1RM before reporting completion.

The update prompt for a Muse agent is:

```
Apply the updated spec in MUSE_BUILD_PROMPT.md from https://github.com/lipengyuan1994/12-week-power-clean-block to my existing 12-Week Power Clean Block Muse artifact.

Use Muse's built-in artifact frontend and backend/database services only. Do not use an external backend, external hosting, or a substitute database.

Keep all my existing PRs, working 1RMs, and session logs. Do not reset my data, do not seed any new PRs or logs, and do not change my units from LB or my default theme from light.

Apply every change in the updated spec. If a change conflicts with my existing data, keep my data and tell me about the conflict instead of overwriting it.

When you finish, confirm what changed, confirm my current power clean working 1RM is still intact, and show me one prescribed set that proves the new version is live.
```

## Invariants

- Units: LB everywhere. Never show kg.
- Theme: light by default, with a Dark and Light toggle, persisted.
- Data model, implemented with Muse's built-in artifact database service: `settings`, `one_rms`, `pr_records`, `session_logs` unique on date plus week plus day, `exercise_logs` one row per set.
- Same-day merge: saving the same date plus week plus day updates that one record. It never duplicates it.
- PR rule: a PR beating the working 1RM becomes the new working 1RM and recalculates every prescribed set. A PR at or below the working 1RM is history only and never lowers loads.
- Safety footer in the app: stop if you feel sharp pain, your back rounds on deadlifts, or your elbows drop in the catch. Technique first, PRs second.
