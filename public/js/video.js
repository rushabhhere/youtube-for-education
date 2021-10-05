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

// let c = document.getElementById('description');
// let d = document.getElementById('notes');

// c.onclick = () => {
//   document.getElementById('video-description').classList.remove('hidden');
//   document.getElementById('readMore').classList.remove('hidden');
//   document
//     .getElementById('video-description-readmore')
//     .classList.remove('hidden');
//   document
//     .getElementById('video-description-google')
//     .classList.remove('hidden');
//   c.classList.add('bg-red-500', 'text-white');
//   if (!document.getElementById('video-notes').classList.contains('hidden')) {
//     document.getElementById('video-notes').classList.add('hidden');
//     d.classList.remove('text-white', 'bg-red-500');
//     d.classList.add('bg-white');
//   }
// };

// d.onclick = () => {
//   d.classList.add('bg-red-500', 'text-white');
//   if (
//     !document.getElementById('video-description').classList.contains('hidden')
//   ) {
//     document.getElementById('video-description').classList.add('hidden');
//     document.getElementById('readMore').classList.add('hidden');
//     document
//       .getElementById('video-description-readmore')
//       .classList.add('hidden');
//     document.getElementById('video-description-google').classList.add('hidden');
//     c.classList.remove('text-white', 'bg-red-500');
//     c.classList.add('bg-white');
//   }
//   document.getElementById('video-notes').classList.remove('hidden');
// };

// let f = document.getElementById('video-description').getBoundingClientRect();

// if (f.height > 20) {
//   document
//     .getElementById('video-description-readmore')
//     .classList.add('overflow-y-hidden');
// }
// let readMore = document.getElementById('readMore');
// let readMoreText = document.getElementById('readMore').textContent;

// readMore.onclick = () => {
//   document
//     .getElementById('video-description-readmore')
//     .classList.toggle('overflow-y-hidden');
//   document
//     .getElementById('video-description-readmore')
//     .classList.toggle('h-20');

//   if (readMore.textContent == 'Read Less') {
//     readMore.textContent = 'Read More';
//   } else readMore.textContent = 'Read Less';
// };

// let menu = document.getElementById('hamburger');
// menu.onclick = () => {
//   document.body.classList.toggle('');
// };
