document.addEventListener("DOMContentLoaded", () => {
  const eventsCards = document.querySelectorAll('.events__item');
  const loadBtn = document.getElementById('events_btn');

  loadBtn.addEventListener('click', () => {
    eventsCards.forEach(el => el.classList.remove('is-hidden'));
    loadBtn.classList.add('is-hidden');
  });
});