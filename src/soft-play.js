// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor() {
    this.adults = 0
    this.children = 0
    this.totals = {
      adults: 0,
      children: 0
    }
  }
  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  total() {
    return this.totals
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    } else {
      this.adults += numAdults
      this.children += numChildren
      this.addToTotal(numAdults, numChildren)
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (numAdults > this.adults || numChildren > this.children) {
      return false
    } else if (numAdults < numChildren) {
      return false
    } else if (this.adults - numAdults < this.children - numChildren) {
      return false
    } else {
      this.adults -= numAdults
      this.children -= numChildren
      return true
    }
  }

  addToTotal(numAdults, numChildren) {
    this.totals.adults += numAdults
    this.totals.children += numChildren
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = undefined
module.exports = Softplay
