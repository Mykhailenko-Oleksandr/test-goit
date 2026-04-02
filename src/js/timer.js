import { refs } from './refs';

export function startTimer() {
  const intervalId = setInterval(() => {
    const finishDate = new Date('2026-05-01').getTime();
    const currentDate = Date.now();
    const leftMilliseconds = finishDate - currentDate;

    if (leftMilliseconds <= 0) {
      clearInterval(intervalId);
      return;
    }

    const timeObj = convertMs(leftMilliseconds);
    const updateTimeObj = addLeadingZero(timeObj);

    refs.timerDays.forEach(dayText => {
      dayText.textContent = updateTimeObj.days;
    });
    refs.timerHours.forEach(hourText => {
      hourText.textContent = updateTimeObj.hours;
    });
    refs.timerMinutes.forEach(minutesText => {
      minutesText.textContent = updateTimeObj.minutes;
    });
    refs.timerSeconds.forEach(secondsText => {
      secondsText.textContent = updateTimeObj.seconds;
    });
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  days = String(days).padStart(2, '0');
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  return { days, hours, minutes, seconds };
}
