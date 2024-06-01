// TODO: Create a class in this file to contain all of the logic for this exercise

class SoftPlay {
  constructor(numAdults, numChildren) {
    this.adults = numAdults
    this.children = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren && numAdults >= 1 && numChildren >= 1) {
      this.adults += numAdults
      this.children += numChildren
      return true
    }
    return false
  }

  leave(numAdults, numChildren) {
    if (numAdults === numChildren || this.adults > this.children) {
      this.adults -= numAdults
      this.children -= numChildren
      return true
    }
    return false
  }

  occupancy() {
    return { adults: this.adults, children: this.children }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
