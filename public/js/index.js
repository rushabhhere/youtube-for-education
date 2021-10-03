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
  // caching quotes if not already cached
  if (!sessionStorage.getItem('ytedu-quotes')) {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      result = await response.json();
      sessionStorage.setItem('ytedu-quotes', JSON.stringify(result));
    } catch (err) {
      console.warn(err);
    }
  }

  // setting new quote
  const quotes = JSON.parse(sessionStorage.getItem('ytedu-quotes'));
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = `"${currentQuote.text}" <p id="author">${
    currentQuote.author === null ? 'Unknown' : currentQuote.author
  }</p>`;
}

setQuoteAndAuthor();
