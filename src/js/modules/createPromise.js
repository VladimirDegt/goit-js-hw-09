export function createPromise(position, delay) {
  return new Promise( (resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          setTimeout( () => {
            resolve({position, delay})
          }, delay);
        } else {
          setTimeout( () => {
          reject({position, delay})
        }, delay);
        }
  });
};
