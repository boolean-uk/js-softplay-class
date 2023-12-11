// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.numAdults += numAdults
      this.numChildren += numChildren
    } else return console.log(`Child must be accompanied by and adult`)
  }
}

const numOfPeople = new SoftPlay(0, 0)

numOfPeople.enter(1, 3)

console.log(numOfPeople)

// TODO: Change the undefined value below to the name of your class
module.exports = undefined
