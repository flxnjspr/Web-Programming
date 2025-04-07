// Get references to the HTML elements
const rgbDisplay = document.getElementById('rgbDisplay'); // Where the RGB color will be shown
const choicesContainer = document.getElementById('choices'); // Where the color options will be displayed
const livesDisplay = document.getElementById('lives'); // Display the player's lives
const scoreDisplay = document.getElementById('score'); // Display the player's score
const finalScore = document.getElementById('finalScore'); // Show the final score at the end
const gameOverSection = document.getElementById('gameOver'); // The section that shows when the game is over
const character = document.getElementById('character'); // The character who will "die" if the player loses

let lives = 5; // The player starts with 5 lives
let score = 0; // The score starts at 0
let questionsAnswered = 0; // To count how many questions have been asked
const totalQuestions = 5; // Set the total number of questions to 5

// Function to generate a random RGB color
function getRandomColor() {
  // Generate random numbers for Red, Green, and Blue
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`; // Return the random RGB color
}

// Function to generate a new question
function generateQuestion() {
  if (questionsAnswered >= totalQuestions || lives <= 0) {
    // If 5 questions have been answered or the player has no lives left, end the game
    endGame();
    return;
  }

  const correctColor = getRandomColor(); // Get a random color for the correct answer
  rgbDisplay.textContent = correctColor; // Display the correct color to the player
  choicesContainer.innerHTML = ''; // Clear any previous color options

  const correctIndex = Math.floor(Math.random() * 3); // Randomly choose where the correct color will be
  for (let i = 0; i < 3; i++) { // Loop to create 3 color options
    const colorBox = document.createElement('div'); // Create a new div for the color option
    colorBox.classList.add('color-option'); // Add a class to style the color option

    let color;
    if (i === correctIndex) { // If it's the correct option, set the color to the correct color
      color = correctColor;
    } else {
      do {
        color = getRandomColor(); // Generate a random color for the other options
      } while (color === correctColor); // Make sure it's not the correct color
    }

    colorBox.style.backgroundColor = color; // Set the background color of the option
    colorBox.addEventListener('click', () => handleGuess(color === correctColor)); // Add a click event to check if the guess is correct
    choicesContainer.appendChild(colorBox); // Add the color option to the choices container
  }

  questionsAnswered++; // Increase the count of questions answered
}

// Function to handle the player's guess
function handleGuess(isCorrect) {
  if (isCorrect) { // If the guess is correct
    score++; // Increase the score
    scoreDisplay.textContent = score; // Update the score on the screen
  } else { // If the guess is wrong
    lives--; // Decrease the lives
    livesDisplay.textContent = lives; // Update the lives on the screen
    if (lives <= 0) { // If the player has no lives left
      announceHeartAttack(); // Show heart attack message
      return;
    }
  }
  generateQuestion(); // Generate a new question
}

// Function to announce when the player loses all lives
function announceHeartAttack() {
  finalScore.textContent = score; // Show the score at the end
  gameOverSection.classList.remove('hidden'); // Show the game over screen
  character.classList.add('dead'); // Make the character "die"
  setTimeout(() => endGame(), 3000); // End the game after 3 seconds
}

// Function to end the game
function endGame() {
  if (lives <= 0) { // If the player has lost all lives
    finalScore.textContent = score; // Show the score at the end
    gameOverSection.classList.remove('hidden'); // Show the game over screen
  } else {
    finalScore.textContent = score; // If they won, show the score
    gameOverSection.classList.remove('hidden'); // Show the game over screen
  }
  choicesContainer.innerHTML = ''; // Clear the choices when the game ends
}

// Function to restart the game
function restartGame() {
  // Reset everything to start a new game
  lives = 5; // Reset lives to 5
  score = 0; // Reset score to 0
  questionsAnswered = 0; // Reset questions answered count
  livesDisplay.textContent = lives; // Update the lives display
  scoreDisplay.textContent = score; // Update the score display
  gameOverSection.classList.add('hidden'); // Hide the game over screen
  character.classList.remove('dead'); // Reset the character's state

  generateQuestion(); // Start a new question
}

// Initial game start
generateQuestion(); // Start the game by generating the first question
