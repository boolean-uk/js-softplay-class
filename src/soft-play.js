// TODO: Create a class in this file to contain all of the logic for this exercise
class SoftPlay {
    constructor(adults, children) {
        this.adults = adults
        this.children = children
    }

    occupancy() {
        const object = {
            adults: this.adults,
            children: this.children
        }
        return object
    }

    enter(numAdults, numChildren) {
        const updateAdults = this.adults + numAdults
        const updateChildren = this.children + numChildren

        if (numAdults < numChildren) {
            return false
        } else {
            this.adults = updateAdults
            this.children = updateChildren
            return true
        }
    }

    leave(numAdults, numChildren) {
        const updatedAdults = this.adults - numAdults
        const updatedChildren = this.children - numChildren
        if (numAdults < numChildren || numAdults > this.adults || updatedAdults < updatedChildren) {
            return false
        }
        else {
            this.adults = updatedAdults
            this.children = updatedChildren
            return true
        }
    }

    total(numAdults, numChildren) {
        const totalA = this.adults + numAdults
        const totalB = this.children + numChildren
        const totalObj = {
            audlts: totalA,
            children: totalB
        }
        return totalObj
    }
}

// TODO: Change the undefined value below to the name of your class
module.exports = SoftPlay
