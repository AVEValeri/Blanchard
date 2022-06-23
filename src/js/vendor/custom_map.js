// BEGIN === MAP === //
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("contacts_map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75843720596595,37.60130793237984],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14,
  });

  const mapMark = new ymaps.Placemark([55.75843720596595,37.60130793237984], {}, {
    iconLayout: "default#image",
    iconImageHref: 'images/mark.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(mapMark)
  myMap.controls.remove("trafficControl"); 
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("fullscreenControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("rulerControl");
  myMap.controls.remove("typeSelector");

}
// END === MAP === //   