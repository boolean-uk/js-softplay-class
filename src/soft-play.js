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

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

const sp = new Softplay(0, 0)
console.log(sp.enter(2, 1))
console.log(sp.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
