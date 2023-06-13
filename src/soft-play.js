// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  // Every child entering the soft play center is accompanied by at least 1 adult.
  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      // `numAdults` and `numChildren` should be added to the current totals.
      this.numAdults = numAdults
      this.numChildren = numChildren

      // the method should return `true`
      return true
    } else {
      // If any of these checks fail, the method should return `false`.
      return false
    }
  }

  leave(numAdults, numChildren) {
    // A child is not attempting to leave without an adult
    if (numChildren > numAdults) {
      return false
      //   The number of adults and children left inside the center will not cause there to be more children than adults (there must be at least 1 adult for 1 child inside the center at all times)
    } else if (this.numChildren >= this.numAdults) {
      if (numAdults === numChildren) {
        this.numAdults = this.numAdults - numAdults
        this.numChildren = this.numChildren - numChildren

        return true
      }

      return false

      //   The number of adults and children attempting to leave is not greater than the number currently inside the center
    } else if (numAdults > this.numAdults || numChildren > this.numChildren) {
      return false
    } else {
      // console.log(this.numAdults, this.numChildren)
      // console.log(numAdults, numChildren)
      this.numAdults = this.numAdults - numAdults
      this.numChildren = this.numChildren - numChildren

      return true
    }
  }

  // This method should return an object with two keys - `adults` should contain the number of adults currently inside the soft play center and `children` the number of children.
  occupancy() {
    const obj = {
      adults: this.numAdults,
      children: this.numChildren
    }
    return obj
  }
}

const people = new Softplay(0, 0)
console.log(
  people.enter(2, 2),
  people.occupancy(),
  people.leave(2, 2),
  people.occupancy()
)

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
