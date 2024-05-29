// TODO: Create a class in this file to contain all of the logic for this exercise

class SoftPlay {
  constructor(numAdults = 0, numChildren = 0) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.totalAdults = 0
    this.totalChildren = 0
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.numAdults += numAdults
      this.numChildren += numChildren

      this.totalAdults += numAdults
      this.totalChildren += numChildren
      return true
    }
    return false
  }

  canLeave(numAdults, numChildren) {
    const isChildNotLeavingAlone = numAdults >= numChildren
    const areChildrenNotLessThanAdults =
      this.numAdults - numAdults >= this.numChildren - numChildren
    const areAdultsLeavingNotMoreThanAdultsInside = numAdults <= this.numAdults
    const areChildrenLeavingNotMoreThanChildrenInside =
      numChildren <= this.numChildren

    return (
      isChildNotLeavingAlone &&
      areChildrenNotLessThanAdults &&
      areAdultsLeavingNotMoreThanAdultsInside &&
      areChildrenLeavingNotMoreThanChildrenInside
    )
  }

  leave(numAdults, numChildren) {
    if (this.canLeave(numAdults, numChildren)) {
      this.numAdults -= numAdults
      this.numChildren -= numChildren

      return true
    }
    return false
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }

  total() {
    return {
      adults: this.totalAdults,
      children: this.totalChildren
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
