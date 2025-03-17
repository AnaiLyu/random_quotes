import quotes from './quotes.js';
import darkMode from './dark_mode.js';

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
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (randomNum === currentQuoteIndex);
  currentQuoteIndex = randomNum;
  quoteElement.classList.add('quote-style');
  const { quote, author: quoteAuthor } = quotes[randomNum];
  quoteElement.innerHTML = quote;
  authorElement.textContent = quoteAuthor;
  favoriteBtn.classList.remove('favorite_btn_d-n');
};

generateBtn.addEventListener('click', getRandomQuote);

/** Make Favorite */
const toggleFavoriteIcon = (isFavorite) =>
  favoriteBtn.classList.toggle('favorite_btn_active', isFavorite);

const showFavoriteCard = ({ quote, author, id }) => {
  favoriteBtn.classList.add('favorite_btn_active');
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite_card');
  favoriteCard.innerHTML = `<p class="quote-style">${quote}</p>
    <p class="quote-author">${author}</p>`;
  favoriteCard.id = id;
  console.log(favoriteCard.id);

  favoritesContainer.appendChild(favoriteCard);

  const removeFavorQuote = document.createElement('div');
  removeFavorQuote.classList.add('remove-favor-quote');
  favoriteCard.appendChild(removeFavorQuote);

  return { favoriteCard, removeFavorQuote }; // ВОЗВРАЩАЕМ оба элемента
};

const hideFavoriteCard = (quote) => {
  favoriteBtn.classList.remove('favorite_btn_active');
  const favoriteCards = document.querySelectorAll('.favorite_card'); //NodeList
  console.log(favoriteCards);
  favoriteCards.forEach((card) => {
    console.log(card); // you can use for...of
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
};

const toggleFavorite = () => {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  console.log(quotes);

  toggleFavoriteIcon(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    const { favoriteCard, removeFavorQuote } = showFavoriteCard(currentQuote); // СОХРАНЯЕМ ссылку на карточку

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
