class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numChildren > numAdults) {
      return false
    }

    this.numAdults += numAdults
    this.numChildren += numChildren
    return true
  }

  leave(numAdults, numChildren) {
    if (numAdults > this.numAdults || numChildren > this.numChildren) {
      return false
    }

    if (numChildren > numAdults) {
      return false
    }

    if (this.numAdults - numAdults < this.numChildren - numChildren) {
      return false
    }

    this.numAdults -= numAdults
    this.numChildren -= numChildren
    return true
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

module.exports = Softplay
