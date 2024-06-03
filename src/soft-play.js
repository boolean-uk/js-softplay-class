// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
    constructor(numAdults, numChildren) {
        this.numAdults = numAdults
        this.numChildren = numChildren
    }

    enter(numAdults, numChildren) {
        if (numChildren > 0 && numAdults < numChildren) {
            return false // At least one adult per child must enter.
        }

        this.numAdults += numAdults;
        this.numChildren += numChildren;
        return true
    }

    leave(numAdults, numChildren) {
        if (numChildren > numAdults) {
            return false // Each child leaving must be accompanied by an adult
        }
        if (this.numAdults < numAdults || this.numChildren < numChildren) {
            return false // Cannot leave if more adults/children than inside
        }
        if ((this.numAdults - numAdults) < (this.numChildren - numChildren)) {
            return false // Must not leave more children than adults behind.
        }

        this.numAdults -= numAdults
        this.numChildren -= numChildren
        return true
    }

    occupancy() {
        return {
            adults: this.numAdults,
            children: this.numChildren
        }
    }
}


// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
