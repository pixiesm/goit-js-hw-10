import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as d,i as l}from"./assets/vendor-77e16229.js";const t={startBtn:document.querySelector("[data-start]"),input:document.querySelector("#datetime-picker"),timer:document.querySelector(".timer"),daysEl:document.querySelector("[data-days]"),hoursEl:document.querySelector("[data-hours]"),minutesEl:document.querySelector("[data-minutes]"),secondsEl:document.querySelector("[data-seconds]")},m={title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",theme:"dark"};t.startBtn.disabled=!0;let r="";const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const o=e[0],n=Date.now();o<n?(t.startBtn.disabled=!0,t.startBtn.classList.remove("active-btn"),l.error(m)):(r=o,t.startBtn.disabled=!1,t.startBtn.classList.add("active-btn"))}};d(t.input,f);t.startBtn.addEventListener("click",h);function h(){t.startBtn.disabled=!0,t.startBtn.classList.remove("active-btn"),t.input.disabled=!0;const e=setInterval(()=>{const o=r-Date.now(),n=y(o);t.daysEl.textContent=s(n.days),t.hoursEl.textContent=s(n.hours),t.minutesEl.textContent=s(n.minutes),t.secondsEl.textContent=s(n.seconds)},1e3);setTimeout(()=>{clearInterval(e),t.input.disabled=!1},r-Date.now())}function y(e){const a=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:c,seconds:u}}function s(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map