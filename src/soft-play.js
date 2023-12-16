// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numChildren < 1 || numAdults < 1 || numChildren > numAdults) {
      return false
    } else {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    } else if (
      this.numAdults - numAdults < 0 ||
      this.numChildren - numChildren < 0
    ) {
      return false
    } else if (this.numAdults - numAdults < this.numChildren - numChildren) {
      return false
    } else {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

const sp = new Softplay()

module.exports = Softplay
