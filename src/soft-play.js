// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren, minAdults) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.minAdults = minAdults
    this.currentTotal = { adults: 0, children: 0 }
  }

  enter(numAdults, numChildren) {
    if (numChildren > numAdults || numAdults < numChildren * this.minAdults) {
      return false
    } else {
      this.numAdults += numAdults
      this.numChildren += numChildren
      this.currentTotal.adults += numAdults
      this.currentTotal.children += numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (
      numChildren > numAdults ||
      numAdults < numChildren * this.minAdults ||
      this.numAdults - numAdults < this.numChildren - numChildren ||
      this.numAdults - numAdults <
        (this.numChildren - numChildren) * this.minAdults
    ) {
      return false
    } else {
      this.numAdults -= numAdults
      this.numChildren -= numChildren

      return true
    }
  }

  occupancy() {
    return { adults: this.numAdults, children: this.numChildren }
  }

  total() {
    return this.currentTotal
  }
}

class SoftPlayCentres {
  constructor() {
    this.softPlayCentresList = []
  }

  createSoftPlay(numAdults, numChildren, minAdults) {
    const softPlay = new Softplay(numAdults, numChildren, minAdults)
    this.softPlayCentresList.push(softPlay)
  }

  getAllSoftPlay() {
    return this.softPlayCentresList
  }

  getSoftPlayByIndex(index) {
    return this.softPlayCentresList[index]
  }
}

const spc = new SoftPlayCentres()
spc.createSoftPlay(0, 0, 1)
spc.createSoftPlay(0, 0, 2)
console.log(spc.getAllSoftPlay())

spc.getSoftPlayByIndex(0).enter(2, 1)
spc.getSoftPlayByIndex(0).leave(1, 0)
console.log(spc.getAllSoftPlay())

spc.getSoftPlayByIndex(1).enter(4, 1)
console.log(spc.getSoftPlayByIndex(1).occupancy())
spc.getSoftPlayByIndex(1).leave(2, 0)
console.log(spc.getSoftPlayByIndex(1).occupancy())
spc.getSoftPlayByIndex(1).leave(2, 1)
console.log(spc.getSoftPlayByIndex(1).occupancy())
console.log(spc.getSoftPlayByIndex(1).total())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
