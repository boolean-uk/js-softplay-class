// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor() {
    this.adults = 0
    this.children = 0
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    } else {
      this.adults += numAdults
      this.children += numChildren
    }
    return true
  }

  leave(numAdults, numChildren) {
    const occupancy = this.occupancy()
    console.log(occupancy)
    // More adults cannot leave than are in the soft play center
    if (occupancy.adults - numAdults < 0) {
      return false
    }
    // More children cannot leave than are in the soft play center
    if (occupancy.children - numChildren < 0) {
      return false
    }
    // Adult cannot leave with multiple children
    // Child cannot leave on own
    // Multiple adults can leave with multiple children
    if (numChildren / numAdults > 1) {
      return false
    }
    // Adult can leave when adults 2 and children 1
    // Adult cannot leave when adults 1 and children 1
    // Adult cannot leave when adults 2 and children 2
    if (this.adults - numAdults < this.children - numChildren) {
      return false
    }

    this.adults -= numAdults
    this.children -= numChildren
    return true
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
