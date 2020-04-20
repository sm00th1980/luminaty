/* eslint eqeqeq: off */

import { reduce, addIndex } from 'ramda';

export const NOT_FOUND = -1;

const reduceIndexed = addIndex(reduce);

const getLettersIndexes = (letter1, letter2, text) => {
  return reduceIndexed(
    (acc, letter, index) => {
      const [letter1Index, letter2Index] = acc;

      const letter1Idx = letter1 == letter ? index : letter1Index;
      const letter2Idx = letter2 == letter ? index : letter2Index;

      return [letter1Idx, letter2Idx];
    },
    [NOT_FOUND, NOT_FOUND],
    text
  );
};

export default (text, letter1, letter2) => {
  const [letter1Index, letter2Index] = getLettersIndexes(letter1, letter2, text);

  return Math.max(letter1Index, letter2Index);
};
