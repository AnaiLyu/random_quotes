import quotes from './quotes.js';
import darkMode from './dark_mode.js';

/** Dark Mode */
//? darkToggle.addEventListener('click', darkMode);

/** Quotes */
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.quote-author');
const generateBtn = document.querySelector('.generate-quote_btn');
const favoriteBtn = document.querySelector('.favorite_btn');
const favoritesContainer = document.querySelector('.favorites_container');

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
  favoriteBtn.classList.remove('favorite_btn_d-n');
};

generateBtn.addEventListener('click', getRandomQuote);

/** Make Favorite */
const toggleFavorite = () => {
  // if (currentQuoteIndex === -1) return;

  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  console.log(quotes);

  // if (currentQuoteIndex !== -1) {
  //   favoriteBtn.classList.add('favorite_btn_active');
  // }

  if (currentQuote.isFavorite) {
    // favoriteBtn.textContent = 'Remove';
    favoriteBtn.classList.add('favorite_btn_active');

    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite_card');
    favoriteCard.innerHTML = `<p class="quote-style">${currentQuote.quote}</p>
    <p class="quote-author">${currentQuote.author}</p>`;
    favoritesContainer.appendChild(favoriteCard);

    const removeFavorQuote = document.createElement('div');
    removeFavorQuote.classList.add('remove-favor-quote');

    const removeFavorCard = () => {
      currentQuote.isFavorite = false;
      favoriteCard.remove();
      // favoriteBtn.textContent = 'Favorite';
      favoriteBtn.classList.remove('favorite_btn_active');
    };

    removeFavorQuote.addEventListener('click', removeFavorCard);
    favoriteCard.appendChild(removeFavorQuote);
  } else {
    // favoriteBtn.textContent = 'Favorite';
    favoriteBtn.classList.remove('favorite_btn_active');

    const favoriteCards = document.querySelectorAll('.favorite_card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
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
    // favoriteBtn.textContent = 'Remove';
    favoriteBtn.classList.add('favorite_btn_active');
  } else {
    // favoriteBtn.textContent = 'Favorite';
    favoriteBtn.classList.remove('favorite_btn_active');
  }
};

// favoriteBtn.addEventListener('click', makeFavorite);
favoriteBtn.addEventListener('click', toggleFavorite);
generateBtn.addEventListener('click', isFavoriteThisQuote);
