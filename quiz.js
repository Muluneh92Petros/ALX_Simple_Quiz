// Function Declaration
function checkAnswer() {
    // Correct answer
    const correctAnswers = ["4"]; // Store correct answers in an array

    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected
    if (userAnswer) {
        // Compare the user's answer with the correct answers in the array
          if (correctAnswers.includes(userAnswer.value)) {
            document.getElementById('feedback').textContent = "! Well done.";
          } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
