class Softplay {
  constructor(numAdults = 0, numChildren = 0) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    } else {
      return false
    }
  }

  leave(numAdults, numChildren) {
    if (
      numAdults >= numChildren &&
      numAdults + numChildren <= this.numAdults + this.numChildren &&
      this.numAdults - numAdults >= this.numChildren - numChildren
    ) {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    } else {
      return false
    }
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

module.exports = Softplay
