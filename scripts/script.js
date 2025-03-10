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
const generateBtn = document.querySelector('.generate-quote_btn');

const quotes = ['quote 1', 'quote 2', 'quote 3', 'quote 4', 'quote 5'];

let previousRandomNum = -1;

const getRandomQuote = () => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (randomNum === previousRandomNum);

  previousRandomNum = randomNum;
  quoteElement.textContent = quotes[randomNum];
};

generateBtn.addEventListener('click', getRandomQuote);
