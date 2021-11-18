class StringsCalculator  {

  constructor() {
    this.numbers = [];
  }

  add(input) {
    // this implementation provides a broader support of delimiters, any non-number character is a delimeter
    let delimiter = /[^0-9]+/i;
    if (!input) this.numbers.push(0);
    else this.numbers = [...this.numbers, ...input.split(delimiter)]
  }

  calculate() {
    return this.numbers.reduce((previous, current) => Number(previous) + Number(current), 0); 
  }
};

module.exports = StringsCalculator;