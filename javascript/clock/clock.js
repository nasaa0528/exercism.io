export class Clock {
  constructor(hour, min=0) {
    this.hour = hour;
    this.min = min;
  }

  toFormat(){
    let minSign = (this.min < 0) ? -1 : 1;
    this.hour = this.hour + (Math.floor(this.min / 60));
    this.min = this.min % 60;
    if (minSign === -1 && this.min !== -0) this.min = 60 + this.min;
    let hourSign = (this.hour < 0) ? -1 : 1;
    this.hour = this.hour % 24;
    this.hour = (this.hour < 0) ? (24 + this.hour): this.hour;
  }

  toString() {
    this.toFormat();
    if (this.hour < 10) this.hour = "0"+this.hour;
    if (this.min < 10) this.min = "0"+this.min;
    return ""+this.hour+":"+this.min;
  }

  plus(addMin) {
    this.min += addMin;
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
