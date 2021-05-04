import { Note } from './note'

describe('Note', () => {
  it('can be instantiated without a parent', () => {
    const note = new Note(1, null, "test")
    expect(note).toBeTruthy()
    expect(note.parentId).toBeNull()
  })

  it('can be instantiated with a parent', () => {
    const note = new Note(2, 1, "test")
    expect(note).toBeTruthy()
    expect(note.parentId).toBe(1)
  })
})