import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from "./modules/refsElements";
// import { onButtonTimerClick } from "./listeners/onButtonTimerClick";
import { convertMs } from "./modules/convertMs";
import { rendingTimerStart } from "./modules/rendingTimerStart";

let timeDelta = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate > selectedDates[0]) {
  // почему с this.defaultDate возвращается undefine?
      Notify.failure('Please choose a date in the future', {
        position: 'center-top'
      });
      return;
    };
    refs.btnStartTimer.removeAttribute('disabled');
    timeDelta = selectedDates[0] - options.defaultDate;
    rendingTimerStart(convertMs(timeDelta))
    
  }
};

flatpickr(refs.inputDate, options);

const onButtonTimerClick = () => {
  Notify.success('Timer started', {
    position: 'center-top'
  });
  let timerId = setInterval( () => {
    if(timeDelta < 2000) {
      Notify.success('Timer finished', {
        position: 'center-top'
      });
      clearInterval(timerId)
    };
    rendingTimerStart(convertMs(timeDelta -= 1000))
  }, 1000)

  refs.btnStartTimer.setAttribute('disabled', 'false');
}

refs.btnStartTimer.setAttribute('disabled', 'false');
refs.btnStartTimer.addEventListener('click', onButtonTimerClick);



