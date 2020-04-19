/* eslint eqeqeq: off */

import { findLastIndex } from 'ramda';

export const NOT_FOUND = -1;

const findByLetter = (letter) => (substring) => substring == letter;

const getLetterIndex = (letter, text) => findLastIndex(findByLetter(letter), text);

export default (text, letter1, letter2) => {
  return Math.max(getLetterIndex(letter1, text), getLetterIndex(letter2, text));
};
