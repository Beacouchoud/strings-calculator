class StringsCalculator  {

  constructor() {
    this.numbers = [];
  }

  add(input) {
    // this implementation provides a broader support of delimiters, any non-number character is a delimeter
    let delimiter = /[^-0-9]+/i;
    if (!input) this.numbers.push(0);
    else this.numbers = [...this.numbers, ...input.split(delimiter)]
    console.log(this.numbers)
  }

  calculate() {
   this.handleNegativeNumbers();
   return this.numbers.reduce((previous, current) => Number(previous) + Number(current), 0); 
  }

  handleNegativeNumbers() {
    const negativeNumbers = this.numbers.filter(n => n < 0);
    console.log(negativeNumbers);
    if (negativeNumbers.length) {
      console.log("error");
      throw new Error('negatives not allowed: ' + negativeNumbers.join(' '));
    }
  }
};

module.exports = StringsCalculator;

let calc = new StringsCalculator();
calc.add("1,4,1");
calc.calculate();