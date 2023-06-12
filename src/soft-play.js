// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren, location, multiplier) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.totalAdults = numAdults
    this.totalChildren = numChildren
    this.location = location
    this.multiplier = multiplier
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

  enter(numAdults, numChildren) {
    if (this.location === undefined || this.multiplier === undefined) {
      this.location = 1
      this.multiplier = 1
      if (numAdults >= numChildren * this.multiplier) {
        this.numAdults += numAdults
        this.numChildren += numChildren
        this.totalAdults += numAdults
        this.totalChildren += numChildren
        return true
      } else {
        return false
      }
    }
  }

  leave(numAdults, numChildren) {
    if (numChildren * this.multiplier > numAdults) {
      return false
    } else if (
      this.numAdults - numAdults <
      this.numChildren - numChildren * this.multiplier
    ) {
      return false
    } else if (numAdults === 0 && numChildren > 1) {
      return false
    } else if (numAdults > this.numAdults || numChildren > this.numChildren) {
      return false
    } else {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
