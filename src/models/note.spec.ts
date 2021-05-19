import { Note } from './note'

describe('Note', () => {
  it('can be instantiated', () => {
    const note = new Note(1, "test", [])
    expect(note).toBeTruthy()
  })
})