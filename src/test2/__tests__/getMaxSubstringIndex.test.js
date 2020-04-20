import getMaxSubstringIndex, { NOT_FOUND } from '..';

describe('getMaxSubstringIndex', () => {
  it('test 1', () => {
    const text = '';
    const substring1 = 'a';
    const substring2 = 'b';

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(NOT_FOUND);
  });

  it('test 2', () => {
    const text = 'moscow';
    const substring1 = 'm';
    const substring2 = 'o';

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(4);
  });

  it('test 3', () => {
    const text = 'moscow';
    const substring1 = 'm';
    const substring2 = undefined;

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(0);
  });

  it('test 4', () => {
    const text = 'moscow';
    const substring1 = 's';
    const substring2 = undefined;

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(2);
  });

  it('test 5', () => {
    const text = 'moscow';
    const substring1 = undefined;
    const substring2 = 'm';

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(0);
  });

  it('test 6', () => {
    const text = 'moscow';
    const substring1 = undefined;
    const substring2 = 's';

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(2);
  });

  it('test 7', () => {
    const text = '1oscow';
    const substring1 = 1;
    const substring2 = undefined;

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(0);
  });

  it('test 8', () => {
    const text = 'moscow5';
    const substring1 = undefined;
    const substring2 = 5;

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(6);
  });

  it('test 9', () => {
    const text = 'mo4scow5';
    const substring1 = 4;
    const substring2 = 5;

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(7);
  });

  it('test 10', () => {
    const text = 'mo4scow5';
    const substring1 = 5;
    const substring2 = 4;

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(7);
  });

  it('test 11', () => {
    const text = 'moscow';
    const substring1 = 'a';
    const substring2 = 'b';

    const result = getMaxSubstringIndex(text, substring1, substring2);

    expect(result).toBe(NOT_FOUND);
  });
});
