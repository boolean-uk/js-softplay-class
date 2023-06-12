// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren) {
    this.adults = numAdults
    this.children = numChildren
    this.totalAdults = numAdults
    this.totalChildren = numChildren
  }

  enter(numAdultsEntered, numChildrenEntered) {
    if (
      numChildrenEntered > numAdultsEntered ||
      numAdultsEntered <= 0 ||
      numChildrenEntered <= 0
    ) {
      return false
    }
    this.adults = numAdultsEntered
    this.children = numChildrenEntered
    this.totalAdults = numAdultsEntered
    this.totalChildren = numChildrenEntered
    return true
  }

  leave(numAdultsLeft, numChildrenLeft) {
    if (numAdultsLeft === 0) {
      return false
    } else if (this.adults - numAdultsLeft < this.children - numChildrenLeft) {
      return false
    } else if (numChildrenLeft > numAdultsLeft) {
      return false
    } else if (this.adults < numAdultsLeft || this.children < numChildrenLeft) {
      return false
    } else {
      this.adults -= numAdultsLeft
      this.children -= numChildrenLeft
      return true
    }
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
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
module.exports = Softplay
