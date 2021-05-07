import { Doc } from './doc'

describe('Doc', () => {
  it('can be instantiated', () => {
    const doc = new Doc(1, [])
    expect(doc).toBeTruthy()
  })
})