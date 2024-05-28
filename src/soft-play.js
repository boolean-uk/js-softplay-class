// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    } else return false
  }

  leave(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      if (
        this.numAdults - numAdults >= this.numChildren - numChildren &&
        this.numAdults - numAdults >= 0 &&
        this.numChildren - numChildren >= 0
      ) {
        this.numAdults -= numAdults
        this.numChildren -= numChildren
        console.log('test')
        return true
      }
    }
    return false
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

const softPlay = new Softplay(0, 0)
softPlay.enter(1, 1)
softPlay.leave(1, 0)
// softPlay.leave(2, 2)
console.log(softPlay.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
