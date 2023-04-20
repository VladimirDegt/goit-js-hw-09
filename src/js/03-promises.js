import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from "./modules/refsElements";
import { createPromise } from "./modules/createPromise";

const onFormSubmit = (e) => {
  e.preventDefault();

  const {delay, step, amount} = e.target.elements;
  let delayValue = Number(delay.value)

    for(let i = 1; i <= Number(amount.value); i += 1) {
      createPromise(i, delayValue)
        .then(({ position, delay }) => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
        delayValue += Number(step.value);
      }
};

refs.form.addEventListener('submit', onFormSubmit );
