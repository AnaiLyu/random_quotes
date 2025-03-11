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

let currentQuoteIndex = -1;

const getRandomQuote = () => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (randomNum === currentQuoteIndex);
  currentQuoteIndex = randomNum;
  quoteElement.classList.add('quote-style');
  const { quote, author: quoteAuthor } = quotes[randomNum];
  quoteElement.innerHTML = quote;
  authorElement.textContent = quoteAuthor;
};

generateBtn.addEventListener('click', getRandomQuote);

/** Make Favorite */
const toggleFavorite = () =>
  (quotes[currentQuoteIndex].isFavorite =
    !quotes[currentQuoteIndex].isFavorite);

/** Favorite */
const favorite = document.querySelector('.favorite_btn');

const makeFavorite = () => {
  if (currentQuoteIndex !== -1) {
    favorite.classList.toggle('favorite_btn_active');
  }
  if (favorite.classList.contains('favorite_btn_active')) {
    favorite.textContent = 'Remove';
  } else {
    favorite.textContent = 'Favorite';
  }
};

favorite.addEventListener('click', makeFavorite);
favorite.addEventListener('click', toggleFavorite);
