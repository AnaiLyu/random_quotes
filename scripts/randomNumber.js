const generateRandomInt = (maxInt, currentIndex) => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * maxInt);
  } while (randomNum === currentIndex);
  return randomNum;
};

export default generateRandomInt;
