// TODO: Create a class in this file to contain all of the logic for this exercise

// TODO: Change the undefined value below to the name of your class

class Softplay {
  constructor(numAdults, numChildren) {
    //this.numAdults = numAdults
    //this.numChildren = numChildren
    this.numAdults = 0
    this.numChildren = 0
    this.totalAdults = 0
    this.totalChildren = 0
  }

  enter(numAdults, numChildren) {
    // Check if every child is accompanied by at least 1 adult
    if (numChildren > 0 && numAdults < numChildren) {
      return false
    }

    // Update the totals
    this.numAdults += numAdults
    this.numChildren += numChildren
    this.totalAdults += numAdults
    this.totalChildren += numChildren

    return true
  }

  // leave(numAdults, numChildren)

  leave(numAdults, numChildren) {
    if (numChildren > 0 && numAdults === 0) {
      return false
    }

    if (this.numAdults - numAdults < this.numChildren - numChildren) {
      return false
    }

    if (numChildren > 0 && numAdults < numChildren) {
      return false
    }

    if (numAdults > this.numAdults || numChildren > this.numChildren) {
      return false
    }

    this.numAdults -= numAdults
    this.numChildren -= numChildren

    return true
  }
  /*
  getCounts() {
    return {
      numAdults: this.numAdults,
      numChildren: this.numChildren
    }
  }
}
*/
occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren,
    }
  }
}


const sp = new Softplay(0, 0);

console.log(sp.occupancy()) // { adults: 0, children: 0 }


console.log(sp.enter(2, 1)) // true
console.log(sp.occupancy()) // { adults: 2, children: 1 }


console.log(sp.leave(1, 0)) // true
console.log(sp.occupancy()) // { adults: 1, children: 1 }


console.log(sp.enter(0, 1)) // false
console.log(sp.occupancy()) // { adults: 1, children: 1 }


console.log(sp.leave(1, 0)) // false
console.log(sp.occupancy()) // { adults: 1, children: 1 }


console.log(sp.leave(1, 1)) // true
console.log(sp.occupancy()) // { adults: 0, children: 0 }


module.exports = Softplay 