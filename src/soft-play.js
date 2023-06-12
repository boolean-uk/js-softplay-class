class Softplay {
  constructor(numAdults, numChildren) {
    this.Adults = numAdults
    this.Children = numChildren
    this.totalIn = {
      adults: 0,
      children: 0
    }
  }

  occupancy() {
    return {
      adults: this.Adults,
      children: this.Children
    }
  }

  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    } else {
      this.Adults += numAdults
      this.Children += numChildren
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (numChildren > this.Children || numAdults > this.Adults) {
      return false
    } else if (numChildren > numAdults) {
      return false
    } else if (this.Adults - numAdults < this.Children - numChildren) {
      return false
    } else {
      this.Adults -= numAdults
      this.Children -= numChildren
      return true
    }
  }

  total(numAdults, numChildren) {
    this.totalIn.adults += numAdults
    this.totalIn.children += numChildren
    return this.totalIn
  }
}
module.exports = Softplay
