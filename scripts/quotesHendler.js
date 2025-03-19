import quotes from './quotes.js';
import generateRandomInt from './randomNumber.js';
import { hendleFavorite, favoriteBtn } from './favoritesHandler.js';

let currentQuote = null;

const displayQuote = (quote) => {
  const quoteElement = document.querySelector('.quote');
  const authorElement = document.querySelector('.quote-author');
  quoteElement.classList.add('quote-style');

  const { text, author: quoteAuthor, isFavorite } = quote;
  quoteElement.textContent = text;
  authorElement.textContent = quoteAuthor;
  favoriteBtn.classList.remove('favorite_btn_d-n');
  hendleFavorite(isFavorite);
};

const choseRandomQuote = (quotes) => {
  const randomNum = generateRandomInt(quotes.length);
  const randomQuote = quotes[randomNum];
  return randomQuote;
};

const hendlerQuote = () => {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
};
export { hendlerQuote, currentQuote };
