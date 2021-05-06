import { Note } from './note'

describe('Note', () => {
  it('can be instantiated without a parent', () => {
    const note = new Note(1, "test", [])
    expect(note).toBeTruthy()
  })

  it('can be instantiated with a parent', () => {
    const note = new Note(2, "test", [])
    expect(note).toBeTruthy()
  })
})