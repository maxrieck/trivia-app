React Trivia App

This is a simple React trivia quiz application that fetches questions from the [Open Trivia Database](https://opentdb.com/). The app allows users to select a category and difficulty, enter their name, and answer multiple-choice questions. The UI and logic are split into several components for clarity and reusability.

Components Overview

`App.jsx`
- **Purpose:** The root component of the app.
- **Responsibilities:**  
  - Maintains the global theme (`pageTheme`) for the app.
  - Passes the theme setter (`setPageTheme`) to child components.
  - Wraps the main trivia interface in a styled `<div>`.

`TriviaQuestions.jsx`
- **Purpose:** Main logic and UI for the quiz flow.
- **Responsibilities:**
  - Manages quiz state: current question, all questions, loading/error states, user name, category, and difficulty.
  - Handles fetching questions from the API based on user selections.
  - Renders the quiz setup form (name, category, difficulty) and the quiz itself.
  - Handles navigation between questions and quiz reset.
  - Integrates the `TriviaTheme` and `QuestionCard` components.

`QuestionCard.jsx`
- **Purpose:** Displays a single trivia question and its possible answers.
- **Responsibilities:**
  - Decodes HTML entities in questions and answers.
  - Randomizes the order of answers (so the correct answer isn't always last).
  - Handles answer selection and provides feedback if the answer is correct or incorrect.
  - Highlights the selected answer and displays a message based on correctness.

`TriviaTheme.jsx`
- **Purpose:** Dynamically sets the app's background and text color based on the selected category.
- **Responsibilities:**
  - Uses a `useEffect` hook to update the theme whenever the category changes.
  - Passes the new theme up to `App.jsx` via `setPageTheme`.

`TriviaQuestion.module.css` & `QuestionCard.module.css`
- **Purpose:** Provide scoped CSS styles for the trivia and question card components.
- **Responsibilities:**
  - Style the quiz container, form elements, buttons, and answer list items.
  - Ensure a clean and responsive UI.


How It Works

1. Start Screen:
   - The user enters their name, selects a category and difficulty, and clicks "Start Quiz".

2. Quiz Flow: 
   - The app fetches 10 questions from the API based on the user's selections.
   - Each question is displayed one at a time using `QuestionCard`.
   - The user selects an answer and receives immediate feedback.
   - The "Next Question" button advances to the next question.

3. Theme:  
   The background and text color change based on the selected category, using the `TriviaTheme` component.

4. Reset:  
   The "New Quiz" button resets all state and returns the user to the start screen.



 API Reference

- [Open Trivia Database API](https://opentdb.com/api_config.php)
