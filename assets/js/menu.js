const button = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (button && navigation) {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    button.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    navigation.classList.toggle('is-open', !isOpen);
  });
}
