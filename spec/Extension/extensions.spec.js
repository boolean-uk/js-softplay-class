const Softplay = require('../../src/soft-play.js')

describe('SoftPlay Extensions', () => {
  let sp
  beforeEach(() => {
    sp = new Softplay(0, 0)
  })
  it('If Adult or Children leave, total should remain the same', function () {
    sp.enter(3, 2)
    sp.leave(1, 0)
    sp.enter(2, 1)
    sp.leave(1, 1)
    expect(sp.occupancy()).toEqual({ adults: 3, children: 2 })
    expect(sp.total()).toEqual({ adults: 5, children: 3 })
  })
  it('If Adult or Children leave, total should remain the same', function () {
    sp.enter(3, 2)
    sp.enter(1, 1)
    sp.leave(1, 0)
    sp.leave(3, 3)
    expect(sp.occupancy()).toEqual({ adults: 0, children: 0 })
    expect(sp.total()).toEqual({ adults: 4, children: 3 })
  })
})
