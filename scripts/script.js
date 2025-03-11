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
const favoriteBtn = document.querySelector('.favorite_btn');

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
const toggleFavorite = () => {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  console.log(quotes);
  if (currentQuoteIndex !== -1) {
    favoriteBtn.classList.add('favorite_btn_active');
  }
  if (currentQuote.isFavorite) {
    favoriteBtn.textContent = 'Remove';
    favoriteBtn.classList.add('favorite_btn_active');
  } else {
    favoriteBtn.textContent = 'Favorite';
    favoriteBtn.classList.remove('favorite_btn_active');
  }
};

/** Favorite */
// const makeFavorite = () => {
// if (currentQuoteIndex !== -1) {
//   favoriteBtn.classList.add('favorite_btn_active');
// }
// if (currentQuote.isFavorite !== true) {
//   favoriteBtn.classList.remove('favorite_btn_active');
// }
// if (favoriteBtn.classList.contains('favorite_btn_active')) {
//   favoriteBtn.textContent = 'Remove';
// } else {
//   favoriteBtn.textContent = 'Favorite';
// }
// };
const isFavoriteThisQuote = () => {
  if (quotes[currentQuoteIndex].isFavorite) {
    favoriteBtn.textContent = 'Remove';
    favoriteBtn.classList.add('favorite_btn_active');
  } else {
    favoriteBtn.textContent = 'Favorite';
    favoriteBtn.classList.remove('favorite_btn_active');
  }
};

// favoriteBtn.addEventListener('click', makeFavorite);
favoriteBtn.addEventListener('click', toggleFavorite);
generateBtn.addEventListener('click', isFavoriteThisQuote);
