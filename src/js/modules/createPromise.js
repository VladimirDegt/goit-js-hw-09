import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function createPromise(position, delay) {
  return new Promise( (resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
        position: 'left-bottom',
      }))
    } else {
      reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
        position: 'left-bottom',
      }))
    }
  });
};
