// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.totalAdults = numAdults
    this.totalChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.numAdults += numAdults
      this.numChildren += numChildren
      this.totalAdults += numAdults
      this.totalChildren += numChildren
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

  leave(numAdults, numChildren) {
    if (
      numChildren <= numAdults &&
      this.numChildren - numChildren <= this.numAdults - numAdults &&
      numChildren <= this.numChildren &&
      numAdults <= this.numAdults
    ) {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    } else {
      return false
    }
  }

  total() {
    return {
      totalAdults: this.totalAdults,
      totalChildren: this.totalChildren
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
