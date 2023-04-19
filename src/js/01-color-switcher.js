import { refs } from "./modules/refsElements";
import { onBtnStartClick } from "./listeners/onBtnStartClick";

refs.btnStop.setAttribute('disabled', 'true');
refs.btnStart.addEventListener('click', onBtnStartClick);





