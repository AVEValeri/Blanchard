document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('header_burger');
  const navMenu = document.getElementById('header_nav');

  burgerBtn.addEventListener('click', () => {
    menuToggle()
  });

  navMenu.addEventListener('click', (ev) => {

    if (ev.target.closest('a')) menuToggle();
  });

  const menuToggle = () => {
    navMenu.classList.toggle('nav--active')
    document.body.classList.toggle('menu-open')
    burgerBtn.classList.toggle('burger--open')
  }
});