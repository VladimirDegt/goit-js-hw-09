import { refs } from "./refsElements"

export const changeColorNumberTimerjsjs = (timeDelta) => {
  if (timeDelta < 10) {
    refs.seconds.classList.add('color');
  }
}