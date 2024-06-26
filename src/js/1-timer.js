import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"


const refs = {
    startBtn: document.querySelector('[data-start]'),
    input: document.querySelector('#datetime-picker'),
    daysBlock: document.querySelector('[data-days]'),
    hoursBlock: document.querySelector('[data-hours]'),
    minutesBlock: document.querySelector('[data-minutes]'),
    secondsBlock: document.querySelector('[data-seconds]')
};

refs.startBtn.disabled = true;
let userSelectedDate;
let intervalID;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
onClose(selectedDates) {
        const selectedTime = selectedDates[0];
        const currentTime = Date.now();
        if (selectedTime < currentTime) {
            refs.startBtn.disabled = true;
            refs.startBtn.classList.remove('active-btn');
            // iziToast.error(errorTable);
            window.alert();
        }
        else {
            userSelectedDate = selectedTime;
            refs.startBtn.disabled = false;
            refs.startBtn.classList.add('active-btn');
        }
  },
};

flatpickr("#datetime-picker", options);

refs.startBtn.addEventListener('click', onBtnClick);
function onBtnClick() {
    refs.startBtn.disabled = true;
    refs.startBtn.classList.remove('active-btn');
    refs.input.disabled = true;


    // setInterval(()=>{},1000)
            intervalID = setInterval(() => {
        const diff = userSelectedDate - Date.now();
        const timeConvertedMs = convertTime(diff);
        refs.daysBlock.textContent = zeroForTime(timeConvertedMs.days);
        refs.hoursBlock.textContent = zeroForTime(timeConvertedMs.hours);
        refs.minutesBlock.textContent = zeroForTime(timeConvertedMs.minutes);
        refs.secondsBlocks.textContent = zeroForTime(timeConvertedMs.seconds);

    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        refs.input.disabled = false;
    }, userSelectedDate - Date.now());
}

function convertTime(ms) {
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

function zeroForTime(value) {
  return value.toString().padStart(2, '0');
    }
