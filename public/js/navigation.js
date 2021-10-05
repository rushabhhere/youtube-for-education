// toggle navbar
const toggler = document.getElementById('toggler');
const mainNav = document.getElementById('main-nav');
const disablePage = document.getElementById('disable-page');

toggler.addEventListener('click', toggleNav);
disablePage.addEventListener('click', toggleNav);

window.addEventListener('resize', () => {
  if (
    !mainNav.classList.contains('-translate-x-full') &&
    !disablePage.classList.contains('hidden')
  ) {
    mainNav.classList.add('-translate-x-full');
    disablePage.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
});

function toggleNav() {
  mainNav.classList.toggle('-translate-x-full');
  disablePage.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
}
