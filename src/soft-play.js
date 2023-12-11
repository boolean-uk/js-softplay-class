// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlay {
  constructor(numAdults, numChildren) {
    this.adults = numAdults
    this.children = numChildren
    this.total = this.adults + this.children
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.adults += numAdults
      this.children += numChildren
      this.total = this.adults + this.children

      return true
    } else console.log(`Child must be accompanied by an adult`)
    return false
  }

  leave(numAdults, numChildren) {
    const checkNumbers = {
      adults: this.adults - numAdults,
      children: this.children - numChildren
    }
    const totalLeaving = numAdults + numChildren
    const totalLeft = this.total - totalLeaving
    console.log('checkNumbers', checkNumbers)
    console.log('totalLeaving', totalLeaving)
    console.log('totalLeft', totalLeft)
  }
}

const numOfPeople = new SoftPlay(0, 0)

numOfPeople.enter(4, 3)

numOfPeople.leave(1, 1)
console.log(numOfPeople)

// TODO: Change the undefined value below to the name of your class
module.exports = undefined
