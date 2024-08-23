/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('button'); // change from li to button
  element.classList.add('answer-option') // add class to button 
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  element.dataset.key = key;
  return element;
};
