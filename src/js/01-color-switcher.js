import { refs } from "./modules/refsElements";
import { onBtnStartClick } from "./listeners/onBtnStartClick";
import { onBtnStopClick } from "./listeners/onBtnStopClick";

refs.btnStop.setAttribute('disabled', 'true')
refs.btnStart.addEventListener('click', onBtnStartClick)
refs.btnStop.addEventListener('click', onBtnStopClick)



