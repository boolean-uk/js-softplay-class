// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlay {
  constructor(adults, children) {
    this.adults = adults
    this.children = children
    this.entranceRatio = '1:1'
    this.occupancyRatio = '1:1'
  }

  enter(numAdults, numChildren) {
    const ratio = this.entranceRatio.split(':')
    const isAdultForEachChild =
      numAdults / Number(ratio[0]) >= numChildren / Number(ratio[1])
    if (!isAdultForEachChild) {
      return false
    }

    this.adults += numAdults
    this.children += numChildren
    return true
  }

  leave(numAdults, numChildren) {
    const ratio = this.occupancyRatio.split(':')
    const isAdult = numAdults > 0
    const isEnoughPeople =
      numAdults <= this.adults && numChildren <= this.children
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
    return true
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
