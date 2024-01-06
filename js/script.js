const timerBox = document.querySelector('.timer-box');

const duration = 20 * 60;

window.onload = () => {
  startTimer(duration);
};

const startTimer = (czas) => {
  const timerElement = document.createElement('div');
  timerElement.classList.add('timer')
  timerElement.textContent = timeFormat(czas);
  timerBox.appendChild(timerElement);

  const interval = setInterval(() => {
    czas--;

    timerElement.textContent = timeFormat(czas);

    if (czas === 0) {
      clearInterval(interval);
      window.location.href = 'lose.html';
    }
  }, 1000);
};

const timeFormat = (czas) => {
  const minutes = Math.floor(czas / 60);
  const secs = czas % 60;

  const formatedMinut = minutes < 10 ? '0' + minutes : minutes;
  const formatedSec = secs < 10 ? '0' + secs : secs;

  return formatedMinut + ':' + formatedSec;
};
