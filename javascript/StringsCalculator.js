class StringsCalculator  {

  constructor() {
    this.numbers = [];
  }

  add(input) {
    if (!input) this.numbers.push(0);
    else this.numbers = [...this.numbers, ...input.split(/[,\n]/)]
  }

  calculate() {
    return this.numbers.reduce((previous, current) => Number(previous) + Number(current), 0); 
  }
};

module.exports = StringsCalculator;