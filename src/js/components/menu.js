let openIntertval;

document.querySelectorAll('.menu__link').forEach(el => {
  el.addEventListener('click', e => {
    let menu = e.currentTarget.dataset.path;

    document.querySelectorAll('.menu-dropdown__list').forEach(el => {
      let target = document.querySelector(`[data-target=${menu}]`)

      if (!target.classList.contains('open')) {
        el.classList.remove('menu-active');
        el.classList.remove('open');
        el.previousElementSibling.classList.remove('menu__link--active')
        target.classList.add('menu-active');
        target.previousElementSibling.classList.add('menu__link--active')
        openIntertval = setTimeout(() => {
          target.classList.add('open')
        }, 0);
      }

      if (target.classList.contains('open')) {
        clearInterval(openIntertval);
        target.classList.remove('menu-active');
        openIntertval = setTimeout(() => {
          target.classList.remove('open')
        }, 0);
      }

      window.onclick = e => {
        if (e.target === target || e.target === document.querySelector(`[data-path=${menu}]`)) {
          return;
        } else {
          target.classList.remove('menu-active');
          target.classList.remove('open');
          target.previousElementSibling.classList.remove('menu__link--active');
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById('menu_search_input');
  const searchIcon = document.getElementById('menu_search_icon');

  searchInput.onfocus = () => searchIcon.style.fill = '#c283f3';
  searchInput.onblur = () => searchIcon.style.fill = '#fff';
})