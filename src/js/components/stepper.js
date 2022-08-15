const stepper = document?.querySelectorAll('.stepper');
const stepperInput = document?.querySelectorAll('.stepper__input');
const stepperPlus = document?.querySelectorAll('.stepper__btn--plus');
const stepperMinus = document?.querySelectorAll('.stepper__btn--minus');


stepperInput.forEach((elem, i) => {
  elem?.addEventListener('keydown', (e) => {
    if (e.currentTarget.value <= 1) {
      stepperMinus[i].classList.add('stepper__btn--disabled')
      stepperPlus[i].classList.remove('stepper__btn--disabled')
    } else {
      stepperMinus[i].classList.remove('stepper__btn--disabled');
    }

    if (e.currentTarget.value > 998) {
      stepperMinus[i].classList.remove('stepper__btn--disabled');
      stepperPlus[i].classList.add('stepper__btn--disabled');
    } else {
      stepperPlus[i].classList.remove('stepper__btn--disabled');
    }
  })
})

stepperPlus.forEach((elem, i) => {
  elem?.addEventListener('click', (e) => {
    let currentValue = parseInt(stepperInput[i].value);
    currentValue++;
    stepperInput[i].value = currentValue;

    if (stepperInput[i].value > 998) {
      stepperInput[i].value = 999;
      stepperMinus[i].classList.remove('stepper__btn--disabled');
      stepperPlus[i].classList.add('stepper__btn--disabled');
    } else {
      stepperPlus[i].classList.remove('stepper__btn--disabled');
      stepperMinus[i].classList.remove('stepper__btn--disabled');

    }
  });
})

stepperMinus.forEach((elem, i) => {
  elem?.addEventListener('click', (e) => {
    let currentValue = parseInt(stepperInput[i].value);
    currentValue--;
    stepperInput[i].value = currentValue;

    stepperPlus[i].classList.remove('stepper__btn--disabled');

    if (stepperInput[i].value <= 1) {
      stepperInput[i].value = 1;
      stepperMinus[i].classList.add('stepper__btn--disabled');
    } else {
      stepperMinus[i].classList.remove('stepper__btn--disabled');
    }
  });
})


