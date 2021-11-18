class StringsCalculator  {

  constructor() {
    this.numbers = [];
    this.negativeNumbers = [];
  }

  add(input) {
    // this implementation provides a broader support of delimiters, any non-number character is a delimeter
    let delimiter = /[^-0-9]+/i;
    if (!input) this.numbers.push(0);
    else this.numbers = [...this.numbers, ...input.split(delimiter)]
    console.log(this.numbers)
  }

  calculate() {
   if (this.handleNegativeNumbers()) {
    throw Error('negatives not allowed: ' + this.negativeNumbers.join(' '));
   } else {
    return this.numbers
                .filter(n => n <= 1000)
                .reduce((previous, current) => Number(previous) + Number(current), 0);
    }
  }

  handleNegativeNumbers() {
    this.negativeNumbers = this.numbers.filter(n => n < 0);
    return (this.negativeNumbers.length===0) ? false : true;
  }
};

module.exports = StringsCalculator;

let calc = new StringsCalculator();
calc.add("1,4;1/;2000\n3");
console.log(calc.calculate());