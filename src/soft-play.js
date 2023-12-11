// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.totalAdults = this.numAdults + numAdults
    this.totalChildren = this.numChildren + numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    } else {
      this.numAdults += numAdults
      this.numChildren += numChildren
      this.totalAdults += numAdults
      this.totalChildren += numChildren
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

  total() {
    return {
      adults: this.totalAdults,
      children: this.totalChildren
    }
  }
}

// TESTS
// INITIAL
const sp = new Softplay(0, 0)
console.log(sp)
console.log(sp.occupancy())

// ENTER
console.log(sp.enter(10, 6))
console.log(sp.occupancy())
console.log(sp.enter(3, 3))
console.log(sp.occupancy())

// LEAVE
console.log(sp.leave(5, 4))
console.log(sp.occupancy())

// ENTER
console.log(sp.enter(8, 5))
console.log(sp.occupancy())

// TOTAL ENTERED
console.log(sp.total())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
