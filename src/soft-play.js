class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.totalAdults = this.numAdults + numAdults
    this.totalChildren = this.numChildren + numChildren
  }

  // enter
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

  // leave
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

  // occupacy
  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }

  // total
  total() {
    return {
      adults: this.totalAdults,
      children: this.totalChildren
    }
  }
}

const sp = new Softplay(0, 0)

console.log(sp.occupancy())
// Output: { adults: 0, children: 0 }
console.log(sp.enter(10, 6))
// Output: true
console.log(sp.occupancy())
// Output: { adults: 10, children: 6 }
console.log(sp.enter(3, 3))
// Output: true
console.log(sp.occupancy())
// Output: { adults: 13, children: 9 }
console.log(sp.leave(5, 4))
// Output: true
console.log(sp.occupancy())
// Output: { adults: 8, children: 5 }
console.log(sp.enter(8, 5))
// Output: true
console.log(sp.occupancy())
// Output: { adults: 16, children: 10 }
console.log(sp.total())
// Output: { adults: 26, children: 19 }

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
