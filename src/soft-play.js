// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
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
      return true
    }
    console.log('Child must be accompanied by an adult.')
    return false
  }

  leave(numAdults, numChildren) {
    const checkNumbers = {
      Adults: this.Adults - numAdults,
      Children: this.Children - numChildren
    }

    const totalLeaving = numAdults + numChildren
    const totalLeft = this.Total - totalLeaving

    if (numChildren > 0 && numAdults === 0) {
      console.log('Child cannot leave without an adult!')
      return false
    } else if (checkNumbers.Adults < checkNumbers.Children) {
      console.log('Too many adults leaving')
      return false
    } else if (totalLeaving > totalLeft && totalLeft !== 0) {
      console.log('Too many people leaving softplay centre!!')
      return false
    }
    this.Adults -= numAdults
    this.Children -= numChildren
    this.Total = this.Adults + this.Children
    return true
  }

  occupancy() {
    return {
      adults: this.Adults,
      children: this.Children
    }
  }
}

const softPlay1 = new Softplay(0, 0)
console.log(softPlay1.occupancy())

softPlay1.enter(2, 1)
console.log(softPlay1.occupancy())

softPlay1.leave(1, 0)
console.log(softPlay1.occupancy())

softPlay1.enter(0, 1)
console.log(softPlay1.occupancy())

softPlay1.leave(1, 0)
console.log(softPlay1.occupancy())

softPlay1.leave(1, 1)
console.log(softPlay1.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
