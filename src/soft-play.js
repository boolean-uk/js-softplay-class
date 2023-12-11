// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
    this.currentTotal = 0
  }

  enter(numAdults, numChildren) {
    if (numChildren > numAdults || numAdults < numChildren) {
      return false
    } else {
      this.numAdults += numAdults
      this.numChildren += numChildren
      this.currentTotal += numAdults + numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (
      numChildren > numAdults ||
      numAdults < numChildren ||
      this.numAdults - numAdults < this.numChildren - numChildren ||
      this.numAdults - numAdults < this.numChildren - numChildren
    ) {
      return false
    } else {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      this.currentTotal -= numAdults + numChildren

      return true
    }
  }

  occupancy() {
    return { adults: this.numAdults, children: this.numChildren }
  }

  total() {
    return { total: this.currentTotal }
  }
}

class SoftPlayCentres {
  constructor() {
    this.softPlayCentresList = []
  }

  createSoftPlay(numAdults, numChildren) {
    const softPlay = new Softplay(numAdults, numChildren)
    this.softPlayCentresList.push(softPlay)
  }

  getAllSoftPlay() {
    return this.softPlayCentresList
  }

  getSoftPlayByIndex(index) {
    return this.softPlayCentresList[index]
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
