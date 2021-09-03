const clock = document.getElementById('time');
const greeting = document.getElementById('greeting');

function updateTime() {
  let date = new Date();
  let currentTime = `${date.getHours()}:${addZero(date.getMinutes())}`;
  if (currentTime !== clock.textContent) {
    clock.textContent = currentTime;
    displayGreeting(date.getHours);
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
  } else if (timeOfDay >= 12 && timeOfDay < 5) {
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
