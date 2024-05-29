// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults = 0, numChildren = 0) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults / numChildren < 1) {
      return false
    }

    this.numAdults += numAdults
    this.numChildren += numChildren
    return true
  }
}
// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
