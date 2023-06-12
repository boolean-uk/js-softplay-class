// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor() {
    this.adults = 0
    this.children = 0
    this.total = {
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
    if (numChildren > numAdults) {
      return false
    } else if (this.adults - numAdults < this.children - numChildren) {
      return false
    } else {
      this.adults -= numAdults
      this.children -= numChildren
      return true
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
