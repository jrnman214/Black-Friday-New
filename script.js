// Set the countdown duration in minutes
const countdownDuration = 15;

// Function to start the timer
function startTimer(duration, displayMinutes, displaySeconds) {
    let timer = duration * 60;
    let minutes, seconds;

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayMinutes.textContent = minutes;
        displaySeconds.textContent = seconds;

        if (--timer < 0) {
            // Timer finished, reset or stop
            // For now, let's just stop at 00:00
            clearInterval(interval);
            displayMinutes.textContent = "00";
            displaySeconds.textContent = "00";
        }
    }, 1000);
}

window.onload = function () {
    const displayMinutes = document.querySelector('#minutes');
    const displaySeconds = document.querySelector('#seconds');
    startTimer(countdownDuration, displayMinutes, displaySeconds);
};
