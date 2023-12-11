# plan

```js
  class Softplay {

    constructor(numAdults, numChildren){
        this.numAdults = numAdults,
        this.numChildren = numChildren;
    }

    enter() {
      // return false immediately if numChildrenEntering > numAdultsEntering    

      // otherwise, add the numb. of newly arrived children and adults to numAdults and numChildren 
    }

    leave() {

      // return false immediately if numChildrenLeaving > numAdultsLeaving
      // return false immediately if numChildrenLeaving > numChildren
      // return false immediately if numAdultsLeaving > numAdults
      // return false immediately if numChildren - numChildrenLeaving > numAdults - numAdultsLeaving     


      // otherwise, add the numb. of newly arrived children and adults to numAdults and numChildren 
      // then return true
    }

    occupancy() {
        return {adults: numAdults, children: numChildren}
    }

}```
