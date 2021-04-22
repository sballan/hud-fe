export const NoteStore = new Map<Number, Note>()
export const RefStore: Ref[] = []

export class Ref {
  constructor(public fromId: Number, public toId: Number) {}

  static create(fromId: Number, toId: Number) {
    const ref = new Ref(fromId, toId)
    RefStore.push(ref)

    return ref
  }
}

export class Note {
  constructor(
    public id: Number,
    public content: String
  ) {  }

  static create(content: String) {
    const id = Math.trunc(Math.random() * 1000000)
    const note = new Note(id, content);
    NoteStore.set(id, note)

    return note
  }
}