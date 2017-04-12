import TYPE from './types'

export const increaseNumber = number => ({
  type: TYPE.EXAMPLE.INCREASE,
  payload: { number }
})