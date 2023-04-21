import { refs } from "../modules/refsElements";
import { onBtnStartClick } from "./onBtnStartClick";

import { timerIntervalChangeColor } from "./onBtnStartClick";


export const onBtnStopClick = () => {
  clearInterval(timerIntervalChangeColor);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', 'true');

  refs.btnStart.addEventListener('click', onBtnStartClick);
  refs.btnStop.removeEventListener( 'click', onBtnStopClick);
};
