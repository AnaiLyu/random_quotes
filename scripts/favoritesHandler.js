import { currentQuote } from './quotesHendler.js';

const favoriteBtn = document.querySelector('.favorite_btn');
const favoritesContainer = document.querySelector('.favorites_container');

const toggleFavorite = () => {
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    const { favoriteCard, removeFavorQuote } = showFavoriteCard(
      currentQuote,
      favoritesContainer
    ); // СОХРАНЯЕМ ссылку на карточку

    const removeFavorCardIcon = () => {
      currentQuote.isFavorite = false;
      favoriteCard.remove();
      if (currentQuote.id === Number(favoriteCard.id)) {
        toggleFavoriteIcon(currentQuote.isFavorite);
      }
    };

    removeFavorQuote.addEventListener('click', removeFavorCardIcon);
  } else {
    hideFavoriteCard(currentQuote.text);
  }
};

favoriteBtn.addEventListener('click', toggleFavorite);

const hendleFavorite = (isFavorite) => {
  toggleFavoriteIcon(isFavorite);
};

const toggleFavoriteIcon = (isFavorite) => {
  favoriteBtn.classList.toggle('favorite_btn_active', isFavorite);
};

const showFavoriteCard = ({ text, author, id }, container) => {
  favoriteBtn.classList.add('favorite_btn_active');
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite_card');
  favoriteCard.innerHTML = `<p class="quote-style">${text}</p>
    <p class="quote-author">${author}</p>`;
  favoriteCard.id = id;

  container.appendChild(favoriteCard);

  const removeFavorQuote = document.createElement('div');
  removeFavorQuote.classList.add('remove-favor-quote');
  favoriteCard.appendChild(removeFavorQuote);

  return { favoriteCard, removeFavorQuote }; // ВОЗВРАЩАЕМ оба элемента
};

const hideFavoriteCard = (text) => {
  favoriteBtn.classList.remove('favorite_btn_active');
  const favoriteCards = document.querySelectorAll('.favorite_card'); //NodeList
  // console.log(favoriteCards); //NodeList
  favoriteCards.forEach((card) => {
    // console.log(card); // you can use for...of
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
};

export { hendleFavorite, favoriteBtn };
