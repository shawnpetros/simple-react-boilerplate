import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import './styles/index.css'

import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStoreWithMiddleware(
  reducers,
  // redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
