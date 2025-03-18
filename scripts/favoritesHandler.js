import favoriteBtn from './index.js';

const toggleFavoriteIcon = (isFavorite) =>
  favoriteBtn.classList.toggle('favorite_btn_active', isFavorite);

const showFavoriteCard = ({ quote, author, id }, container) => {
  favoriteBtn.classList.add('favorite_btn_active');
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite_card');
  favoriteCard.innerHTML = `<p class="quote-style">${quote}</p>
    <p class="quote-author">${author}</p>`;
  favoriteCard.id = id;
  console.log(favoriteCard.id);

  container.appendChild(favoriteCard);

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

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
