class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback !== undefined) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    const totalMins = Math.floor(this.currentTime / 60);
    return totalMins;
  }

  getSeconds() {
    const afterCurrentTimeSecs = this.currentTime % 60;
    return afterCurrentTimeSecs;
  }

  computeTwoDigitNumber(value) {
    const stringValue = "0" + value.toString();
    return stringValue.slice(-2);
    // let stringValue = `${value}`;
    // if (stringValue.length < 2) {
    //   stringValue = `0${stringValue}`;
    // }

    // return stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const mins = this.computeTwoDigitNumber(this.getMinutes());
    const secs = this.computeTwoDigitNumber(this.getSeconds());
    return `${mins}:${secs}`;
  }

  //bonus
  //getCentiseconds()
  //split(){

  //}
}
