/* eslint-disable prettier/prettier */
// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
 
  constructor(numAdults, numChildren, adultsRequiredPerChild) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.totalAdults = 0
    this.totalChildren = 0
    this.adultsRequiredPerChild = adultsRequiredPerChild
  }

  enter(numAdults, numChildren) {
    if ((numAdults / this.adultsRequiredPerChild) < numChildren) {
      return false
    }
    this.numAdults += numAdults
    this.numChildren += numChildren
    this.totalAdults += numAdults
    this.totalChildren += numChildren
    return true
  }

  leave(numAdults, numChildren) {
    if (
      !numAdults ||
      (this.numAdults - numAdults) / this.adultsRequiredPerChild < this.numChildren - numChildren ||
      numChildren > (numAdults / this.adultsRequiredPerChild)||
      this.numAdults - numAdults < 0 ||
      this.numChildren - numChildren < 0
    ) {
      return false
    }
    this.numAdults -= numAdults
    this.numChildren -= numChildren
    return true
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

const sheffield = new Softplay(0, 0, 3)
console.log(sheffield.enter(15, 4))
console.log(sheffield.leave(3, 0))


// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
