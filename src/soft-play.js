// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren, totalNumChildren, totalNumAdults) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.totalNumChildren = totalNumChildren
    this.totalNumAdults = totalNumAdults
  }

  enter(numAdultsEntering, numChildrenEntering) {
    if (numAdultsEntering < numChildrenEntering) {
      return false
    }

    this.numAdults += numAdultsEntering
    this.numChildren += numChildrenEntering
    this.totalNumChildren += numChildrenEntering
    this.totalNumAdults += numAdultsEntering
    return true
  }

  leave(numAdultsLeaving, numChildrenLeaving) {
    if (numAdultsLeaving < numChildrenLeaving) {
      return false
    }
    if (numAdultsLeaving > this.numAdults) {
      return false
    }
    if (numChildrenLeaving > this.numChildren) {
      return false
    }
    if (
      this.numChildren - numChildrenLeaving >
      this.numAdults - numAdultsLeaving
    ) {
      return false
    }
    this.numAdults -= numAdultsLeaving
    this.numChildren -= numChildrenLeaving
    return true
  }

  occupancy() {
    return { adults: this.numAdults, children: this.numChildren }
  }

  total() {
    return {
      totalNumAdults: this.totalNumAdults,
      totalNumChildren: this.totalNumChildren
    }
  }
}

const sp = new Softplay(0, 0, 0, 0)
sp.enter(2, 2)
sp.leave(1, 1)
console.log(sp.total())
// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
