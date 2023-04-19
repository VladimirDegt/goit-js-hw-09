import { getRandomHexColor } from "../modules/getRandomHexColor";
import { refs } from "../modules/refsElements";
import { onBtnStopClick } from "./onBtnStopClick";

export const onBtnStartClick = () => {
  timerIntervalId = setInterval( () => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  
  if(timerIntervalId) {
    refs.btnStart.setAttribute('disabled', 'true')
  }

  refs.btnStop.removeAttribute('disabled');
  refs.btnStop.addEventListener('click', () => {onBtnStopClick(timerIntervalId)} );
  refs.btnStart.removeEventListener( 'click', onBtnStartClick)
};
