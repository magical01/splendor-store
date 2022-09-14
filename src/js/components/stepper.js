// document?.querySelectorAll('.basket').forEach(elem => {
//   elem?.addEventListener('click', () => {
//     const stepperInput = document?.querySelectorAll('.stepper__input');
//     const stepperPlus = document?.querySelectorAll('.stepper__btn--plus');
//     const stepperMinus = document?.querySelectorAll('.stepper__btn--minus');
//     const price = document?.querySelectorAll('.cart-product__price');
//     const fullPrice = document?.querySelector('.cart-content__fullprice');
//     const arrPrices = [];
//     const total = [];
//     price.forEach((elem, i) => {
//       arrPrices.push(+elem.textContent)
//     });
//     price.forEach(elem => {
//       total.push(+elem.textContent);
//     })

//     stepperInput.forEach((elem, i) => {
//       elem?.addEventListener('keydown', (e) => {
//         if (e.currentTarget.value <= 1) {
//           stepperMinus[i].classList.add('stepper__btn--disabled')
//           stepperPlus[i].classList.remove('stepper__btn--disabled')
//         } else {
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//         }

//         if (e.currentTarget.value > 98) {
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//           stepperPlus[i].classList.add('stepper__btn--disabled');
//         } else {
//           stepperPlus[i].classList.remove('stepper__btn--disabled');
//         }

//       });
//     })

//     stepperPlus.forEach((elem, i) => {
//       elem?.addEventListener('click', (e) => {
//         let currentValue = parseInt(stepperInput[i].value);
//         currentValue++;
//         stepperInput[i].value = currentValue;
//         price[i].textContent = currentValue * arrPrices[i];
//         total[i] = currentValue * arrPrices[i];
//         fullPrice.textContent = total.reduce((acc, elem) => {
//           return acc += elem;
//         });

//         if (stepperInput[i].value > 98) {
//           stepperInput[i].value = 99;
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//           stepperPlus[i].classList.add('stepper__btn--disabled');
//         } else {
//           stepperPlus[i].classList.remove('stepper__btn--disabled');
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//         }
//       });
//     })

//     stepperMinus.forEach((elem, i) => {
//       elem?.addEventListener('click', (e) => {
//         let currentValue = parseInt(stepperInput[i].value);
//         currentValue--;
//         stepperInput[i].value = currentValue;
//         price[i].textContent = +price[i].textContent - arrPrices[i];

//         total[i] = +price[i].textContent;
//         fullPrice.textContent = +fullPrice.textContent - arrPrices[i];

//         stepperPlus[i].classList.remove('stepper__btn--disabled');

//         if (stepperInput[i].value <= 1) {
//           stepperInput[i].value = 1;
//           stepperMinus[i].classList.add('stepper__btn--disabled');
//         } else {
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//         }
//       });
//     })
//   })
// })

// document?.querySelectorAll('.product-slider__to-cart').forEach((elem) => {
//   elem?.addEventListener('click', () => {
//     const stepperInput = document?.querySelectorAll('.stepper__input');
//     const stepperPlus = document?.querySelectorAll('.stepper__btn--plus');
//     const stepperMinus = document?.querySelectorAll('.stepper__btn--minus');
//     const price = document?.querySelectorAll('.cart-product__price');
//     const fullPrice = document?.querySelector('.cart-content__fullprice');
//     const arrPrices = [];
//     const total = [];
//     price.forEach((elem, i) => {
//       arrPrices.push(+elem.textContent)
//     });
//     price.forEach(elem => {
//       total.push(+elem.textContent);
//     })

//     stepperInput.forEach((elem, i) => {
//       elem?.addEventListener('keydown', (e) => {
//         if (e.currentTarget.value <= 1) {
//           stepperMinus[i].classList.add('stepper__btn--disabled')
//           stepperPlus[i].classList.remove('stepper__btn--disabled')
//         } else {
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//         }

//         if (e.currentTarget.value > 98) {
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//           stepperPlus[i].classList.add('stepper__btn--disabled');
//         } else {
//           stepperPlus[i].classList.remove('stepper__btn--disabled');
//         }

//       });
//     })

