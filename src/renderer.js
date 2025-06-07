const form = document.getElementById("timerForm");
const input = document.getElementById("timeInput");
const display = document.getElementById("countdownDisplay");

let countdownInterval;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const timeStr = input.value.trim();
  const totalSeconds = parseTimeToSeconds(timeStr);

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid time in HH:MM:SS format.");
    return;
  }

  display.style.display = "flex";
  startCountdown(totalSeconds);
});

function parseTimeToSeconds(str) {
  const parts = str.split(":").map(Number);

  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 1) {
    return parts[0];
  }
  return NaN;
}

function startCountdown(seconds) {
  clearInterval(countdownInterval);

  function updateDisplay(secs) {
  let m = Math.floor(secs / 60);
  let s = secs % 60;

  const [m1, m2] = String(m).padStart(2, '0');
  const [s1, s2] = String(s).padStart(2, '0');

  document.getElementById('min1').src = `assets/numbers/${m1}.png`;
  document.getElementById('min2').src = `assets/numbers/${m2}.png`;
  document.getElementById('sec1').src = `assets/numbers/${s1}.png`;
  document.getElementById('sec2').src = `assets/numbers/${s2}.png`;
}


  updateDisplay(seconds);

  countdownInterval = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      clearInterval(countdownInterval);
      alert("Countdown finished!");
      return;
    }
    updateDisplay(seconds);
  }, 1000);
}