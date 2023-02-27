// TODO: Write your class in this file
class SoftPlay {
    constructor (adults, children) {
      this.adults = adults
      this.children = children
    }
  
    occupancy () {
      const object ={
        adults:this.adults,
       children: this.children
      }
      return object
    }
  
    enter (numAdults, numChildren) {
      const updateAdults = this.adults + numAdults
      const updateChildren = this.children + numChildren
      if (numAdults < numChildren) {

        return false
      } else {
        this.adults = updateAdults
        this.children = updateChildren
        return true
      }
    }
  
    leave (numAdults, numChildren) {
      const updateAdults = this.adults - numAdults
      const updateChildren = this.children - numChildren
      if (numAdults < numChildren || numAdults > this.adults || updateAdults < updateChildren) {
        return false
      } else {
        this.adults = updateAdults
        this.children = updateChildren
        return true
      }
    }
  }
  
  // TODO: Change undefined to the name of your class
  module.exports = SoftPlay
  