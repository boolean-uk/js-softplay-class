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

class SoftPlayMulti {
  // this turned out to be an icky idea, probably better idea is the `extends` keyword?
  constructor(centerName, numAdult, numChild) {
    this.centerStats = {}
    this.addCenter(centerName, numAdult, numChild)
  }

  addCenter(centerName, numAdult, numChild) {
    this.centerStats[centerName] = {
      adultPop: numAdult,
      childPop: numChild
    }
  }

  removeCenter(centerName) {
    delete this.centerStats[centerName]
  }

  grandTotal() {
    return Object.values(this.centerStats).reduce(
      (a, b) => {
        return {
          adults: a.adults + b.adultPop,
          children: a.children + b.childPop
        }
      },
      { adults: 0, children: 0 }
    )
  }
}

const spm = new SoftPlayMulti('denver', 2, 2)
spm.addCenter('london', 3, 36)
spm.addCenter('tokyo', 2, 12)

const bigTotal = spm.grandTotal()

module.exports = SoftPlay
