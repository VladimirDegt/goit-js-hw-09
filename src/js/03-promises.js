import { refs } from "./modules/refsElements";
import { createPromise } from "./modules/createPromise";

const objInputs = {};

const onFormInput = (e) => {
  const formData = new FormData(e.currentTarget);
  formData.forEach( (value, name) => {
    objInputs[name] = Number(value)
  })
};

const onButtonSubmit = (e) => {
  e.preventDefault();

  let {delay, step, amount} = objInputs;
    for(let i = 1; i <= amount; i += 1) {
      setTimeout (()=>{
        createPromise(i, delay)
        // .then(string => string)
        // .catch(string => string);
      }, delay)
      delay += step;
}
};

refs.form.addEventListener('input', onFormInput);
refs.btnForm.addEventListener('click', onButtonSubmit );
