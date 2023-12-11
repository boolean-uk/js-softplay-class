// TODO: Create a class in this file to contain all of the logic for this exercise

// TODO: Change the undefined value below to the name of your class

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    // Check if every child is accompanied by at least 1 adult
    if (numChildren > 0 && numAdults < numChildren) {
      return false
    }

    // Update the totals
    this.numAdults += numAdults
    this.numChildren += numChildren

    return true
  }

  getCounts() {
    return {
      numAdults: this.numAdults,
      numChildren: this.numChildren
    }
  }
}

const softplayCenter = new Softplay(2, 5)

console.log(softplayCenter.enter(3, 2)) // true (3 adults and 2 children entering)
console.log(softplayCenter.getCounts()) // { numAdults: 5, numChildren: 7 }

console.log(softplayCenter.enter(1, 3)) // false (not enough adults for 3 children)
console.log(softplayCenter.getCounts()) // { numAdults: 5, numChildren: 7 }

module.exports = Softplay