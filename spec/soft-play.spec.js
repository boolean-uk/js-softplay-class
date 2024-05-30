const Softplay = require('../src/soft-play')

describe('Softplay', () => {
  let sp

  beforeEach(() => {
    sp = new Softplay(0, 0)
  })

  it('should initialize with correct counts', () => {
    expect(sp.occupancy()).toEqual({ adults: 0, children: 0 })
  })

  it('should allow adults and children to enter', () => {
    expect(sp.enter(2, 1)).toBe(true)
    expect(sp.occupancy()).toEqual({ adults: 2, children: 1 })
  })

  it('should not allow children to enter without adults', () => {
    expect(sp.enter(0, 1)).toBe(false)
    expect(sp.occupancy()).toEqual({ adults: 0, children: 0 })
  })

  it('should allow adults and children to leave', () => {
    sp.enter(2, 1)
    expect(sp.leave(1, 0)).toBe(true)
    expect(sp.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it('should not allow more children to leave than adults', () => {
    sp.enter(2, 1)
    expect(sp.leave(1, 1)).toBe(true)
    expect(sp.occupancy()).toEqual({ adults: 1, children: 0 })
  })

  it('should not allow adults to leave if it causes more children than adults', () => {
    sp.enter(2, 1)
    expect(sp.leave(1, 0)).toBe(true)
    expect(sp.leave(1, 0)).toBe(false)
    expect(sp.occupancy()).toEqual({ adults: 1, children: 1 })
  })

  it('should not allow children to leave without an adult', () => {
    sp.enter(2, 2)
    expect(sp.leave(0, 1)).toBe(false)
    expect(sp.occupancy()).toEqual({ adults: 2, children: 2 })
  })

  it('should not allow more adults or children to leave than are present', () => {
    sp.enter(2, 2)
    expect(sp.leave(3, 2)).toBe(false)
    expect(sp.occupancy()).toEqual({ adults: 2, children: 2 })
  })
})
