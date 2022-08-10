
const rangeSlider = document?.getElementById('range-slider');
const input0 = document?.getElementById('input-0');
const input1 = document?.getElementById('input-1');

const inputs = [input0, input1];

import noUiSlider from 'nouislider'

noUiSlider.create(rangeSlider, {
  start: [3000, 7000],
  connect: true,
  step: 1,
  range: {
      'min': [1],
      'max': [9999]
  }
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;

  rangeSlider.noUiSlider.set(arr);
};

inputs.forEach((elem, index) => {
  elem.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
  });
});

