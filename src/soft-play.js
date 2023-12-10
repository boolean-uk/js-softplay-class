class Softplay {
    constructor(numAdults, numChildren) {
        this.adults = numAdults;
        this.children = numChildren;
    }

    enter(numAdults, numChildren) {
        if (numChildren > numAdults) {
            return false;
        }

        this.adults += numAdults;
        this.children += numChildren;
        return true;
    }

    leave(numAdults, numChildren) {
        if (numAdults > this.adults || numChildren > this.children) {
            return false;
        }

        if (numChildren > numAdults || (this.children - numChildren) > (this.adults - numAdults)) {
            return false;
        }

        this.adults -= numAdults;
        this.children -= numChildren;
        return true;
    }

    occupancy() {
        return {
            adults: this.adults,
            children: this.children
        };
    }
}

module.exports = Softplay