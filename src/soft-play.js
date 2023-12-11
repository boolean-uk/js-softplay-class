// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (this.numAdults < this.numChildren) {
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
    } else if (this.numAdults - this.numChildren < this.numChildren) {
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

// INITIAL TEST
const sp = new Softplay(0, 0)
console.log(sp.occupancy())

// TEST ENTER
console.log(sp.enter(10, 8))
console.log(sp.occupancy())

// TEST LEAVE
console.log(sp.leave(0, 4))
console.log(sp.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
