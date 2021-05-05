abstract class Token { constructor(public str: string) { } }

class NoteBodyHeader extends Token { }
class NoteBodyToken extends Token { }
class SeparatorToken extends Token { }

export class Scanner {
  constructor(
    public input: string)
  {
    if(input.length < 2) throw('input too small')
  }

  scan(): Array<Token> {
    const tokens: Array<Token> = []
    let tokenStart = 0

    for (let i = tokenStart; i < this.input.length; i++) {
      if (this.input[tokenStart] === "\n" && this.input[tokenStart+1] === "\n") {
        const str = this.input.slice(tokenStart, i+1)
        tokens.push(new SeparatorToken(str))
        tokenStart = i+1
        continue
      } else if (this.input[i+1] === "\n" && this.input[i+2] === "\n") {
        const str = this.input.slice(tokenStart, i+1)
        tokens.push(new NoteBodyToken(str))
        tokenStart = i+1
        continue
      } else if (this.input[tokenStart] === '#' && this.input[i] !== '\n') {
        continue
      } else if (this.input[tokenStart] === '#' && this.input[i] === '\n') {
        const str = this.input.slice(tokenStart, i+1)
        tokens.push(new NoteBodyHeader(str))
        tokenStart = i+1
        continue
      }
    }

    return tokens
  }
}