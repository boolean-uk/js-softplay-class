// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
    constructor(adults, children) {
        this.adults = adults
        this.children = children
    }

    occupancy(adults, children) {
        return {
            adults: this.adults,
            children: this.children
        }
    }

    //allowed to enter or not:
    enter(numAdults, numChildren) {
        if (numAdults < numChildren) {
            return false
        } else if (numAdults >= numChildren) {
            this.adults = + numAdults
            this.children += numChildren
            return true
        }
        
    }
}

console.log('SoftPlay:', Softplay)

const enter = new Softplay(1, 1)
console.log('enter:', enter)

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
