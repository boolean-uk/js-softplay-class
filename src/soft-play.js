// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {

  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren

    this.totalNumAdults += numAdults
    this.totalNumChildren += numChildren
  }

  /**
   * @brief Checks in customers into softplay, if valid
   * @param {Number} numAdults The number of adults entering
   * @param {Number} numChildren The number of children entering
   * @returns {Boolean} Boolean based on whether the people are allowed to enter
   * @exception OutOfBounds exception on negative numAdults or numChildren
   */
  enter(numAdults, numChildren) {
    if (numAdults < numChildren) {
      return false
    }
    this.numAdults += numAdults
    this.numChildren += numChildren

    this.totalNumAdults += numAdults
    this.totalNumChildren += numChildren

    return true
  }

  leave(numAdults, numChildren) {
    const postNumAdults = this.numAdults - numAdults
    const postNumChildren = this.numChildren - numChildren

    if (postNumAdults < 0 || postNumChildren < 0) {
      return false
    }

    if (numAdults < numChildren) {
      return false
    }

    if (postNumAdults < postNumChildren) {
      return false
    }
    this.numAdults = postNumAdults
    this.numChildren = postNumChildren
    return true
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }

  total() {
    return {
      adults: this.totalNumAdults,
      children: this.totalNumChildren
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
