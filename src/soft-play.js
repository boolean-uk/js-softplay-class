// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }

  enter(numAdults, numChildren) {
    if (numAdults === 0 && numChildren > 0) {
      return false
    } else {
      return true
    }
  }
}

const sp = new Softplay(0, 0)
// console.log(sp)
// console.log(sp.enter())
const test = sp.occupancy()
console.log(test)

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
