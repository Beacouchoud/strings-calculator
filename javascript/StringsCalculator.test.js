const StringsCalculator = require('./StringsCalculator');

describe('StringsCalculator', () => {
  it('empty string return 0', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('');

    const result = stringsCalculator.calculate();

    expect(result).toBe(0);
  });
  
  it.skip('works with 1 number', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('1');

    const result = stringsCalculator.calculate();

    expect(result).toBe(1);
  });

  it.skip('works with 2 numbers', () => {
    const stringsCalculator = new StringsCalculator();

    stringsCalculator.add('1,2');

    const result = stringsCalculator.calculate();

    expect(result).toBe(3);
  });
});