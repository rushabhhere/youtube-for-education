const videosButton = document.getElementById('videos');
const playlistsButton = document.getElementById('playlists');

let activeTab = 'videos';

videosButton.addEventListener('click', () => {
  if (activeTab === 'playlists') {
    videosButton.classList.add('active-tab');
    playlistsButton.classList.remove('active-tab');
    activeTab = 'videos';
  }
});

playlistsButton.addEventListener('click', () => {
  if (activeTab === 'videos') {
    videosButton.classList.remove('active-tab');
    playlistsButton.classList.add('active-tab');
    activeTab = 'playlists';
  }
});
