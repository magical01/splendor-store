document
  ?.querySelector(".cart-content__list")
  ?.addEventListener("click", (e) => {
    const select = document?.querySelectorAll(".custom-select");

    select.forEach((elem) => {
      elem?.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("custom-select--open");

        if (e.target.classList.contains("custom-select__item")) {
          let text = e.target.textContent;
          let color = e.target.dataset.color;
          e.currentTarget.querySelector(".custom-select__top span").textContent = text;
          e.currentTarget.querySelector(".custom-select__top span").style.color = color;
          e.currentTarget.querySelector(".custom-select__top svg path").style.stroke = color;
        }
      });
    });
  });
