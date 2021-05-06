export class Note {
  constructor(
    public id: number,
    public content: string,
    public children: Array<Note>
  ) { }

  reload() {
    // makes API request, replaces necessary data
  }

}