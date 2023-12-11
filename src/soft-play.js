/* eslint-disable prettier/prettier */
// TODO: Create a class in this file to contain all of the logic for this exercise

class SoftPlay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdult, numChildren) {
    if (numAdult >= numChildren) {
      this.numAdults += numAdult
      this.numChildren += numChildren
    } else return console.log('Child must be accompanied by an adult.')
  }
}

const softPlay1 = new SoftPlay(0, 0)

softPlay1.enter(1,1)

console.log(softPlay1)


// TODO: Change the undefined value below to the name of your class
module.exports = undefined
