import { isValid } from '..';

describe('isValid', () => {
  it('test 1', () => {
    const input = [];
    const result = isValid(input);

    expect(result).toBe(true);
  });

  it('test 2', () => {
    const input = ['(', ')'];
    const result = isValid(input);

    expect(result).toBe(true);
  });

  it('test 3', () => {
    const input = [')', '('];
    const result = isValid(input);

    expect(result).toBe(false);
  });

  it('test 4', () => {
    const input = ['(', ')', ')'];
    const result = isValid(input);

    expect(result).toBe(false);
  });

  it('test 5', () => {
    const input = ['(', ')', '(', ')'];
    const result = isValid(input);

    expect(result).toBe(true);
  });

  it('test 6', () => {
    const input = ['(', '(', ')', ')'];
    const result = isValid(input);

    expect(result).toBe(true);
  });

  it('test 7', () => {
    const input = ['(', ')', ')', ')'];
    const result = isValid(input);

    expect(result).toBe(false);
  });

  it('test 8', () => {
    const input = ['<', '(', '>', ')'];
    const result = isValid(input);

    expect(result).toBe(false);
  });

  it('test 9', () => {
    const input = ['<', '(', '>', ')'];
    const result = isValid(input);

    expect(result).toBe(false);
  });

  it('test 10', () => {
    const input = ['(', '[', ']', ')'];
    const result = isValid(input);

    expect(result).toBe(true);
  });

  it('test 11', () => {
    const input = ['(', '[', ']', ')'];
    const result = isValid(input);

    expect(result).toBe(true);
  });
});
