# Projects related to DOM

## projects link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html&file=index.html)

# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((b) => {
  console.log(b);
  b.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

## project 2

```javascript

const form = document.querySelector('form');
// This use case will give an empty value
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Show the results
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are in Normal Range</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is ${bmi} and you are Overweight!</span>`;
    }
  }
});

```

## project 3

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  const time = date.toLocaleTimeString();
  const dates = date.toDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  clock.innerHTML = `${time}<br>${dates}`;
}, 1000);

```

## project 4

```javascript

let randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessArr = document.querySelector('.guesses');
const rem = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    valGuess(guess);
  });
}

function valGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randNum) {
    displayMsg(`You guessed it right!`);
    endGame();
  } else if (guess < randNum) {
    displayMsg(`Number is TOO low`);
  } else if (guess > randNum) {
    displayMsg(`Number is TOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessArr.innerHTML += `${guess} `;
  numGuess++;
  rem.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start a new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessArr.innerHTML = '';
    rem.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```