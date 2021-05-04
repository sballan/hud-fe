abstract class Token { constructor(public str: string) { } }

class NoteBodyHeader extends Token { }
class NoteBody extends Token { }

export class Scanner {
  constructor(
    public input: string)
  {
    if(input.length < 2) throw('input too small')
  }

  scan(): Array<Token> {
    const tokens: Array<Token> = []
    let tokenStart = 0

    for (let i = tokenStart + 2; i < this.input.length; i++) {
      if (this.input[i-1] == "\n" && this.input[i] == "\n") {
        const str = this.input.slice(tokenStart, i - 1)
        tokens.push(new NoteBody(str))
        tokenStart = i+1
        continue
      }
    }

    return tokens
  }
}