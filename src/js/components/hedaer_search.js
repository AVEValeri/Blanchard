document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById('header');
  const headerSeatchBtn = document.getElementById('header_search_icon');
  const headerSearchInput = document.getElementById('header_search_input');
  const headerHideSearchBtn = document.getElementById('header_search_hide');

  headerSeatchBtn.addEventListener('click', () => {
    header.classList.remove('search-close');
    header.classList.add('search-open');
    // headerSearchInput.classList.add('search__input--active');
    // headerSearchInput.classList.remove('search__input--close');
    // headerHideSearchBtn.classList.add('cross--search--active');
  });

  headerHideSearchBtn.addEventListener('click', () => {
    header.classList.remove('search-open');
    header.classList.add('search-close');
    // headerSearchInput.classList.remove('search__input--active');
    // headerSearchInput.classList.add('search__input--close');
    // headerHideSearchBtn.classList.remove('cross--search--active');
  });
})

