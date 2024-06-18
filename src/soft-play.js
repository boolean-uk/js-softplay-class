class Softplay {
    constructor(numAdults, numChildren) {
      this.adults = numAdults;
      this.children = numChildren;
    }
  
    enter(numAdults, numChildren) {
      if (numAdults < 1 || numAdults < numChildren) {
        return false;
      }
      this.adults += numAdults;
      this.children += numChildren;
      return true;
    }
  
    leave(numAdults, numChildren) {
      if (
        numAdults < 1 ||
        numAdults < numChildren ||
        numAdults > this.adults ||
        numChildren > this.children ||
        (this.children - numChildren > 0 && this.adults - numAdults === 0) ||
        (this.children - numChildren > this.adults - numAdults)
      ) {
        return false;
      }
      this.adults -= numAdults;
      this.children -= numChildren;
      return true;
    }
  
    occupancy() {
      return {
        adults: this.adults,
        children: this.children
      };
    }
  }
  
  module.exports = Softplay;