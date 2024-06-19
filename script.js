let countdown;
let timerDisplay = document.getElementById('timer-display');
let startTime = 120; // Set time in seconds
let timeRemaining = startTime;

function updateDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!countdown) {
        countdown = setInterval(() => {
            timeRemaining--;
            updateDisplay();

            if (timeRemaining <= 0) {
                clearInterval(countdown);
                countdown = null;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(countdown);
    countdown = null;
}

function resetTimer() {
    clearInterval(countdown);
    countdown = null;
    timeRemaining = startTime;
    updateDisplay();
}

// Initialize display
updateDisplay();
