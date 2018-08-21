import * as actions from '../../src/actions/index'
import { INCREASE_COUNT, DECREASE_COUNT } from '../../src/constants'

describe('action creators', () => {
  it('should create an action to increase', () => {
    const expectedAction = {
      type: INCREASE_COUNT
    }
    expect(actions.increase()).toEqual(expectedAction)
  })
  it('should create an action to decrease', () => {
    const expectedAction = {
      type: DECREASE_COUNT
    }
    expect(actions.decrease()).toEqual(expectedAction)
  })
})
