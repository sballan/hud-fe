import { Note } from './note'
import { Doc } from './doc'

const note2 = new Note(2, "test child note", [])
const note1 = new Note(1, "test parent note", [note2])
const doc1 = new Doc(1, [note1, note2])

const mockNoteApi = new Map<number, Note>()
const mockDocApi = new Map<number, Doc>()
mockDocApi.set(1, doc1)
mockNoteApi.set(1, note1)
mockNoteApi.set(2, note2)

export const api = {
  notes: {
    async get(id: number): Promise<Note> {
      const mockNote = mockNoteApi.get(id)
      return new Promise((resolve, reject) => {
        if (mockNote) resolve(mockNote)
        else reject()
      })
    }
  }
}