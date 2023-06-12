const Softplay = require('../../src/soft-play.js')

describe('Soft Play Extensions', () => {
  let sp

  beforeEach(() => {
    sp = new Softplay(0, 0)
  })

  it('If Adult or Children leave, total should remain the same', function () {
    sp.enter(3, 2)
    sp.leave(1, 0)
    expect(sp.occupancy()).toEqual({ adults: 2, children: 2 })
    expect(sp.total()).toEqual({ adults: 3, children: 2 })
  })
})
