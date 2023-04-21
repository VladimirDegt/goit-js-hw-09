import { getRandomHexColor } from "../modules/getRandomHexColor";
import { refs } from "../modules/refsElements";
import { onBtnStopClick } from "./onBtnStopClick";

export let timerIntervalChangeColor = null;

export const onBtnStartClick = () => {
  timerIntervalChangeColor = setInterval( () => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  
  if(timerIntervalChangeColor) {
    refs.btnStart.setAttribute('disabled', 'true')
  }

  refs.btnStop.removeAttribute('disabled');
  refs.btnStop.addEventListener('click', onBtnStopClick );
  refs.btnStart.removeEventListener( 'click', onBtnStartClick);
};
