// TODO: Create a class in this file to contain all of the logic for this exercise
class Softplay {
    constructor(numAdults, numChildren) {
        this.numAdults = numAdults;
        this.numChildren = numChildren;
    }

    enter(numAdults, numChildren) {
        if (numAdults >= numChildren) {
            this.numAdults += numAdults;
            this.numChildren += numChildren;
            return true;
        } else {
            return false;
        }
    }

    leave(numAdults, numChildren) {
        if (
          this.numAdults >= numAdults &&
          this.numChildren >= numChildren &&
          numAdults >= numChildren &&
          this.numAdults - numAdults === this.numChildren - numChildren
        ) {
          this.numAdults -= numAdults
          this.numChildren -= numChildren
          return true
        }
        return false
      }


    occupancy(){
       return {
            adults : this.numAdults,
            children : this.numChildren
        }
    }
}




// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
