const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),inputDate:document.querySelector("#datetime-picker"),btnStartTimer:document.querySelector("[data-start-timer]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),message:document.querySelector(".message"),form:document.querySelector("form"),btnForm:document.querySelector('[type="submit"]'),inputFirstDelay:document.querySelector('[name="delay"]'),inputDelayStep:document.querySelector('[name="step"]'),inputAmount:document.querySelector('[name="amount"]')};const e=n=>{clearInterval(n),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled","true"),t.btnStart.addEventListener("click",r),t.btnStop.removeEventListener("click",(()=>{e()}))},r=()=>{timerIntervalId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),timerIntervalId&&t.btnStart.setAttribute("disabled","true"),t.btnStop.removeAttribute("disabled"),t.btnStop.addEventListener("click",(()=>{e(timerIntervalId)})),t.btnStart.removeEventListener("click",r)};t.btnStop.setAttribute("disabled","true"),t.btnStart.addEventListener("click",r);
//# sourceMappingURL=01-color-switcher.05aacf49.js.map
