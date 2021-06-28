//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.num = num;
  }

  get sumOfSquares() {
    return this.num * (this.num + 1) * (this.num * 2 + 1) / 6;
  }

  get squareOfSum() {
    return ((1 + this.num) * this.num / 2)**2;
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
