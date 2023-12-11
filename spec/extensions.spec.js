const Softplay = require('../src/soft-play.js')

describe("Soft Play", () => {  
  let sp
  sp = new Softplay(0,0)
  // beforeEach(() => {
  //   sp = new Softplay(0, 0)
  // })

  it("Initial state is empty", function() {
    expect(sp.totalStats()).toEqual({adults: 0, children: 0})
  })

  it("Single adult and child enter, raising total", function() {
    expect(sp.enter(1,1)).toBeTrue()
    expect(sp.totalStats()).toEqual({adults: 1, children: 1})
  })
  
  it("Single adult with 2 children cannot enter, not raising total", function() {
    expect(sp.enter(1,2)).toBeFalse()
    expect(sp.totalStats()).toEqual({adults: 1, children: 1})
  })

  it("2 adults with 1 child can enter, raising total", function() {
    expect(sp.enter(2,1)).toBeTrue()
    expect(sp.totalStats()).toEqual({adults: 3, children: 2})
  })

  it("Adult can leave when adults 2 and children 1, total remains", function() {
    sp.enter(2,1)
    expect(sp.leave(1,0)).toBeTrue()
    expect(sp.totalStats()).toEqual({adults: 5, children: 3})
  })

  it("Adult cannot leave when adults 1 and children 1", function() {
    sp.enter(1,1)
    expect(sp.leave(1,0)).toBeTrue()
    expect(sp.totalStats()).toEqual({adults: 6, children: 4})
  })

  it("More adults cannot leave than are in the soft play center", function() {
    expect(sp.enter(1,1)).toBeTrue()
    expect(sp.totalStats()).toEqual({adults: 7, children: 5})
  })

  it("Child cannot enter on own", function() {
    expect(sp.enter(0,1)).toBeFalse()
    expect(sp.totalStats()).toEqual({adults: 7, children: 5})
  })

  it("Child cannot leave on own", function() {
    sp.enter(1,1)
    expect(sp.leave(0,1)).toBeFalse()
    expect(sp.totalStats()).toEqual({adults: 8, children: 6})
  })

  it("Adult cannot leave with multiple children", function() {
    sp.enter(2,2)
    expect(sp.leave(1,2)).toBeFalse()
    expect(sp.totalStats()).toEqual({adults: 10, children:8})
  })

  it("Multiple adults can leave with multiple children", function() {
    sp.enter(2,2)
    expect(sp.leave(2,2)).toBeTrue()
    expect(sp.totalStats()).toEqual({adults: 12, children:10})
  })
})