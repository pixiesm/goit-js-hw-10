import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"


const refs = {
    startBtn: document.querySelector('[data-start]'),
    input: document.querySelector('#datetime-picker'),
    timer: document.querySelector('.timer'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]')
};
const errorOb = {
    title: 'Error',
    titleColor: '#fff',
    titleSize: '16px',
    titleLineHeight: '1.5',
    message: 'Please choose a date in the future',
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '1.5',
    backgroundColor: '#ef4040',
    position: 'topRight',
    // iconUrl: errorIcon,
    theme: 'dark',
}

refs.startBtn.disabled = true;
let userSelectedDate = '';


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
            iziToast.error(errorOb);
        }
        else {
            userSelectedDate = selectedTime;
            refs.startBtn.disabled = false;
            refs.startBtn.classList.add('active-btn');
        }
  },
};

flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', onBtnClick);
function onBtnClick() {
    refs.startBtn.disabled = true;
    refs.startBtn.classList.remove('active-btn');
    refs.input.disabled = true;



        const intervalID = setInterval(() => {
        const diff = userSelectedDate - Date.now();
         const timeConvertMs = convertTime(diff);
        refs.daysEl.textContent = getTime(timeConvertMs.days);
        refs.hoursEl.textContent = getTime(timeConvertMs.hours);
        refs.minutesEl.textContent = getTime(timeConvertMs.minutes);
        refs.secondsEl.textContent = getTime(timeConvertMs.seconds);

    }, 1000);

    setTimeout(() => {
        clearInterval(intervalID);
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


function getTime(value) {
  return value.toString().padStart(2, '0');
    }




