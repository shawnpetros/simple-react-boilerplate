import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions'

export const AppMain = ({ count, increase, decrease }) => (
  <div>
    <h1>Cool Counter App</h1>
    <p>Current Count: { count }</p>
    <button className='btn' onClick={() => increase()}>Plus</button>
    <button className='btn' onClick={() => decrease()}>Minus</button>
  </div>
)

export default connect(({ count }) => ({ count }), { increase, decrease })(AppMain)
