// set clock and greeting
const clock = document.getElementById('time');
const greeting = document.getElementById('greeting');

function updateTime() {
  let date = new Date();
  let currentTime = `${date.getHours()}:${addZero(date.getMinutes())}`;
  if (currentTime !== clock.textContent) {
    clock.textContent = currentTime;
    displayGreeting(date.getHours());
  }
}

function addZero(minutes) {
  if (minutes <= 9) {
    return '0' + minutes;
  } else {
    return minutes;
  }
}

function displayGreeting(timeOfDay) {
  let greetingMessage;
  if (timeOfDay >= 4 && timeOfDay < 12) {
    greetingMessage = 'Morning';
  } else if (timeOfDay >= 12 && timeOfDay < 17) {
    greetingMessage = 'Afternoon';
  } else {
    greetingMessage = 'Evening';
  }

  if (greetingMessage != greeting.textContent) {
    greeting.textContent = greetingMessage;
  }
}

updateTime();
setInterval(updateTime, 1000);

// handle username
userName = document.getElementById('user-name');

userName.addEventListener('keydown', e => {
  if (e.code === 'Enter') {
    userName.blur();
  }
});

userName.addEventListener('blur', () => {
  const name = userName.textContent;

  if (name === '') {
    userName.textContent = '[ enter your name ]';
    localStorage.removeItem('name');
  } else if (name !== '[ enter your name ]') {
    localStorage.setItem('name', name);
  }
});

function loadEnteredName() {
  const name = localStorage.getItem('name');

  if (!name) {
    userName.textContent = '[ enter your name ]';
  } else {
    userName.textContent = name;
  }
}

loadEnteredName();

// set quote and author
const quote = document.getElementById('quote');

async function setQuoteAndAuthor() {
  try {
    const response = await fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    );

    const result = await response.json();

    const { quotes } = result;

    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerHTML = `"${currentQuote.quote}" <p id="author" class="font-sans text-gray-500 mt-2">${currentQuote.author}</p>`;
  } catch (err) {
    console.warn(err);
  }
}

setQuoteAndAuthor();
