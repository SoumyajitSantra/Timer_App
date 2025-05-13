let [h, m, s, ms] = [0, 0, 0, 0];
let timer = null;
let isRunning = false;
let laps = [];

function updateDisplay() {
  document.getElementById("display").innerText = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:${String(ms).padStart(3, '0')}`;
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("toggleBtn").textContent = "Start";
  } else {
    startTimer();
    document.getElementById("toggleBtn").textContent = "Pause";
  }
}

function startTimer() {
  timer = setInterval(() => {
    ms++;
    if (ms >= 100) { ms = 0; s++; }
    if (s >= 60) { s = 0; m++; }
    if (m >= 60) { m = 0; h++; }
    updateDisplay();
  }, 10);
  isRunning = true;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  [h, m, s, ms] = [0, 0, 0, 0];
  laps = [];
  updateDisplay();
  document.getElementById("toggleBtn").textContent = "Start";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (isRunning) {
    const lapTime = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:${String(ms).padStart(3, '0')}`;
    laps.push(lapTime);
    const lapList = document.getElementById("laps");
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${laps.length}: ${lapTime}`;
    lapList.appendChild(lapItem);
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
