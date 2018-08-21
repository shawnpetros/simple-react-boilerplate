import React from 'react'
import ReactDOM from 'react-dom'
import { AppMain } from '../src/components/app'

describe('main component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppMain />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
