// TODO: Create a class in this file to contain all of the logic for this exercise

class SoftPlay {
  constructor() {
    this.currentAdults = 0
    this.currentChildren = 0
    this.totalNumAdults = 0
    this.totalNumChildren = 0
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    } else {
      this.currentAdults += numAdults
      this.currentChildren += numChildren
      this.totalNumAdults += numAdults
      this.totalNumChildren += numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    // fail states
    // 1 - A child is not attempting to leave without an adult
    // 2 - The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
    // 3 - Every child leaving the soft play center is accompanied by at least 1 adult.
    // 4 - The number of adults and children attempting to leave is not greater than the number currently inside the center
    // 1 & 3 - numAdults < numChildren
    // 2 - currentAdults - numAdults < currentChildren - numChildren
    // 4 - numAdults > currentAdults || numChildren > currentChildren
    if (numAdults < numChildren) {
      return false
    } else if (
      this.currentAdults - numAdults <
      this.currentChildren - numChildren
    ) {
      return false
    } else if (
      numAdults > this.currentAdults ||
      numChildren > this.currentChildren
    ) {
      return false
    } else {
      this.currentAdults -= numAdults
      this.currentChildren -= numChildren
      return true
    }
  }

  occupancy() {
    return {
      adults: this.currentAdults,
      children: this.currentChildren
    }
  }
}

// let SP = new SoftPlay(0, 0)
// console.log(SP.occupancy())
// SP.enter(10, 5)
// console.log(SP.occupancy())
// SP.enter(10, 5)
// console.log(SP.occupancy())
// SP.leave(2, 1)
// console.log(SP.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
