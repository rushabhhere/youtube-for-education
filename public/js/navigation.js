// toggle navbar
const toggler = document.getElementById('toggler');
const mainNav = document.getElementById('main-nav');
const disablePage = document.getElementById('disable-page');

toggler.addEventListener('click', toggleNav);
disablePage.addEventListener('click', toggleNav);
window.addEventListener('resize', () => {
  if (!mainNav.classList.contains('-translate-x-full')) {
    mainNav.classList.add('-translate-x-full');
  }

  if (!disablePage.classList.contains('hidden')) {
    disablePage.classList.add('hidden');
  }
});

function toggleNav() {
  mainNav.classList.toggle('-translate-x-full');
  disablePage.classList.toggle('hidden');
}