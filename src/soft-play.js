// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {

    constructor() {
        this.adults = 0,
        this.children = 0,
        this.allAdults = 0,
        this.allChildren = 0
    };

    enter(numAdults, numChildren) {
        if(numAdults >= numChildren) {
            this.adults += numAdults
            this.children += numChildren
            this.allAdults += numAdults
            this.allChildren += numChildren
            return true
        }    else {
            return false
        }
    }

    leave(numAdults, numChildren) {
        if(numAdults < numChildren){
           return false
        }
        if((this.adults - numAdults)< (this.children - numChildren)) {
            return false
        }
        if((this.adults - numAdults) < 0 || (this.children - numChildren) < 0) {
            return false
        }
        this.adults -=numAdults
        this.children -=numChildren
        return true
    }

    total(){
        return {
            adults: this.allAdults,
            children: this.allChildren 
        }
    }

    occupancy () {
        return {
            adults: this.adults ,
            children : this.children
        }
    }
}


// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
