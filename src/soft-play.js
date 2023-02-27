class SoftPlayCount {
  // Think of this as values that change, like a let variable
  constructor(adults, children) {
    this.adults = adults
    this.children = children
  }

  occupancy() {
    return { adults: this.adults, children: this.children }
  }

  enter(numAdults, numChildren) {
    if (numChildren > numAdults) {
      return false
    } else if (numAdults >= numChildren) {
      this.children += numChildren
      this.adults += numAdults
      return true
    }
  }

  leave(numAdults, numChildren) {
    if (numChildren > numAdults) {
      return false
    } else if (numAdults === 0) {
      return false
    } else if (numAdults + numChildren > this.adults + this.children) {
      return false
    } else if (this.adults - numAdults < this.children - numChildren) {
      return false
    } else {
      this.adults -= numAdults
      this.children -= numChildren
      return true
    }
  }
}

module.exports = SoftPlayCount
