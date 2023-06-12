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
      if (numAdults >= numChildren) {
        this.numAdults += numAdults
        this.numChildren += numChildren
        return true
      } else {
        return false
      }
    }
  
    leave(numAdults, numChildren) {
      
    }
  }
  
  const sp = new Softplay(0, 0)
  console.log(sp)
  console.log(sp.enter(2, 2))
  console.log(sp)
  console.log(sp.enter(2, 2))
  console.log(sp)
  console.log(sp.occupancy())
  console.log(sp.enter(2, 2))
  console.log(sp.occupancy())
  console.log(sp.enter(1, 2))
  console.log(sp.occupancy())
  // TODO: Change the undefined value below to the name of your class
  module.exports = undefined