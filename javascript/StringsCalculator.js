class StringsCalculator  {

  constructor() {
    this.numbers = [];
    this.negativeNumbers = [];
  }

  add(input) {
    // this implementation provides a broader support of delimiters, any non-number character is a delimeter
    const delimiter = /[^-0-9]+/i;
    if (!input) this.numbers.push(0);
    else this.numbers = [...this.numbers, ...input.split(delimiter)];
    console.log("Input values: ", this.numbers);
  }

  calculate() {
   if (this.hasNegativeNumbers()) {
    throw Error(`Negatives not allowed:  ${this.negativeNumbers.join(' ')}`);
   }
    return this.numbers
                .filter(n => n <= 1000)
                .reduce((prev, curr) => Number(prev) + Number(curr), 0);
  
  }

  hasNegativeNumbers() {
    this.negativeNumbers = this.numbers.filter(n => n < 0);
    return (this.negativeNumbers.length===0) ? false : true;
  }
};

module.exports = StringsCalculator;

let calc = new StringsCalculator();
calc.add("1,4;-1/;2000\n3");
console.log("Result: ", calc.calculate());