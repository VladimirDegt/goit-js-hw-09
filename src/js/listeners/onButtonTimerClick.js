import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from "../modules/refsElements";
import { rendingTimerStart } from "../modules/rendingTimerStart";
import { convertMs } from "../modules/convertMs";

export const onButtonTimerClick = (timeDelta) => {
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
};

