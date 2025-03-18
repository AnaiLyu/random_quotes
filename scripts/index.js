import quotes from './quotes.js';
import darkMode from './dark_mode.js';
import generateRandomInt from './randomNumber.js';
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from './favoritesHandler.js';
/** Dark Mode */
//? darkToggle.addEventListener('click', darkMode);

/** Buttons, Generate and Favorite */
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.quote-author');
const generateBtn = document.querySelector('.generate-quote_btn');
const favoriteBtn = document.querySelector('.favorite_btn');
const favoritesContainer = document.querySelector('.favorites_container');

let currentQuoteIndex = -1;

/** Get Random Quote */
const getRandomQuote = () => {
  const randomNum = generateRandomInt(quotes.length, currentQuoteIndex);

  currentQuoteIndex = randomNum;
  quoteElement.classList.add('quote-style');
  const { quote, author: quoteAuthor } = quotes[randomNum];
  quoteElement.innerHTML = quote;
  authorElement.textContent = quoteAuthor;
  favoriteBtn.classList.remove('favorite_btn_d-n');
};

generateBtn.addEventListener('click', getRandomQuote);

/** Make Favorite */
const toggleFavorite = () => {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  console.log(quotes);

  toggleFavoriteIcon(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    const { favoriteCard, removeFavorQuote } = showFavoriteCard(
      currentQuote,
      favoritesContainer
    ); // СОХРАНЯЕМ ссылку на карточку

    const removeFavorCardIcon = () => {
      currentQuote.isFavorite = false;
      favoriteCard.remove();
      console.log(currentQuote.isFavorite);
      if (quotes[currentQuoteIndex].id === Number(favoriteCard.id)) {
        toggleFavoriteIcon(currentQuote.isFavorite);
        console.log(currentQuote.isFavorite);
      }
    };

    removeFavorQuote.addEventListener('click', removeFavorCardIcon);
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
};

/** Favorite */
// const isFavoriteThisQuote = () => {
// favoriteBtn.classList.toggle(
//   'favorite_btn_active',
//   quotes[currentQuoteIndex].isFavorite
// );
// if (quotes[currentQuoteIndex].isFavorite) {
//   favoriteBtn.classList.add('favorite_btn_active');
// } else {
//   favoriteBtn.classList.remove('favorite_btn_active');
// }
//   toggleFavoriteIcon(quotes[currentQuoteIndex].isFavorite);
// };

favoriteBtn.addEventListener('click', toggleFavorite);
// generateBtn.addEventListener('click', isFavoriteThisQuote);
generateBtn.addEventListener('click', () =>
  toggleFavoriteIcon(quotes[currentQuoteIndex].isFavorite)
);

export default favoriteBtn;
