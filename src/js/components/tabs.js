document.addEventListener('DOMContentLoaded', e => {
  const countryTabs = document.querySelector('.country__tabs');
  const countryBtn = document.querySelectorAll('.country__tab-btn')
  const countryPainters = document.querySelectorAll('.accordion__list')

  const painterList = document.querySelector('.catalog__body');
  const painterName = document.querySelectorAll('.accordion__content-path')
  const painterContent = document.querySelectorAll('.painter')

  // BEGIN ===== Табы переключения страны
  if (countryTabs) {
    countryTabs.addEventListener('click', ev => {
      let target = ev.target;

      if (target.classList.contains('country__tab-btn')) {
        const tabsPath = target.dataset.countryBtn;
        togglePaintersList(tabsPath);
      }
    });
  }

  const togglePaintersList = (path) => {
    // Добавление класса активности кнопке таба
    countryBtn.forEach(el => el.classList.remove('country__tab-btn--open'));
    document.querySelector(`[data-country-btn="${path}"]`).classList.add('country__tab-btn--open')

    // Открытие контента таба со списком художников при клике на кнопку
    countryPainters.forEach(el => el.classList.add('is-hidden'));
    document.querySelector(`[data-country-list="${path}"]`).classList.remove('is-hidden')

    // Открытие карточки художника той страны, список кторой открыли
    painterContent.forEach(el => el.classList.add('is-hidden'));
    let activePainter = document.querySelector(`[data-default-painters="${path}"]`);

    if (activePainter) {
      activePainter.classList.remove('is-hidden')
      document.querySelector(`[data-painter-path="${activePainter.dataset.painterTarget}"]`).classList.add('accordion__content-path--open')
    }
  }
  // END ===== Табы переключения страны

  // BEGIN ===== Табы переключения художника
  if (painterList) {
    painterList.addEventListener('click', ev => {
      let target = ev.target;
      if (target.classList.contains('accordion__content-path')) {
        const tabsPath = target.dataset.painterPath;
        togglePaintersCard(tabsPath);
      }
    });
  }

  const togglePaintersCard = (path) => {
    painterName.forEach(el => el.classList.remove('accordion__content-path--open'));
    document.querySelector(`[data-painter-path="${path}"]`).classList.add('accordion__content-path--open')

    painterContent.forEach(el => el.classList.add('is-hidden'));
    document.querySelector(`[data-painter-target="${path}"]`).classList.remove('is-hidden')
  }
  // END ===== Табы переключения художника
});