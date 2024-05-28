// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlay {
  constructor(adults, children) {
    this.adults = adults
    this.children = children
  }

  enter(numAdults, numChildren) {
    const isAdultForEachChild = numAdults >= numChildren
    if (!isAdultForEachChild) {
      return false
    }

    this.adults += numAdults
    this.children += numChildren
    return true
  }

  leave(numAdults, numChildren) {
    const isAdult = numAdults > 0
    const isEnoughPeople =
      numAdults >= this.adults && numChildren >= this.children
    const isAdultForEachChild = numAdults >= numChildren
    const isMaintainingCentreRatio =
      this.adults - numAdults >= this.children - numChildren

    const isValid =
      isAdult &&
      isEnoughPeople &&
      isAdultForEachChild &&
      isMaintainingCentreRatio

    if (!isValid) {
      return false
    }

    this.adults -= numAdults
    this.children -= numChildren
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
