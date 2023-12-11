// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren) {
    this.currentTotals = {
      adults: 0,
      children: 0
    }
    this.overallTotals = this.currentTotals
  };

  changeOccupancy(adultsOrChildren, difference) {
    this.currentTotals = {
      ...this.currentTotals,
      [adultsOrChildren]: this.currentTotals[adultsOrChildren] + difference
    }
    this.overallTotals = {
      ...this.overallTotals,
      [adultsOrChildren]: this.overallTotals[adultsOrChildren] + difference
    }
  };

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.changeOccupancy("adults", numAdults)
      this.changeOccupancy("children", numChildren)
      return true
    } else {
      return false
    }
  };

  leave(numAdults, numChildren) {
    const currentState = this.occupancy()
    const simulatedState = {
      adults: currentState.adults - numAdults,
      children: currentState.children - numChildren
    }

    if (numAdults >= numChildren &&
      simulatedState.adults >= simulatedState.children &&
      simulatedState.adults >= 0 &&
      simulatedState.children >= 0) {
        this.changeOccupancy("adults", -numAdults)
        this.changeOccupancy("children", -numChildren)
        return true
    } else {
      return false
    }
  }

  occupancy() {
    return this.currentTotals
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
