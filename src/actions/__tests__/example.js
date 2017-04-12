/* eslint-disable prefer-arrow-callback */
import { increaseNumber } from '../example'
import TYPE from '../types'

describe('Example Reducer', () => {
  describe('increaseNumber', () => {
    it('should be correct type and payload', () => {
      const action = increaseNumber(10)

      expect(action.type).toBe(TYPE.EXAMPLE.INCREASE)
      expect(action.payload).toEqual({
        number: 10
      })
    })
  })
})