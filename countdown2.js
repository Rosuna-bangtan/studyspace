let countdown;
let timeRemaining;
let isPaused = true;

const minutesInput = document.getElementById('minutes-input');
const countdownDisplay = document.getElementById('countdown-display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resumeButton = document.getElementById('resume-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', () => {
    const minutes = parseInt(minutesInput.value);
    if (!isNaN(minutes) && minutes > 0) {
        timeRemaining = minutes * 60; // Convert minutes to seconds
        startCountdown();
    }
});

pauseButton.addEventListener('click', () => {
    clearInterval(countdown);
    isPaused = true;
});

resumeButton.addEventListener('click', () => {
    if (isPaused) {
        startCountdown();
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(countdown);
    countdownDisplay.textContent = '00:00';
    minutesInput.value = '';
    isPaused = true;
});

function startCountdown() {
    isPaused = false;
    countdownDisplay.textContent = formatTime(timeRemaining);
    countdown = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            countdownDisplay.textContent = formatTime(timeRemaining);
        } else {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}