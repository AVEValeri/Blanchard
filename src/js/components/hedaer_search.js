document.addEventListener("DOMContentLoaded", () => {
  const headerSeatchBtn = document.getElementById('header_search_icon');
  const headerSearchInput = document.getElementById('header_search_input');
  const headerHideSearchBtn = document.getElementById('header_search_hide');

  headerSeatchBtn.addEventListener('click', () => {
    headerSearchInput.classList.add('search__input--active');
    headerHideSearchBtn.classList.remove('is-hidden')
  });

  headerHideSearchBtn.addEventListener('click', () => {
    headerSearchInput.classList.remove('search__input--active');
    headerHideSearchBtn.classList.add('is-hidden')
  });

})

