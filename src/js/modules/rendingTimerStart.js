import { refs } from "./refsElements";
import { changeColorNumberTimerjsjs } from "./changeColorNumberTimer";

export const rendingTimerStart = ({days, hours, minutes, seconds}) => {
  refs.days.textContent = `${days}`.padStart(2, '0');
  refs.hours.textContent = `${hours}`.padStart(2, '0');
  refs.minutes.textContent = `${minutes}`.padStart(2, '0');
  refs.seconds.textContent = `${seconds}`.padStart(2, '0');
  changeColorNumberTimerjsjs(seconds);
};
