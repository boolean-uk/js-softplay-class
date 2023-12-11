// TODO: Create a class in this file to contain all of the logic for this exercise

class SoftPlay {
  constructor() {
    this.adults = 0
    this.children = 0
    this.totalAdults = 0
    this.totalChildren = 0
  }

  enter(numOfAdults, numOfChildren) {
    if (numOfChildren > numOfAdults) {
      return false
    } else {
      this.adults += numOfAdults
      this.children += numOfChildren
      this.totalAdults += numOfAdults
      this.totalChildren += numOfChildren
      return true
    }
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }

  leave(numOfAdults, numOfChildren) {
    this.adults -= numOfAdults
    this.children -= numOfChildren

    if (numOfAdults < numOfChildren || this.adults < this.children) {
      this.adults += numOfAdults
      this.children += numOfChildren
      return false
    } else {
      return true
    }
  }

  getTotals() {
    return {
      'Total Adults': this.totalAdults,
      'Total Children': this.totalChildren
    }
  }
}

const playZone = new SoftPlay()

console.log(playZone.occupancy())
console.log(playZone.enter(2, 1))
console.log(playZone.occupancy())
console.log(playZone.leave(1, 0))
console.log(playZone.occupancy())
console.log(playZone.enter(0, 1))
console.log(playZone.occupancy())
console.log(playZone.leave(1, 0))
console.log(playZone.occupancy())
console.log(playZone.leave(1, 1))
console.log(playZone.occupancy())

console.log(playZone.getTotals())

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
