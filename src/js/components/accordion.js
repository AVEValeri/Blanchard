document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion__item')

  accordions.forEach(acc => {
    
    acc.addEventListener('click', e => {
      let target = e.target;
      let self = target.closest('li.accordion__item');

      if (target.closest('li').classList.contains('accordion__item')) {

        if (!self.classList.contains('accordion-open')) {
          accordions.forEach(acc => acc.classList.remove('accordion-open'))
        }

        self.classList.toggle('accordion-open');
      }
    });
  });
});