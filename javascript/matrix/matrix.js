export class Matrix {
  constructor(input) {
    this.matrix = input.split("\n").map(row => row.split(" ").map(item => parseInt(item)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.transpose(this.matrix);
  }

  transpose(rows) {
    return rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));
  }
}
