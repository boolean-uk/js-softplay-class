// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
  constructor(numOfAdults, numOfChildren) {
    this.numOfAdults = numOfAdults
    this.numOfChildren = numOfChildren
  }

  enter(numOfAdults, numOfChildren) {
    if (numOfAdults >= numOfChildren) {
      this.numOfAdults += numOfAdults
      this.numOfChildren += numOfChildren
      return true
    } else return false
  }

  leave(numOfAdults, numOfChildren) {
    if (
      numOfAdults > this.numOfAdults ||
      numOfChildren > this.numOfChildren || numOfChildren > numOfAdults ||
      this.numOfChildren - numOfChildren > this.numOfAdults - numOfAdults
    ) {
        return false
    } 

    this.numOfAdults -= numOfAdults
    this.numOfChildren -= numOfChildren
    return true
  }

  occupancy() {
    return {
      adults: this.numOfAdults,
      children: this.numOfChildren
    }
  }
}

const softPlay = new Softplay(0, 0)
console.log('Enter', softPlay.enter(2, 1))
console.log('---------------')
console.log('Occupancy', softPlay.occupancy())
console.log('---------------')
console.log('Leave', softPlay.leave(1, 1))

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
