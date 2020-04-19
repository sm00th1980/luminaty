import verify from '..';

describe('verify', () => {
  it('test 1', () => {
    const input = '---(++++)----';
    const result = verify(input);

    expect(result).toBe(true);
  });

  it('test 2', () => {
    const input = '';

    const result = verify(input);

    expect(result).toBe(true);
  });

  it('test 3', () => {
    const input = 'before ( middle []) after ';

    const result = verify(input);

    expect(result).toBe(true);
  });

  it('test 4', () => {
    const input = ') (';

    const result = verify(input);

    expect(result).toBe(false);
  });

  it('test 5', () => {
    const input = '<(   >)';

    const result = verify(input);

    expect(result).toBe(false);
  });

  it('test 6', () => {
    const input = '(  [  <>  ()  ]  <>  )';

    const result = verify(input);

    expect(result).toBe(true);
  });

  it('test 7', () => {
    const input = '   (      [)';

    const result = verify(input);

    expect(result).toBe(false);
  });
});
