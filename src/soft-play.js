// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren

    this.totalAdults = numAdults
    this.totalChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults / numChildren < 1) {
      return false
    }

    this.numAdults += numAdults
    this.numChildren += numChildren

    this.totalAdults += numAdults
    this.totalChildren += numChildren
    return true
  }

  leave(numAdults, numChildren) {
    if (numAdults === 0 && numChildren > 0) {
      return false
    } else if (
      (this.numAdults - numAdults) / (this.numChildren - numChildren) <
      1
    ) {
      return false
    } else if (numAdults / numChildren < 1) {
      return false
    } else if (numAdults + numChildren > this.numAdults + this.numChildren) {
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

  total() {
    return {
      adults: this.totalAdults,
      children: this.totalChildren
    }
  }
}
// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
