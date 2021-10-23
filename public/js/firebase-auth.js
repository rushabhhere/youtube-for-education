import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

const profile = document.getElementById('profile');

const firebaseConfig = {
  apiKey: 'AIzaSyBb3VD5PA4DifnfKfrmmDapx8lT6yZeB8o',
  authDomain: 'for-education-321415.firebaseapp.com',
  projectId: 'youtube-for-education-321415',
  appId: '1:907709403416:web:508bfc458edf6e45788e6d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

profile.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then(result => {
      console.log(result.user);
    })
    .catch(err => {
      console.error('Error code:', err.code);
      console.error('Error message:', err.message);
      console.error('Error email:', err.email);
    });
});

onAuthStateChanged(auth, user => {
  if (user) {
    showUserInfo(user);
  } else {
    logOut();
  }
});

function showUserInfo(user) {
  
}
