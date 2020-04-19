import { withoutValidPair } from '..';

describe('withoutValidPair', () => {
  it('test 1', () => {
    const input = [];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual([]);
  });

  it('test 2', () => {
    const input = ['(', ')'];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual([]);
  });

  it('test 3', () => {
    const input = [')', '('];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual(input);
  });

  it('test 4', () => {
    const input = ['(', ')', ')'];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual([')']);
  });

  it('test 5', () => {
    const input = ['(', ')', '(', ')'];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual(['(', ')']);
  });

  it('test 6', () => {
    const input = ['(', '(', ')', ')'];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual(['(', ')']);
  });

  it('test 7', () => {
    const input = ['(', ')', ')', ')'];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual([')', ')']);
  });

  it('test 8', () => {
    const input = ['<', '(', '>', ')'];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual(input);
  });

  it('test 9', () => {
    const input = ['<', '(', '>', ')'];
    const startLetter = '<';
    const endLetter = '>';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual(input);
  });

  it('test 10', () => {
    const input = ['(', '[', ']', ')'];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual(input);
  });

  it('test 11', () => {
    const input = ['(', '[', ']', ')'];
    const startLetter = '[';
    const endLetter = ']';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual(['(', ')']);
  });

  it('test 12', () => {
    const input = [')'];
    const startLetter = '(';
    const endLetter = ')';
    const result = withoutValidPair(startLetter, endLetter, input);

    expect(result).toEqual(input);
  });
});
