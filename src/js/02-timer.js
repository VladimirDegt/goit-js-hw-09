import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from "./modules/refsElements";
import { onButtonTimerClick } from "./listeners/onButtonTimerClick";
import { convertMs } from "./modules/convertMs";
import { rendingTimerStart } from "./modules/rendingTimerStart";

let timeDelta = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate > selectedDates[0]) {  // почему если обращаться this.defaultDate возвращается undefine?
      Notify.failure('Please choose a date in the future', {
        position: 'center-top',
        showOnlyTheLastOne: true,
      });
      return;
    };
    refs.btnStartTimer.removeAttribute('disabled');
    timeDelta = selectedDates[0] - options.defaultDate;
    rendingTimerStart(convertMs(timeDelta))
    
  }
};

flatpickr(refs.inputDate, options);


refs.btnStartTimer.setAttribute('disabled', 'false');
refs.btnStartTimer.addEventListener('click', () => {onButtonTimerClick(timeDelta)} );



