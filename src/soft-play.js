// src/soft-play.js

class Softplay {
  constructor(numAdults, numChildren) {
    this.totalAdults = 0;
    this.totalChildren = 0;
    this.currentAdults = numAdults;
    this.currentChildren = numChildren;
  }

  enter(numAdults, numChildren) {
    // Check if every child entering is accompanied by at least 1 adult
    if (numChildren > 0 && numAdults === 0) {
      return false;
    }

    this.currentAdults += numAdults;
    this.currentChildren += numChildren;
    this.totalAdults += numAdults;
    this.totalChildren += numChildren;

    return true;
  }

  leave(numAdults, numChildren) {
    // Check if a child is not attempting to leave without an adult
    // Check if the number of adults and children left inside the center will not cause more children than adults
    // Check if every child leaving is accompanied by at least 1 adult
    // Check if the number of adults and children attempting to leave is not greater than the number currently inside the center
    if (
      numChildren > 0 &&
      numAdults === 0 &&
      this.currentAdults - numAdults < this.currentChildren - numChildren + 1
    ) {
      return false;
    }

    this.currentAdults -= numAdults;
    this.currentChildren -= numChildren;

    return true;
  }

  occupancy() {
    return {
      adults: this.currentAdults,
      children: this.currentChildren,
    };
  }

  total() {
    return {
      adults: this.totalAdults,
      children: this.totalChildren,
    };
  }
}

module.exports = Softplay;