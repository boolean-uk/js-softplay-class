// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(adults, children) {
    this.adults = adults
    this.children = children
  }

  occupancy() {
    return {adults: this.adults, children: this.children}
  }

  enter(adults, children) {

    if (adults < children) {
      return false
    }

    else {
      this.adults += adults
      this.children += children
      return true
    }
  }

  leave(adults, children) {

    this.adults -= adults
    this.children -= children

    if (adults < children || this.children > this.adults) {
      this.adults += adults
      this.children += children
      return false
    }

    else {
      return true
    }
  }
}

const sp = new Softplay(2, 2)

console.log(sp.occupancy())

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
