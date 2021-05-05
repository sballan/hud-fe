import { Scanner } from './scanner'

describe('Scanner', () => {
  it('can scan a simple note', async () => {
    const docString =
`# My header
Here is a sample note

And another one

`
    const scanner = new Scanner(docString)
    const tokens = scanner.scan()
    expect(tokens.length).toBe(5)
  })
})