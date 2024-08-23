import { 
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 * @param {string} question 
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <button id="${SKIP_QUESTION_BUTTON_ID}">
      Skip
    </button>
  `;

  return element;
};
