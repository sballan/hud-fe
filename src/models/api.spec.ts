import { api } from './api'

describe('api', () => {
  it('can get a note', async () => {
    const note = await api.notes.get(1)
    expect(note).toBeTruthy()
  })
})