// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numChildren > numAdults) {
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
    }
    if (this.numAdults < numAdults || this.numChildren < numChildren) {
      return false
    }
    if (this.numAdults - numAdults < this.numChildren - numChildren) {
      return false
    } else {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
  }

  occupancy() {
    return { adults: this.numAdults, children: this.numChildren }
  }
}

// const softplay = new Softplay (5, 2)
// console.log(softplay)

// // softplay.enter(2, 1)
// softplay.leave(2, 2)

// console.log(softplay.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
