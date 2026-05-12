# Reflection

## 1. Hardest bug and debugging process

The hardest issue I faced was handling multiple state updates inside the audit calculator. Sometimes the displayed savings were incorrect because values were not updating as expected.

My first hypothesis was incorrect arithmetic logic, but the formulas were correct. I then checked whether React state updates were happening in the correct order. After debugging with console logs, I realized some calculations depended on stale values.

The solution was restructuring the calculation flow so all values were computed first and then updated using state setters.

This taught me how React state timing works and how to debug dynamic UI issues carefully.

---

## 2. A decision I reversed

Initially I planned to build a backend with database storage and email capture.

Midway through development, I realized completing a polished working MVP was more important than incomplete advanced features.

I shifted focus to making the audit engine and UI reliable first.

That decision improved project quality and helped me finish successfully.

---

## 3. What I would build in week 2

If I had another week, I would add:

- User email capture
- Save audit history
- Shareable public result URLs
- AI-generated personalized summaries
- Open Graph sharing previews
- Better benchmark comparisons

These would make the tool production-ready.

---

## 4. How I used AI tools

I used ChatGPT for:

- Planning project structure
- Debugging React issues
- Improving UI
- Writing documentation

I did not trust AI for:

- Final logic correctness
- Pricing decisions
- Deployment verification

One time AI suggested state logic that caused incorrect calculations. I tested manually, found the issue, and corrected it.

This showed me AI is helpful, but verification is essential.

---

## 5. Self-rating

### Discipline: 8/10
I worked consistently and completed the project.

### Code Quality: 7/10
Clean and readable, but could be more modular.

### Design Sense: 8/10
UI is polished and easy to use.

### Problem Solving: 8/10
I solved multiple technical issues independently.

### Entrepreneurial Thinking: 6/10
I understand the product value, but need more practice in business thinking.