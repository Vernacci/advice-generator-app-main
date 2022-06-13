const adviceId = document.querySelector('.advice-id');
const quote = document.querySelector('.quote');
const quoteBtn = document.querySelector('.quote-btn');

const URL = 'https://api.adviceslip.com/advice';

const handleClick = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((adviceResponse) => {
      adviceId.innerHTML = `Advice #${adviceResponse.slip.id}`;
      quote.innerHTML = adviceResponse.slip.advice;
    })
    .catch((error) => {
      adviceId.innerHTML = 'Could not fetch advice id';
      quote.innerHTML = 'Could not fetch advice';
    });
};
