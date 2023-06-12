// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
    constructor(numAdults, numChildren) {
      this.numAdults = numAdults
      this.numChildren = numChildren
    }
  
    occupancy() {
      return { adults: this.numAdults, children: this.numChildren }
    }
  
    enter(numAdults, numChildren) {
      if (numAdults >= numChildren) {
        this.numAdults += numAdults
        this.numChildren += numChildren
        return true
      } else {
        return false
      }
    }
  
    leave(numAdults, numChildren) {
      if (numChildren > numAdults) {
        return false
      } else if (this.numAdults - numAdults < this.numChildren - numChildren) {
        return false
      } else if (numAdults === 0 && numChildren > 1) {
        return false
      } else if (numAdults > this.numAdults || numChildren > this.numChildren) {
        return false
      } else {
        this.numAdults -= numAdults
        this.numChildren -= numChildren
        return true
      }
    }
  }
  
  const sp = new Softplay(0, 0)

  // TODO: Change the undefined value below to the name of your class
  module.exports = Softplay