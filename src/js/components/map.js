


if (document.location.pathname == '/splendor-store/contacts.html') {
  function init() {
    let map = new ymaps.Map('map', {
      center: [51.53961375346429,-0.1774962046563645],
      zoom: 18
    });

    let placemark = new ymaps.Placemark([51.53961375346429,-0.1774962046563645], {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
      iconImageSize: [61, 81],
      iconImageOffset: [0, 0]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);

}
