!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),inputDate:document.querySelector("#datetime-picker"),btnStartTimer:document.querySelector("[data-start-timer]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),message:document.querySelector(".message")};t.btnStop.setAttribute("disabled","true"),t.btnStart.addEventListener("click",(function(){t.btnStop.removeAttribute("disabled"),timerIntervalId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),timerIntervalId&&t.btnStart.setAttribute("disabled","true")})),t.btnStop.addEventListener("click",(function(){clearInterval(timerIntervalId),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled","true")}))}();
//# sourceMappingURL=01-color-switcher.ba8670c0.js.map