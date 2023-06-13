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

  total() {
    return {
      totalAdults: this.totalNumAdults,
      totalChildren: this.totalNumChildren
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay

// let SP = new SoftPlay(0, 0)
// console.log(SP.occupancy())
// SP.enter(10, 5)
// console.log(SP.occupancy())
// SP.enter(10, 5)
// console.log(SP.occupancy())
// SP.leave(2, 1)
// console.log(SP.occupancy())
