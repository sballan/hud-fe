export type DocTokenString = 'doc'
export type UiTokenString = 'ui'
export type UiInputTokenString = 'uiInput'
export type UiOutputTokenString = 'uiOutput'
export type NoteTokenString = 'note'
export type NoteHeaderTokenString = 'noteHeader'
export type NoteBodyTokenString = 'noteBody'

export type TokenString =
  'token' |
  DocTokenString |
  UiTokenString |
  UiInputTokenString |
  UiOutputTokenString |
  NoteTokenString |
  NoteHeaderTokenString |
  NoteBodyTokenString


export abstract class Token {
  public type: TokenString = 'token'
  public children: Array<Token> | null = []
  constructor(public str: string) { }
}

export class DocToken extends Token {
  public type: DocTokenString = 'doc'
  public children: Array<UiToken | NoteToken> = []
  constructor(public str: string) { super(str) }
}

export class UiToken extends Token {
  public type: UiTokenString = 'ui'
  public children: Array<UiInputToken | UiOutputToken> = []
  constructor(public str: string) { super(str) }
}

export class UiInputToken extends Token {
  public type: UiInputTokenString = 'uiInput'
  public children: null
  constructor(public str: string) { super(str) }
}

export class UiOutputToken extends Token {
  public type: UiOutputTokenString = 'uiOutput'
  public children: null
  constructor(public str: string) { super(str) }
}

export class NoteToken extends Token {
  public type: NoteTokenString = 'note'
  public children: Array<NoteHeaderToken | NoteBodyToken> = []
  constructor(public str: string) { super(str) }
}

export class NoteHeaderToken extends Token {
  public type: NoteHeaderTokenString = 'noteHeader'
  public children: null
  constructor(public str: string) { super(str) }
}

export class NoteBodyToken extends Token {
  public type: NoteBodyTokenString = 'noteBody'
  public children: null
  constructor(public str: string) { super(str) }
}