//     stepperPlus.forEach((elem, i) => {
//       elem?.addEventListener('click', (e) => {
//         let currentValue = parseInt(stepperInput[i].value);
//         currentValue++;
//         stepperInput[i].value = currentValue;
//         price[i].textContent = currentValue * arrPrices[i];
//         total[i] = currentValue * arrPrices[i];
//         fullPrice.textContent = total.reduce((acc, elem) => {
//           return acc += elem;
//         });

//         if (stepperInput[i].value > 98) {
//           stepperInput[i].value = 99;
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//           stepperPlus[i].classList.add('stepper__btn--disabled');
//         } else {
//           stepperPlus[i].classList.remove('stepper__btn--disabled');
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//         }
//       });
//     })

//     stepperMinus.forEach((elem, i) => {
//       elem?.addEventListener('click', (e) => {
//         let currentValue = parseInt(stepperInput[i].value);
//         currentValue--;
//         stepperInput[i].value = currentValue;
//         price[i].textContent = +price[i].textContent - arrPrices[i];

//         total[i] = +price[i].textContent;
//         fullPrice.textContent = +fullPrice.textContent - arrPrices[i];

//         stepperPlus[i].classList.remove('stepper__btn--disabled');

//         if (stepperInput[i].value <= 1) {
//           stepperInput[i].value = 1;
//           stepperMinus[i].classList.add('stepper__btn--disabled');
//         } else {
//           stepperMinus[i].classList.remove('stepper__btn--disabled');
//         }
//       });
//     })
//   })
// })

// // window.addEventListener("DOMContentLoaded", () => {
// //   const stepperInput = document?.querySelectorAll('.stepper__input');
// //     const stepperPlus = document?.querySelectorAll('.stepper__btn--plus');
// //     const stepperMinus = document?.querySelectorAll('.stepper__btn--minus');
// //     const price = document?.querySelectorAll('.cart-product__price');
// //     const fullPrice = document?.querySelector('.cart-content__fullprice');
// //     const arrPrices = [];
// //     price.forEach((elem, i) => {
// //       arrPrices.push(+elem.textContent)
// //     });

// //     stepperInput.forEach((elem, i) => {
// //       elem?.addEventListener('keydown', (e) => {
// //         if (e.currentTarget.value <= 1) {
// //           stepperMinus[i].classList.add('stepper__btn--disabled')
// //           stepperPlus[i].classList.remove('stepper__btn--disabled')
// //         } else {
// //           stepperMinus[i].classList.remove('stepper__btn--disabled');
// //         }

// //         if (e.currentTarget.value > 98) {
// //           stepperMinus[i].classList.remove('stepper__btn--disabled');
// //           stepperPlus[i].classList.add('stepper__btn--disabled');
// //         } else {
// //           stepperPlus[i].classList.remove('stepper__btn--disabled');
// //         }

// //       });
// //     })

// //     stepperPlus.forEach((elem, i) => {
// //       elem?.addEventListener('click', (e) => {
// //         let currentValue = parseInt(stepperInput[i].value);
// //         currentValue++;
// //         stepperInput[i].value = currentValue;
// //         price[i].textContent = currentValue * arrPrices[i];
// //         fullPrice.textContent = price[i].textContent

// //         if (stepperInput[i].value > 98) {
// //           stepperInput[i].value = 99;
// //           stepperMinus[i].classList.remove('stepper__btn--disabled');
// //           stepperPlus[i].classList.add('stepper__btn--disabled');
// //         } else {
// //           stepperPlus[i].classList.remove('stepper__btn--disabled');
// //           stepperMinus[i].classList.remove('stepper__btn--disabled');
// //         }
// //       });
// //     })

// //     stepperMinus.forEach((elem, i) => {
// //       elem?.addEventListener('click', (e) => {
// //         let currentValue = parseInt(stepperInput[i].value);
// //         currentValue--;
// //         stepperInput[i].value = currentValue;
// //         price[i].textContent = +price[i].textContent - arrPrices[i];

// //         stepperPlus[i].classList.remove('stepper__btn--disabled');

// //         if (stepperInput[i].value <= 1) {
// //           stepperInput[i].value = 1;
// //           stepperMinus[i].classList.add('stepper__btn--disabled');
// //         } else {
// //           stepperMinus[i].classList.remove('stepper__btn--disabled');
// //         }
// //       });
// //     })
// // })
