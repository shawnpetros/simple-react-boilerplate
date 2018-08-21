import reducer from '../../src/reducers/countReducer'
import { INCREASE_COUNT, DECREASE_COUNT } from '../../src/constants'

describe('count reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0)
  })

  it('should handle INCREASE_COUNT', () => {
    expect(
      reducer(
        0, {
          type: INCREASE_COUNT
        }
      )
    ).toEqual(
      1
    )
  })

  it('should handle DECREASE_COUNT', () => {
    expect(
      reducer(
        3, {
          type: DECREASE_COUNT
        }
      )
    ).toEqual(
      2
    )
  })
})
