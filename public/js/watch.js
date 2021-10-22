// search bar
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

// toggler
const descriptionButton = document.getElementById('description-toggler');
const descriptionSection = document.getElementById('description');
const notesButton = document.getElementById('notes-toggler');
const notesSection = document.getElementById('notes');

descriptionButton.addEventListener('click', () => {
  if (!descriptionButton.classList.contains('active-tab')) {
    notesButton.classList.remove('active-tab');
    descriptionButton.classList.add('active-tab');
    descriptionSection.classList.remove('hidden');
    notesSection.classList.add('hidden');
  }
});

notesButton.addEventListener('click', () => {
  if (!notesButton.classList.contains('active-tab')) {
    descriptionButton.classList.remove('active-tab');
    notesButton.classList.add('active-tab');
    notesSection.classList.remove('hidden');
    descriptionSection.classList.add('hidden');
  }
});
