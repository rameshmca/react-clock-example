import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './Clock'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Clock />, div)
})
