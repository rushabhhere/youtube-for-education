const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

searchForm.addEventListener('submit', e => {
  const searchText = searchBar.value;
  if (!searchText.trim()) {
    searchBar.value = '';
    e.preventDefault();
  }
});

// Pressing '/' leads to focus on the search bar
document.addEventListener('keypress', e => {
  if (e.key === '/') {
    e.preventDefault();
    searchBar.focus();
  }
});

searchBar.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    searchBar.blur();
  }
});
