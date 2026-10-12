# Five-minute client walkthrough

## Before the call
Start with `npm run dev`; open localhost:3000. Use Chrome or Edge. Ensure internet is available for the Python CDN. Enter the demo and warm up Python with Run example before presenting. Reset demo data in My profile if you want a clean presentation. Use the same host/port to preserve state.

## 0:00 — A student's workspace
Click Explore student demo. Explain: “This demonstration stores data in this browser. Production accounts and mentor delivery will be connected in the next phase.” Show the Student Verse branding and sidebar.

## 0:30 — Explore possibilities
Open Career explorer. Select MPC and Technology. Update suggestions. Save B.Tech and BCA; tick Compare for both. Explain that this helps students ask better questions, while institutional eligibility must still be verified.

## 1:15 — Learn and record progress
Open My learning → Python Foundations → Variables. Read the example. Answer the quiz with `"42"`. Mark the lesson complete. Return to Overview to show the updated lesson count.

## 2:00 — Execute real Python
Open Coding practice → Sum of two numbers. Use:

```python
def add(a, b):
    return a + b
```

Run example, then Submit solution. Show the actual test results. Change `+` to `-` and submit to demonstrate failures. Restore the correct answer. The solved counter remembers successful completion.

## 3:00 — Complete an assignment
Open Assignments. Write “I enjoy building small websites and want to learn Python.” Submit the introduction. Show its pending review status. Refresh to demonstrate persistence. Edit and resubmit if needed.

## 3:40 — Capture a question
Open Ask a mentor. Save a focused question about BCA versus B.Sc curricula. Show it as Open. Explain that delivery and mentor replies need backend integration. Optionally save a future counselling request; it remains unconfirmed.

## 4:20 — Personalise and revisit
Change the student name in My profile. Return to Overview. Show updated metrics and recent activity. Reduce the window width to demonstrate the mobile layout.

## Acceptance checks before presenting
- [ ] Explore Demo enters the workspace.
- [ ] Career filtering, save and compare work.
- [ ] Lesson completion and quiz results survive refresh.
- [ ] Correct code passes, wrong code fails, syntax errors display.
- [ ] Infinite loop stops within five seconds after runtime loads.
- [ ] Stop cancels runtime loading or execution.
- [ ] Submissions and questions survive refresh.
- [ ] Invalid/past counselling times are rejected.
- [ ] Profile changes appear in the header/sidebar.
- [ ] Mobile drawer opens, navigates and closes.
- [ ] Reset clears local progress only after confirmation.

Do not describe this demo as a production LMS or claim that mentors received locally saved requests.
