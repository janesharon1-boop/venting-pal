const startBtn = document.getElementById('startVenting');
const timerDiv = document.getElementById('timer');
let timer = null;
let secondsLeft = 240; // 4 minutes

function updateTimerDisplay() {
  const min = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;
  timerDiv.textContent = `Session time left: ${min}m ${sec}s`;
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  secondsLeft = 240;
  updateTimerDisplay();
  timer = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    if (secondsLeft <= 0) {
      clearInterval(timer);
      timerDiv.textContent = "Session ended. Please pay $0.10 for another 4 minutes!";
      startBtn.disabled = false;
    }
  }, 1000);
});

// Show initial timer as blank
timerDiv.textContent = "";