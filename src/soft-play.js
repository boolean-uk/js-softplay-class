// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  occupancy() {
    return { adults: this.numAdults, children: this.numChildren }
  }

  enter(numAdults, numChildren) {
    if (numChildren <= numAdults) {
      this.numAdults = numAdults
      this.numChildren = numChildren
      return true
    } else {
      return false
    }
  }
}

const sp = new Softplay(0, 0)
sp.enter(2, 1)
console.log(sp)

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
