// // Softplay class to maintain count of adults and children in a soft play center
class Softplay {
  // Constructor initializes the initial state of adults and children
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  // Method to register entry of adults and children
  enter(numAdults, numChildren) {
    // Condition: Every child must be accompanied by at least 1 adult
    if (numChildren > numAdults) {
      return false // If condition fails
    }
    // Update the totals
    this.numAdults += numAdults
    this.numChildren += numChildren
    return true // If condiitons are met
  }

  // Method to register exit of adults and cildren
  leave(numAdults, numChildren) {
    // Conditions:
    // 1. A child cannot leave without an adult
    // 2. The remaining adults must be at least equal to the remaining children
    // 3. Every child leaving must be accompanied by at least 1 adult
    // 4. The number leaving must not exceed the number inside
    if (
      numChildren > numAdults ||
      this.numChildren < numChildren ||
      this.numAdults < numAdults ||
      this.numAdults - numAdults < this.numChildren - numChildren
    ) {
      return false // If condition fails
    }
    // Update Totals
    this.numAdults -= numAdults
    this.numChildren -= numChildren
    return true // If conditions are met
  }

  // Method to return current occupancy
  occupancy() {
    return {
      adults: this.numAdults, // Current tally of adults
      children: this.numChildren // Current tally of children
    }
  }
}

const sp = new Softplay(0, 0) // Initialize with 0 adults and 0 children
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
