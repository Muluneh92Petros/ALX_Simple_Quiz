// Function Declaration
function checkAnswer() {
    const correctAnswers = ["4"]; 
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
      if (userAnswer === correctAnswer) {
        if (correctAnswers.includes(userAnswer.value)) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
