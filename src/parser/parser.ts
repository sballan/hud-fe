import {
  DocToken, NoteToken, UiToken
} from './tokens'

export default class Scanner {
  constructor(
    public input: string)
  { }

  scan() : DocToken {
    return this.scanDoc(0, this.input.length - 1)
  }

  scanDoc(start: number, end: number): DocToken {
    const doc = new DocToken(this.input)
    let lookahead: string | null = this.input[0]
    let tokenStart = start

    let uiStage = true;

    for (let i = start; i < end; i++) {
      if (i < end - 1) {
        lookahead = this.input[i + 1]
      } else {
        lookahead = null;
      }

      if (uiStage) {
        if (this.input[i] === "$" && lookahead === " ") {
          tokenStart = i
          continue
        } else if (this.input[i] === "$" && tokenStart === i - 1) {
          continue
        } else if (lookahead === "\n" && this.input[i] == "\n") {
          const uiToken = this.scanUi(tokenStart, i)
          doc.children.push(uiToken)
          tokenStart = i + 2;
          uiStage = false;
          i++
          continue
        } else if (this.input[i] == "\n") {
          continue
        }
      } else {
        if (lookahead === "\n" && this.input[i] == "\n") {
          const noteToken = this.scanNote(tokenStart, i)
          doc.children.push(noteToken)
          tokenStart = i + 2;
          i++
          continue
        } else if (this.input[i] == "\n") {
          continue
        }

      }
    }

    return doc
  }

  scanUi(start: number, end: number): UiToken {

  }

  scanNote(start: number, end: number): NoteToken {

  }
}