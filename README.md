# Study Friction Analyzer

> **Understand why studying breaks.** A lightweight, responsive, frontend-only web application designed to help students track their study sessions and identify exactly *why* they lose focus or fail to complete their planned hours.

Instead of just tracking time, this app tracks **friction** (boredom, phone distractions, confusion, and fatigue) to provide actionable insights into your study habits.

## Features

* **Friction Tracking:** Log planned vs. actual study time alongside the specific reasons that stopped you.
* **Smart Insights Engine:** Automatically calculates your completion rate, identifies your most common friction point, and pinpoints your least productive time of day.
* **Actionable Feedback:** Generates dynamic text insights (e.g., *"Your phone is the enemy. Try putting it in another room."*) based on your recent logs.
* **100% Private & Local:** No backend required. All data is securely saved directly in your browser using `localStorage`.
* **Responsive Design:** Clean, minimal, and student-friendly UI that works seamlessly on both desktop and mobile devices.

## Tech Stack

This project is built purely with standard web technologies. No frameworks, no build steps, and no external libraries.

* **HTML5:** Semantic structure.
* **CSS3:** Custom styling, CSS Grid/Flexbox layout, fully responsive.
* **Vanilla JavaScript (ES6+):** DOM manipulation, state management, and math logic for insights.

## Getting Started

Since this is a frontend-only application, getting it running locally is incredibly simple.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/study-friction-analyzer.git](https://github.com/yourusername/study-friction-analyzer.git)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd study-friction-analyzer
    ```
3.  **Run the app:**
    Simply open the `index.html` file in your favorite web browser. 
    *(Alternatively, you can use a tool like VS Code's "Live Server" extension for a better development experience).*

## How to Use

1.  **Log a Session:** Enter your subject, how long you planned to study, and how long you *actually* studied.
2.  **Identify Friction:** If you didn't finish, select the status ("Partially Completed" or "Not Done") and check off the friction points that got in your way.
3.  **View Insights:** Check the right-hand dashboard to see your overall completion rate and read the smart text insight generated from your habits.

## Future Enhancements

* [ ] Add Chart.js for visual data representation of study trends over the week.
* [ ] Export/Import data functionality (CSV) so users can backup their logs.
* [ ] Dark mode toggle.
* [ ] Custom friction inputs for personalized tracking.

