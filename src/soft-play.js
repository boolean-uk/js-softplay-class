// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren, adults = 0, children = 0) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.adults = adults
    this.children = children
  }

  enter(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    if (this.numChildren > 0 && this.numAdults >= this.numChildren) {
      this.adults += this.numAdults
      this.children += this.numChildren
      return true
    } else {
      return false
    }
  }

  leave(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    const firstCheck = this.numAdults < 1 && this.children > 0
    const secondCheck =
      this.numAdults > this.numChildren && this.adults <= this.children
    const thirdCheck = this.children > this.adults
    const forthCheck =
      this.numChildren >= 1 && this.numAdults < this.numChildren
    const fifthCeck =
      this.numChildren > this.children && this.numAdults > this.adults
    const sixthCheck =
      this.adults === this.children && this.numAdults > this.numChildren
    const seventhCheck = this.numAdults > this.adults
    if (
      firstCheck ||
      thirdCheck ||
      forthCheck ||
      fifthCeck ||
      secondCheck ||
      sixthCheck ||
      seventhCheck
    ) {
      return false
    }
    this.adults -= this.numAdults
    this.children -= this.numChildren
    return true
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }
}
const sp = new Softplay(0, 0)
sp.occupancy()

sp.enter(2, 1)

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
