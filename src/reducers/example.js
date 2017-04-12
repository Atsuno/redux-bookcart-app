import TYPE from '../actions/types'
import { initialStore } from '../store'


export default (example = initialStore.example, action) => {
  switch (action.type) {
    case TYPE.EXAMPLE.INCREASE: {
      return {
        number: example.number + action.payload.number
      }
    }
    default: {
      return example
    }
  }
}