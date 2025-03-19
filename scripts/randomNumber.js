let currentIndex = -1;
const generateRandomInt = (maxInt) => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * maxInt);
  } while (randomNum === currentIndex);
  currentIndex = randomNum;
  return randomNum;
};

export default generateRandomInt;
