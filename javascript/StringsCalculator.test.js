const StringsCalculator = require('./StringsCalculator');

describe('StringsCalculator', () => {
  it('empty string return 0', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('');

    const result = stringsCalculator.calculate();

    expect(result).toBe(0);
  });
  
  it('works with 1 number', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('1');

    const result = stringsCalculator.calculate();

    expect(result).toBe(1);
  });

  it('works with 2 numbers', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('1,2');

    const result = stringsCalculator.calculate();

    expect(result).toBe(3);
  });

  it('works with n numbers', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('1,2,3,4,5,6,7,8,9');

    const result = stringsCalculator.calculate();

    expect(result).toBe(45);
  });

  it('handle new lines between numbers', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('1\n2,3');

    const result = stringsCalculator.calculate();

    expect(result).toBe(6);
  });

  it('multiple delimiters are allowed', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('1,4');
    stringsCalculator.add(',5;6');
    stringsCalculator.add(',3|2');

    const result = stringsCalculator.calculate();

    expect(result).toBe(21);
  });

  it.skip('negatives not allowed', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('1,4,-1');

    expect(stringsCalculator.calculate()).toThrow(Error);
  });

  it('ignores big numbers (n > 1000)', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('2;1001');
    // stringsCalculator.add('2 + 42069 = 2');

    const result = stringsCalculator.calculate();

    expect(result).toBe(2);
  });
});