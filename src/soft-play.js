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
    // console.log('checkNumbers', checkNumbers)
    // console.log('totalLeaving', totalLeaving)
    // console.log('totalLeft', totalLeft)
    if (numChildren > 0 && numAdults === 0) {
      console.log(`A child cannot leave without an adult`)
      return false
    } else if (checkNumbers.adults < checkNumbers.children) {
      console.log(`Too many adults laeving!`)
      return false
    } else if (totalLeaving > totalLeft) {
      console.log(`Too many people leaving the softplay!!!`)
      return false
    } else if (numAdults < numChildren) {
      console.log(`One adult can take One childrean at a time!`)
      return false
    } else this.adults -= numAdults
    this.children -= numChildren
    this.total = this.adults + this.children
    return true
  }

  occupancy() {
    const peopleInside = {
      adults: this.adults,
      children: this.children
    }
    return peopleInside
  }
}

const numOfPeople = new SoftPlay(0, 0)
console.log(numOfPeople.occupancy())

numOfPeople.enter(5, 5)
console.log(numOfPeople.occupancy())

numOfPeople.leave(2, 2)
console.log(numOfPeople.occupancy())

numOfPeople.leave(1, 1)
console.log(numOfPeople.occupancy())

numOfPeople.enter(5, 3)
console.log(numOfPeople.occupancy())

console.log(numOfPeople)

// TODO: Change the undefined value below to the name of your class
module.exports = undefined
