import { describe, expect, it } from 'vitest'
import { info } from '../src/info/title'
describe('infoTitle', () => {
  it('should have correct date', () => {
    expect(info).toMatchInlineSnapshot(`
      [
        {
          "date": "2022/4/25",
          "title": "Mass",
        },
        {
          "date": "2022/4/26",
          "title": "Next",
        },
      ]
    `)
  })
})
