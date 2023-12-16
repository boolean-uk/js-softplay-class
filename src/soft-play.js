// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
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
}

const sp = new Softplay(1, 1)

module.exports = Softplay
