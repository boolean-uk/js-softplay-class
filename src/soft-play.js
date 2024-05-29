// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults = 0, numChildren = 0) {
    this.nAdults = numAdults
    this.nChildren = numChildren
  }

  enter(nAdults, nChildren) {
    // Every child entering the soft play center is accompanied by at least 1 adult.
    if (nAdults >= nChildren && nChildren >= 1) {
      this.nAdults += nAdults
      this.nChildren += nChildren
      //
      return true
    } else {
      // Cant enter without a child, or an adult
      return false
    }
  }

  leave(nAdults, nChildren) {
    /*
     * A child is not attempting to leave without an adult
     * The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
     * Every child leaving the soft play center is accompanied by at least 1 adult.
     * The number of adults and children attempting to leave is not greater than the number currently inside the center
     */
    const hasAnAdultLeavingWith = nAdults >= nChildren
    const hasAnAdultForEachChildInsideCenter =
      this.nAdults - nAdults >= this.nChildren - nChildren
    const peopleDontGrowOnTrees =
      this.nAdults + this.nChildren >= nAdults + nChildren

    if (
      hasAnAdultLeavingWith &&
      hasAnAdultForEachChildInsideCenter &&
      peopleDontGrowOnTrees
    ) {
      this.nAdults -= nAdults
      this.nChildren -= nChildren
      return true
    } else return false
  }

  occupancy() {
    return { adults: this.nAdults, children: this.nChildren }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
