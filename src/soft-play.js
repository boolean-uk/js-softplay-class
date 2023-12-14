// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay{
    constructor(numAdults, numChildren) {
        this.numAdults = numAdults
        this.numChildren = numChildren
    }
    
    occupancy() {
      return { adults: this.numAdults, children: this.numChildren }
    }
    
    // let totalAdults = 0
    // let totalChildren = 0
    // total() {
    //   return { adults: totalAdults, children: totalChildren }
    // }
    
    enter(numAdults, numChildren) {
      if (numAdults < numChildren) {
        return false
      }
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    }
    
    leave(numAdults, numChildren) {
      const futureAdults = this.numAdults - numAdults
      const futureChildren = this.numChildren - numChildren
      if (numAdults < numChildren || futureAdults < futureChildren || futureAdults < 0 || futureChildren < 0) {
        return false
      }
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
}


// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
