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
});