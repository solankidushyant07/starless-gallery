# AI Collaboration Guide — GalleryManager

Read this first. It defines the project architecture, the phone-first Termux workflow, and the rules for every coding session.

## 1. Project Overview
- **Stack:** Vanilla HTML, CSS, and JavaScript (no build step, global `G` namespace).
- **Architecture (`web/`):**
  - `js/domain/` — Data models.
  - `js/data/` — Repository contracts, `sample/` browser adapters, and `runtime/` Android/local adapters.
  - `js/application/` — Business logic services.
  - `js/features/` — Screen modules (`*-screen.js` + `*-state.js`) and matching CSS in `css/features/`.
  - `js/shared/` — Reusable UI components, events, and utilities.
- **Dual Runtime:**
  - Browser preview uses sample data via `python -m http.server 8000 -d web`.
  - Android APK builds via `.github/workflows/build-apk.yml` and `web/js/data/runtime/android-runtime-adapter.js`.
- **Linting:** ESLint runs automatically via `.github/workflows/lint.yml` (`eslint.config.js`).

## 2. Environment & Workflow Rules
- **Phone-First:** The user develops on Android using Termux + Brave (no full-time PC).
- **Request Minimal Files:** Never ask for the whole repo. Request only the 1–3 exact files needed for the task by giving the command: `pack path/to/file1 path/to/file2`.
- **Output Format for Edits:** Whenever creating or modifying files, put all file updates in **one single code block** using exact start-of-line markers:
  - Start each file with `=== FILE: relative/path/to/file ===`
  - End each file with `=== END FILE ===`
  - **CRITICAL:** Always output the **complete** file content inside each block. Never use placeholders like `// ... existing code` because the user's `apply` script overwrites the file directly.
- **Session Wrap-Up:** When the user says **"wrap up"**, output an updated `PROGRESS.md` inside a `=== FILE: PROGRESS.md ===` block summarizing what changed, key decisions (and why), known issues, and the next step.

## 3. Coding Guardrails
- Make minimal, targeted changes; do not rewrite unrelated working code.
- Keep all UI changes mobile-viewport-safe (touch targets, overlays, back-gesture friendly).
- Preserve compatibility with both browser sample mode and `android-runtime-adapter.js`.
- Keep all JS clean against ESLint (no unused variables, clean syntax).
