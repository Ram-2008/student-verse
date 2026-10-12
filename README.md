# STUDENT VERSE — working student demo

A complete browser-local student portal with the supplied branding, original educational content and real Python execution through Pyodide. This ZIP is a **static JavaScript application**, not the Next.js/Supabase implementation discussed in the earlier planning prompt. It is intentionally immediately runnable with no account, keys or package downloads.

## Start in VS Code

1. Extract the ZIP. Open the `student-verse` folder in VS Code.
2. Install Node.js 20 or newer if necessary.
3. Open Terminal → New Terminal and run:

```sh
npm run dev
```

4. Open **http://localhost:3000** and choose **Explore student demo**.
5. Stop the server with Ctrl+C.

`npm install` is not necessary: there are no npm dependencies. Do not open index.html directly through a file URL: ES modules and workers need HTTP.

### Windows shortcut
Double-click `START-WINDOWS.bat` inside the extracted folder (Node.js must already be installed). Keep the terminal open while using the app.

## What works

- Branded responsive workspace with mobile drawer and desktop sidebar.
- Career suggestions based on group and interests, six pathways, saved shortlist, search and three-way comparison.
- Three original courses, nine lessons, examples, quizzes and completion tracking.
- Python editor, real execution in a Web Worker, five problems, example tests, submission tests, saved drafts, solved tracking, Stop and a five-second execution timeout.
- Four assignments with validated answers/HTTPS URLs and editable submissions.
- Mentor question capture and counselling requests with truthful pending statuses.
- Profile editing, recent activity, calculated dashboard metrics and reset.
- Browser refresh persistence using localStorage. Entry state uses sessionStorage.

## Important demo boundaries

- “Explore Demo” is demo entry, **not secure login**. There is no password authentication.
- No Supabase connection, database migrations, server API or cloud synchronisation is implemented in this package. There are no hidden credential requirements.
- Each browser holds its own data. Avoid entering private student information into this demonstration. Clearing site data resets progress.
- Mentor questions and counselling requests are saved locally; they are **not sent**. No appointments are actually confirmed, and no live mentor or admin service is connected.
- Lessons are complete text lessons and quizzes, not externally licensed videos.
- Course information is illustrative; current institution-specific eligibility, duration and admissions need verification. Suggestions do not determine eligibility.
- Python downloads Pyodide v314.0.7 from cdn.jsdelivr.net on first use. An internet connection is required. Each run creates a fresh worker; browser caching normally makes later runs faster.
- Python executes on the student's device, never on the server. A worker is for responsiveness, not a hardened hostile-code security boundary. Do not use this architecture for secure examinations or run untrusted third-party scripts in a signed-in production application.
- Fonts load from Google Fonts when available; local Arial fallback works offline.

## Build and deploy

```sh
npm run check
npm test
npm run build
```

`dist/` contains the production static files. Upload that directory to a static web host, or import this folder as a Git repository into Vercel. The included vercel.json uses `npm run build` and output directory `dist`. No environment variables are required. The development server binds to localhost only and is not a production server.

## Files

- `app.js`: UI rendering, browser state, forms and Python worker lifecycle.
- `data.js`: original course material, career examples, problem definitions and pure logic.
- `python-worker.js`: actual Pyodide execution and test comparison.
- `style.css`: responsive visual design.
- `assets/logo.png`: cropped version of the provided company logo.
- `server.mjs`, `build.mjs`: dependency-free local server and static packaging.
- `tests/core.test.mjs`: meaningful data/rules tests.
- `DEMO_WALKTHROUGH.md`: client presentation and acceptance checklist.
- `VERIFICATION.md`: checks completed and remaining browser checks.

## Production upgrade plan

Before accepting real student accounts, add Supabase Auth, server-validated data access, Postgres tables for profiles/progress/submissions/doubts/requests, and per-user row-level security. Add a mentor/admin interface and real notification delivery. Replace browser-only persistence with an authenticated data adapter and test isolation with two users. Review content and obtain rights before adding videos. Implement a separately isolated code runner if production requirements exceed local practice. None of these production services are claimed to be included in this demo.
