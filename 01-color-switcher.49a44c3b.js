!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),inputDate:document.querySelector("#datetime-picker"),btnStartTimer:document.querySelector("[data-start-timer]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),message:document.querySelector(".message"),form:document.querySelector("form")};var e=function(){clearInterval(r),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled","true"),t.btnStart.addEventListener("click",n),t.btnStop.removeEventListener("click",e)},r=null,n=function(){(r=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3))&&t.btnStart.setAttribute("disabled","true"),t.btnStop.removeAttribute("disabled"),t.btnStop.addEventListener("click",e),t.btnStart.removeEventListener("click",n)};t.btnStop.setAttribute("disabled","true"),t.btnStart.addEventListener("click",n)}();
//# sourceMappingURL=01-color-switcher.49a44c3b.js.map