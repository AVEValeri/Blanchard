

// BEGIN === SWIPER === //
const gallerySwiper = new Swiper(document.getElementById('gallery_swiper'), {
  slidesPerView: 3,
  spaceBetween: 50,
  autoHeight: false,
  grid: {
    rows: 2,
    fill: "row",
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const editionsSwiper = new Swiper(document.getElementById('editions_swiper'), {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const projectsSwiper = new Swiper(document.getElementById('project_swiper'), {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// END === SWIPER === //

// BEGIN === SIMPLEBAR === //
const scrollers = document.querySelectorAll('.scroller');

scrollers.forEach(scroller => {
  new SimpleBar(scroller);
})
// END === SIMPLEBAR === //

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
      center: [55.760808662009325,37.630061213019516],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14
  });
}
// END === MAP === //   