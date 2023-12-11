// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
    constructor(numAdults, numChildren) {
        this.numAdults = numAdults
        this.numChildren = numChildren
    }
  
enter(numAdults, numChildren) {
    // Check conditions for entering
    if (numChildren > 0 && numAdults >= numChildren) {
        this.numAdults += numAdults
        this.numChildren += numChildren
        return true
        } else {
        return false
        }
    }

leave(numAdults, numChildren) {
    // Check conditions for leaving
    if (
    numChildren > 0 &&
    numAdults >= numChildren &&
    this.numAdults >= numAdults &&
    this.numChildren >= numChildren
    ) {
    this.numAdults -= numAdults
    this.numChildren -= numChildren
    return true
    } else {
    return false
    }
}

occupancy() {
    return {
    adults: this.numAdults,
    children: this.numChildren,
    };
}
}
  
  const sp = new Softplay(0, 0)
  
  console.log(sp.occupancy())
  
  console.log(sp.enter(2, 1)) 
  console.log(sp.occupancy()) 
  
  console.log(sp.leave(1, 0))
  console.log(sp.occupancy()) 
  
  console.log(sp.enter(0, 1))
  console.log(sp.occupancy()) 
  
  console.log(sp.leave(1, 0)) 
  console.log(sp.occupancy()) 
  
  console.log(sp.leave(1, 1))
  console.log(sp.occupancy()) 
  

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay;
