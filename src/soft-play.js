// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlay {
  constructor() {
    this.numOfAdults = 0
    this.numOfChildren = 0
    this.totalNumOfAdults = 0
    this.totalNumOfChildren = 0
  }

  enter(newAdults, newChildren) {
    if (newAdults >= newChildren) {
      this.numOfAdults += newAdults
      this.numOfChildren += newChildren
      this.totalNumOfAdults += newAdults
      this.totalNumOfChildren += newChildren
      return true
    }
    return false
  }

  leave(newAdults, newChildren) {
    if (
      newChildren > newAdults ||
      this.numOfAdults - newAdults < this.numOfChildren - newChildren
    ) {
      return false
    }
    this.numOfAdults -= newAdults
    this.numOfChildren -= newChildren
    return true
  }

  occupancy() {
    return {
      adults: this.numOfAdults,
      children: this.numOfChildren
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
