// TODO: Create a class in this file to contain all of the logic for this exercise

class SoftPlay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren || numChildren > numAdults) {
      return false
    } else {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (
      this.numAdults >= numAdults &&
      this.numChildren >= numChildren &&
      numAdults >= numChildren &&
      this.numAdults - numAdults === this.numChildren - numChildren
    ) {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
    return false
  }

  occupancy(numAdults, numChildren) {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}
const sp = new SoftPlay(1, 1)
sp.enter(2, 1)
sp.leave(2, 1)
console.log(sp.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
