import { Scanner } from './scanner'

describe('Scanner', () => {
  it('can scan a simple note', async () => {
    const docString = "Here is a sample note\n\nAnd another one\n\n"
    const scanner = new Scanner(docString)
    const tokens = scanner.scan()
    expect(tokens.length).toBe(2)
  })
})