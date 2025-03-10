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
