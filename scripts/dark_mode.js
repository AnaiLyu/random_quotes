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

export default darkMode;
