// BEGIN === SWIPER === //
const heroSwiper = new Swiper(document.getElementById('hero_swiper'), {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 10000,
  },
});

const gallerySwiper = new Swiper(document.getElementById('gallery_swiper'), {
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next--galery',
    prevEl: '.swiper-button-prev--galery',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    590: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
});

const eventsSwiper = new Swiper(document.getElementById('events_swiper'), {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next--events',
  },
  pagination: {
    el: '.swiper-pagination--event',
    type: 'bullets',
  },
  breakpoints: {
    590: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  },
});

const projectsSwiper = new Swiper(document.getElementById('project_swiper'), {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next--projects',
    prevEl: '.swiper-button-prev--projects',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    590: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
});
// END === SWIPER === //