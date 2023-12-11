/* eslint-disable prettier/prettier */
// TODO: Create a class in this file to contain all of the logic for this exercise

class SoftPlay {
  constructor(numAdults, numChildren) {
    this.Adults = numAdults
    this.Children = numChildren
    this.Total = this.Adults + this.Children
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.Adults += numAdults
      this.Children += numChildren
      this.Total = this.Adults + this.Children
    } else return console.log('Child must be accompanied by an adult.')
  }

  leave(numAdults, numChildren) {
    const checkNumbers = {
      Adults: this.Adults - numAdults,
      Children: this.Children - numChildren
    }

    const totalLeaving = numAdults + numChildren
    const totalLeft = this.Total - totalLeaving
    console.log('checkNumbers', checkNumbers, 'total leaving:', totalLeaving)

    if (numChildren > 0 && numAdults === 0) {
      return console.log('Child cannot leave without an adult!')
    } else if (checkNumbers.Adults < checkNumbers.Children) {
      return console.log('Too many adults leaving')
    } else if (totalLeaving > totalLeft) {
      return console.log('Too many people leaving softplay centre!!')
    } else 
    this.Adults -= numAdults
    this.Children -= numChildren
    this.Total = this.Adults + this.Children
  }
}

const softPlay1 = new SoftPlay(0, 0)
softPlay1.enter(10, 10)
softPlay1.leave(8, 8)
console.log(softPlay1)

// TODO: Change the undefined value below to the name of your class
module.exports = undefined
