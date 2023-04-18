import { getRandomHexColor } from "../modules/getRandomHexColor";
import { refs } from "../modules/refsElements";

export const onBtnStartClick = () => {
  refs.btnStop.removeAttribute('disabled');

  timerIntervalId = setInterval( () => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  if(timerIntervalId) {
    refs.btnStart.setAttribute('disabled', 'true')
  }
};
