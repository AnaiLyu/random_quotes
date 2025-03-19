import darkMode from './dark_mode.js';
import { hendlerQuote } from './quotesHendler.js';

/** Dark Mode */
//? darkToggle.addEventListener('click', darkMode);

const generateBtn = document.querySelector('.generate-quote_btn');

generateBtn.addEventListener('click', hendlerQuote);
