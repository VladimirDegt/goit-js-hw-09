import { refs } from "../modules/refsElements";
import { onBtnStartClick } from "./onBtnStartClick";

export const onBtnStopClick = (timerIntervalId) => {
  clearInterval(timerIntervalId);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', 'true');

  refs.btnStart.addEventListener('click', onBtnStartClick);
  refs.btnStop.removeEventListener( 'click', () => {onBtnStopClick()});
};
