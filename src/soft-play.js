// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.adults = numAdults
    this.children = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    } else {
      this.adults += numAdults
      this.children += numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    // first if statement checks that at every child has at least one adult leaving and that the numbers leaving is not greater than the current occupancy
    if (
      numAdults < numChildren ||
      numAdults > this.adults ||
      numChildren > this.children
    ) {
      return false
    } else {
      const checkAdults = this.adults - numAdults
      const checkChildren = this.children - numChildren
      //   check to see if the number of required adults (1 per child minimum)
      if (checkAdults < checkChildren) {
        return false
      } else {
        this.adults = checkAdults
        this.children = checkChildren
        return true
      }
    }
  }

  occupancy() {
    return { adults: this.adults, children: this.children }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
