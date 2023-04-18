import { refs } from "../modules/refsElements";

export const onBtnStopClick = () => {
  clearInterval(timerIntervalId);
  refs.btnStart.removeAttribute('disabled')
  refs.btnStop.setAttribute('disabled', 'true')
};
