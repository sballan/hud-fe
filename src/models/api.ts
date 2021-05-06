import { Note } from './note'

const mockNoteStore = new Map<number, Note>()
mockNoteStore.set(1, new Note(1, null, "test parent note"))
mockNoteStore.set(2, new Note(2, 1, "test child note"))

export const api = {
  notes: {
    async get(id: number): Promise<Note> {
      const mockNote = mockNoteStore.get(id)
      return new Promise((resolve, reject) => {
        if (mockNote) resolve(mockNote)
        else reject()
      })
    }
  }
}