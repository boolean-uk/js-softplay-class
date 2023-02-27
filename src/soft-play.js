// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlayCount {
  // Think of this as values that change, like a let variable
  constructor(adults, children) {
    this.adults = adults
    this.children = children
  }

  occupancy() {
    return { adults: this.adults, children: this.children }
  }

  enter(numAdults, numChildren) {
    if (numChildren > numAdults) {
      return false
    } else if (numAdults >= numChildren) {
      this.children += numChildren
      this.adults += numAdults

      //   totalChildren += numChildren
      //   totalAdults += numAdults
      return true
    }
  }

  /* function occupancy() {
        const occupants = { adults: 0, children: 0 }
      
        occupants.adults = adults
        occupants.children = children
      
        return occupants
      } */
}

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlayCount
