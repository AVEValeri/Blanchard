// BEGIN === SWIPER === //
const heroSwiper = new Swiper(document.getElementById('hero_swiper'), {
  loop: true,
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 10000,
  },
  autoHeight: true,
});

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