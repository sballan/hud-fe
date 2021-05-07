export class Note {
  constructor(
    public id: number,
    public content: string,
    public nested: Array<Note>
  ) { }

  reload() {
    // makes API request, replaces necessary data
  }

}