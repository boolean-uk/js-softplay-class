const Softplay = require('../src/soft-play.js')

describe('Soft Play', () => {
  let sp

  beforeEach(() => {
    sp = new Softplay(0, 0)
  })

  it('Initial state is empty', function () {
    expect(sp.occupancy()).toEqual({ adults: 0, children: 0 })
  })

  it('Single adult and child enter', function () {
    expect(sp.enter(1, 1)).toBeTrue()
    expect(sp.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it('Single adult with 2 children cannot enter', function () {
    expect(sp.enter(1, 2)).toBeFalse()
    expect(sp.occupancy()).toEqual({ adults: 0, children: 0 })
  })

  it('2 adults with 1 child can enter', function () {
    expect(sp.enter(2, 1)).toBeTrue()
    expect(sp.occupancy()).toEqual({ adults: 2, children: 1 })
  })

  it('Adult can leave when adults 2 and children 1', function () {
    sp.enter(2, 1)
    expect(sp.leave(1, 0)).toBeTrue()
    expect(sp.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it('Adult cannot leave when adults 1 and children 1', function () {
    sp.enter(1, 1)
    expect(sp.leave(1, 0)).toBeFalse()
    expect(sp.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it('Adult cannot leave when adults 2 and children 2', function () {
    sp.enter(2, 2)
    expect(sp.leave(1, 0)).toBeFalse()
    expect(sp.occupancy()).toEqual({ adults: 2, children: 2 })
  })

  it('More children cannot leave than are in the soft play center', function () {
    expect(sp.enter(1, 1)).toBeTrue()
    expect(sp.leave(1, 2)).toBeFalse()
    expect(sp.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it('More adults cannot leave than are in the soft play center', function () {
    expect(sp.enter(1, 1)).toBeTrue()
    expect(sp.leave(2, 1)).toBeFalse()
    expect(sp.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it('Child cannot enter on own', function () {
    expect(sp.enter(0, 1)).toBeFalse()
    expect(sp.occupancy()).toEqual({ adults: 0, children: 0 })
  })

  it('Child cannot leave on own', function () {
    sp.enter(1, 1)
    expect(sp.leave(0, 1)).toBeFalse()
    expect(sp.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it('Adult cannot leave with multiple children', function () {
    sp.enter(2, 2)
    expect(sp.leave(1, 2)).toBeFalse()
    expect(sp.occupancy()).toEqual({ adults: 2, children: 2 })
  })

  it('Multiple adults can leave with multiple children', function () {
    sp.enter(2, 2)
    expect(sp.leave(2, 2)).toBeTrue()
    expect(sp.occupancy()).toEqual({ adults: 0, children: 0 })
  })
})

describe('Soft Play Extensions', () => {
  let softplay

  beforeEach(() => {
    softplay = new Softplay(0, 0)
  })

  it('shows total people entered', function () {
    softplay.enter(1, 1)
    softplay.enter(2, 1)
    softplay.leave(1, 0)
    softplay.enter(1, 1)
    softplay.enter(2, 1)
    softplay.leave(1, 1)

    expect(softplay.occupancy()).toEqual({ adults: 4, children: 3 })
    expect(softplay.total()).toEqual({ adults: 6, children: 4 })
  })

  it('shows total people entered', function () {
    softplay.enter(1, 2) // nope
    softplay.enter(2, 2)
    softplay.leave(1, 0) // nope
    softplay.enter(0, 1) // nope
    softplay.enter(1, 1)
    softplay.leave(3, 3)

    expect(softplay.occupancy()).toEqual({ adults: 0, children: 0 })
    expect(softplay.total()).toEqual({ adults: 3, children: 3 })
  })
})
