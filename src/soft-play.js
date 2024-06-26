class Softplay {
    constructor(adults = 0, children = 0) {
      this.adults = adults;
      this.children = children;
    }
  
    occupancy() {
      return { adults: this.adults, children: this.children };
    }
  
    enter(adults, children) {
      if (adults >= children && adults > 0) {
        this.adults += adults;
        this.children += children;
        return true;
      }
      return false;
    }
  
    leave(adults, children) {
      if (adults > this.adults || children > this.children) {
        return false;
      }
  
      if (children > 0 && adults === 0) {
        return false;
      }
  
      if ((this.adults - adults) < (this.children - children)) {
        return false;
      }
  
      if (children > adults) {
        return false;
      }
      
      this.adults -= adults;
      this.children -= children;
      return true;
    }
  }
  
  module.exports = Softplay;
  