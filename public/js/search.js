const videosButton = document.getElementById('videos');
const playlistsButton = document.getElementById('playlists');

let activeTab = 'videos';
const url = new URL(window.location.href);

if (url.searchParams.get('type') === 'playlist') {
  activeTab = 'playlist';
}

console.log(activeTab);

videosButton.addEventListener('click', () => {
  if (activeTab === 'playlist') {
    url.searchParams.delete('type');
    window.location.assign(url.toString());
  }
});

playlistsButton.addEventListener('click', () => {
  if (activeTab === 'videos') {
    url.searchParams.set('type', 'playlist');
    window.location.assign(url.toString());
  }
});
