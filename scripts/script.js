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

const quotes = [
  {
    author: 'Оскар Уайльд',
    quote: 'Будьте собой. Прочие роли уже заняты',
  },
  {
    author: 'Уинстон Черчилль',
    quote: 'Я люблю учиться, но терпеть не могу, когда меня учат',
  },
  {
    author: 'Граучо Маркс',
    quote:
      'Я бы никогда не вступил в клуб, который согласился бы принять такого, как я',
  },
  {
    author: 'Рональд Рейган',
    quote:
      'Государство — это не решение наших проблем. Государство и есть наша проблема',
  },
  {
    author: 'Альберт Эйнштейн',
    quote:
      'Две вещи бесконечны: вселенная и человеческая глупость. Хотя насчёт вселенной я не уверен',
  },
];

let previousRandomNum = -1;

const getRandomQuote = () => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (randomNum === previousRandomNum);

  previousRandomNum = randomNum;
  // quoteElement.innerHTML = '<em>"' + quotes[randomNum].quote + '"</em>';
  quoteElement.innerHTML = `<em>"${quotes[randomNum].quote}"</em>`;
  authorElement.textContent = quotes[randomNum].author;
};

generateBtn.addEventListener('click', getRandomQuote);
