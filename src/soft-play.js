class SoftPlay {
  constructor(numAdult, numChild) {
    this.adultPop = numAdult
    this.childPop = numChild
    this.totalAdultPop = numAdult
    this.totalChildPop = numChild
  }

  enter(numAdult, numChild) {
    const loneEnteringChild = numChild > numAdult
    if (!loneEnteringChild) {
      this.totalAdultPop = this.adultPop += numAdult
      this.totalChildPop = this.childPop += numChild
    }
    return !loneEnteringChild
  }

  leave(numAdult, numChild) {
    const newAdultPop = this.adultPop - numAdult
    const newChildPop = this.childPop - numChild

    const loneLeavingChild = numChild > numAdult
    const childLeftBehind = newChildPop > newAdultPop
    const ghostPeople = newAdultPop < 0 && newChildPop < 0

    const STOP_THIS_AINT_RIGHT =
      loneLeavingChild || childLeftBehind || ghostPeople

    if (!STOP_THIS_AINT_RIGHT) {
      this.adultPop = newAdultPop
      this.childPop = newChildPop
    }

    return !STOP_THIS_AINT_RIGHT
  }

  occupancy() {
    return {
      adults: this.adultPop,
      children: this.childPop
    }
  }

  total() {
    return {
      adults: this.totalAdultPop,
      children: this.totalChildPop
    }
  }
}

module.exports = SoftPlay
