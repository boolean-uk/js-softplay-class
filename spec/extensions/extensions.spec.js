const Softplay = require('../../src/soft-play.js')

describe('Soft Play Extensions', () => {
  let sp

  beforeEach(() => {
    sp = new Softplay(0, 0)
  })

  it('shows total people entered', function () {
    sp.enter(1, 1)
    sp.enter(2, 1)
    sp.leave(1, 0)
    sp.enter(1, 1)
    sp.enter(2, 1)
    sp.leave(1, 1)

    expect(sp.occupancy()).toEqual({ adults: 4, children: 3 })
    expect(sp.total()).toEqual({ adults: 6, children: 4 })
  })

  it('shows total people entered', function () {
    sp.enter(1, 2)
    sp.enter(2, 2)
    sp.leave(1, 0)
    sp.enter(0, 1)
    sp.enter(1, 1)
    sp.leave(3, 3)

    expect(sp.occupancy()).toEqual({ adults: 0, children: 0 })
    expect(sp.total()).toEqual({ adults: 3, children: 3 })
  })
})
