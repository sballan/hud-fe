import { Note } from './note';

export class Doc {
  constructor(
    public id: number,
    public notes: Array<Note>
  ) { }

}