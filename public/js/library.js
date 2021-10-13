const searchBar = document.getElementById('search-bar');
const searchButton = document.querySelector('button[type="submit"]');

searchButton.addEventListener('click', e => {
  if (searchBar.classList.contains('hidden')) {
    searchBar.classList.remove('hidden');
    searchBar.focus();
    e.preventDefault();
  } else {
    searchBar.classList.add('hidden');
    searchBar.blur();
    if (!searchBar.value) {
      e.preventDefault();
    }
  }
});

searchBar.addEventListener('blur', e => {
  if (!searchBar.value) {
    searchBar.classList.add('hidden');
  }
});

//toggler
const watchLaterButton = document.getElementById('watch-later-toggler');
const watchLaterSection = document.getElementById('watch-later');
const notedVideoButton = document.getElementById('noted-video-toggler');
const notedVideoSection = document.getElementById('noted-video');

watchLaterButton.addEventListener('click', () => {
    console.log("hello");
    if (!watchLaterButton.classList.contains('active-tab')) {
        notedVideoButton.classList.remove('active-tab');
        watchLaterButton.classList.add('active-tab');
        watchLaterSection.classList.remove('hidden');
        notedVideoSection.classList.add('hidden');
    }
});

notedVideoButton.addEventListener('click', () => {
    console.log("hello");
  if (!notedVideoButton.classList.contains('active-tab')) {
    watchLaterButton.classList.remove('active-tab');
    notedVideoButton.classList.add('active-tab');
    notedVideoSection.classList.remove('hidden');
    watchLaterSection.classList.add('hidden');
  }
});
