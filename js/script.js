const adviceId = document.querySelector('.advice-id');
const quote = document.querySelector('.quote');
const quoteBtn = document.querySelector('.quote-btn');

const URL = 'https://api.adviceslip.com/advice';

const handleClick = () => {
  fetch(URL, { cache: 'no-store' })
    .then((response) => response.json())
    .then((adviceResponse) => {
      adviceId.textContent = `Advice #${adviceResponse.slip.id}`;
      quote.textContent = adviceResponse.slip.advice;
    })
    .catch((error) => {
      adviceId.textContent = 'Could not fetch advice id';
      quote.textContent = 'Could not fetch advice';
    });
};
