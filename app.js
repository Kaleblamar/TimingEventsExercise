// I. Start your Live Server (NOTE: Must be in the index.html file to do this)
// J. Open your app.js file and complete the following...
// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.

const first = document.querySelector(`#first`);
const hi = document.createElement(`p`);
hi.innerText = `Hi`;
setTimeout(() => {
  first.append(hi);
}, 1000);

// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.

const timeoutNesting = document.querySelector(`#timeout-nesting`);
const one = document.createElement(`p`);
const two = document.createElement(`p`);
one.innerText = `One`;
two.innerText = `Two`;
setTimeout(() => {
  timeoutNesting.append(one);
  setTimeout(() => {
    timeoutNesting.append(two);
  }, 3000);
}, 2000);

// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.

let a = 1;
let b = setInterval(() => {
  console.log(a++);
}, 1000);

// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).

const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
  clearInterval(b);
});

// BONUS…
// 4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).

const countDown = document.querySelector(`#countdown`);
const timer = document.createElement(`p`);
const start = document.createElement(`button`);
const stopBtn = document.createElement(`button`);
const reset = document.createElement(`button`);
start.textContent = `START`;
stopBtn.textContent = `STOP`;
reset.textContent = `RESET`;
document.body.append(start, stopBtn, reset);

timer.innerHTML = `<span class="minute">2</span>:<span class="second">00</span>`;
countDown.append(timer);

let minute = document.querySelector(`.minute`);
let second = document.querySelector(`.second`);
let sec = 60;
let min = 2;
let interval;

start.addEventListener(`click`, () => {
  interval = setInterval(setTimer, 1000);
});

reset.addEventListener(`click`, () => {
  clearInterval(interval);
  sec = 60;
  min = 2;
  timer.innerHTML = `<span class="minute">2</span>:<span class="second">00</span>`;
  minute = document.querySelector(`.minute`);
  second = document.querySelector(`.second`);
  second.innerText = `00`;
  minute.innerText = `2`;
});

stopBtn.addEventListener(`click`, () => {
  clearInterval(interval);
});

function setTimer() {
  sec--;
  if (sec === 59) {
    min--;
  }

  if (sec === 0) {
    sec = 60;
  }

  if (min === 0) {
    min = 0;
  }
  if (sec <= 9) {
    second.innerText = `0` + sec;
  }
  if (sec > 9) {
    second.innerText = sec;
  }
  if (min === 0 && sec === 1) {
    clearInterval(interval);
    timer.innerHTML = `TIME IS UP`;
  }
  minute.innerText = min;
  second.innerText = sec;
}

// When finished, create a repository in the "TimingEventsExercise" Folder as well as on GitHub. Add and commit everything in the TimingEventsExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form in google classroom.
