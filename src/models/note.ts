export class Note {
  constructor(
    public id: number,
    public parentId: number | null,
    public content: string
  ) {  }

}