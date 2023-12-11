// TODO: Create a class in this file to contain all of the logic for this exercise
// src/soft-play.js

// src/soft-play.js

class Softplay {
    constructor(numAdults, numChildren) {
      this.numAdults = numAdults;
      this.numChildren = numChildren;
    }
  
enter(numAdults, numChildren) {
    // Check conditions for entering
    if (numChildren > 0 && numAdults >= numChildren) {
    this.numAdults += numAdults;
    this.numChildren += numChildren;
    return true;
    } else {
    return false;
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
    this.numAdults -= numAdults;
    this.numChildren -= numChildren;
    return true;
    } else {
    return false;
    }
}

occupancy() {
    return {
    adults: this.numAdults,
    children: this.numChildren,
    };
}
}
  
  const sp = new Softplay(0, 0);
  
  console.log(sp.occupancy()); // { adults: 0, children: 0 }
  
  console.log(sp.enter(2, 1)); // true
  console.log(sp.occupancy()); // { adults: 2, children: 1 }
  
  console.log(sp.leave(1, 0)); // true
  console.log(sp.occupancy()); // { adults: 1, children: 1 }
  
  console.log(sp.enter(0, 1)); // false
  console.log(sp.occupancy()); // { adults: 1, children: 1 }
  
  console.log(sp.leave(1, 0)); // false
  console.log(sp.occupancy()); // { adults: 1, children: 1 }
  
  console.log(sp.leave(1, 1)); // true
  console.log(sp.occupancy()); // { adults: 0, children: 0 }
  

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay;
