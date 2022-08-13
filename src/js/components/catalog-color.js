const colorSelect = document?.querySelector('.card-info__colors');

colorSelect?.addEventListener('click', (e) => {
  if (e.target.classList.contains('card-info__color')) {
    document?.querySelectorAll('.card-info__color').forEach(elem => elem.classList.remove('card-info__color--active'));

    e.target.classList.add('card-info__color--active');
  }
})
