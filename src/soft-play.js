// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
    constructor(numAdults, numChildren) {
        this.numAdults = numAdults;
        this.numChildren = numChildren
    }

    // Occupancy method that contains the number of adults and children currently inside the soft play center
    // occupancy(){
    //     const obj = {
    //         adults: this.numAdults,
    //         children: this.numChildren
    //     }
    //     return obj
    // }


    // Every child entering the soft play center is accompanied by at least 1 adult.
    enter(numAdults, numChildren){
        if (numAdults > numChildren){
            // `numAdults` and `numChildren` should be added to the current totals.
            this.numAdults = numAdults
            this.numChildren = numChildren

            // the method should return `true`
            return true
        } else {
            // If any of these checks fail, the method should return `false`.
            return false
        }
        
    }

leave(numAdults, numChildren){
    // A child is not attempting to leave without an adult
    if(this.numChildren > this.numAdults || numChildren > numAdults){
        return false
    } else {
        console.log(this.numAdults, this.numChildren)
        console.log(numAdults, numChildren) 
        this.numAdults = numAdults - this.numAdults
        this.numChildren = numChildren - this.numChildren
        return true
    }   
}
}

const people = new Softplay(0, 0)
people.enter(5,3)
console.log(people.leave(10, 4), people)


// TODO: Change the undefined value below to the name of your class
module.exports = undefined
