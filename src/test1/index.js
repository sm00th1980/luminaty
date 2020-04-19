import {
  isEmpty,
  addIndex,
  reject,
  equals,
  findLastIndex,
  isNil,
  includes,
  compose,
  partial,
  filter,
} from 'ramda';

const NOT_FOUND = -1;

const extractLetters = filter((letter) => includes(letter, ['(', ')', '[', ']', '<', '>']));

const rejectIndexed = addIndex(reject);
const withoutIndex = (index) => rejectIndexed((_, idx) => idx === index);

export const withoutValidPair = (startLetter, endLetter, letters) => {
  const startLetterIndex = findLastIndex(equals(startLetter), letters);

  if (startLetterIndex === NOT_FOUND) {
    return letters;
  }

  const endLetterIndex = startLetterIndex + 1;
  if (letters[endLetterIndex] === endLetter) {
    const withoutPair = compose(withoutIndex(startLetterIndex), withoutIndex(endLetterIndex));

    return withoutPair(letters);
  }

  return letters;
};

const withoutPairs = compose(
  partial(withoutValidPair, ['(', ')']),
  partial(withoutValidPair, ['[', ']']),
  partial(withoutValidPair, ['<', '>'])
);

export const isValid = (letters, iteration = undefined) => {
  const currentIteration = isNil(iteration)
    ? Math.ceil(letters.length / 2.0) // first iteration
    : iteration;

  if (currentIteration < 0) {
    // too much iterations already
    return false;
  }

  if (isEmpty(letters)) {
    return true;
  }

  const lettersWithoutValidPairs = withoutPairs(letters);
  return isValid(lettersWithoutValidPairs, currentIteration - 1);
};

export default (text) => {
  const letters = extractLetters(text);

  return isValid(letters);
};
