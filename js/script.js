const adviceId = document.querySelector('.advice-id');
const quote = document.querySelector('.quote');
const quoteBtn = document.querySelector('.quote-btn');

const URL = 'https://api.adviceslip.com/advice';

const handleClick = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
};
