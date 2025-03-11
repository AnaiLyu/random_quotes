import quotes from './quotes.js';

/** Dark Mode */
const body = document.querySelector('.body');
const darkToggle = document.querySelector('.dark-toggle');

const darkMode = () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkToggle.textContent = '1';
    body.classList.remove('light-mode');
  } else {
    darkToggle.textContent = '0';
    body.classList.add('light-mode');
  }
};

darkToggle.addEventListener('click', darkMode);

/** Quotes */
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const generateBtn = document.querySelector('.generate-quote_btn');

let previousRandomNum = -1;

const getRandomQuote = () => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (randomNum === previousRandomNum);

  previousRandomNum = randomNum;
  // quoteElement.innerHTML = '<em>"' + quotes[randomNum].quote + '"</em>';
  quoteElement.innerHTML = `<em>"${quotes[randomNum].quote}"</em>`;
  authorElement.textContent = quotes[randomNum].author;
};

generateBtn.addEventListener('click', getRandomQuote);
