// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.total = {
      adults: this.numAdults,
      children: this.numChildren
    }
  }

  enter(adultsIn, childrenIn) {
    if (adultsIn >= childrenIn) {
      this.numAdults += adultsIn
      this.numChildren += childrenIn
      return true
    } else {
      return false
    }
  }

  leave(adultsOut, childrenOut) {
    const remainingAdults = this.numAdults - adultsOut
    const remainingChildren = this.numChildren - childrenOut
    if (remainingAdults < remainingChildren || adultsOut < childrenOut) {
      return false
    } else {
      this.numAdults -= adultsOut
      this.numChildren -= childrenOut
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

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
