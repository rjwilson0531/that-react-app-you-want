import React, { Component } from 'react'

import Button from '@/components/Button'
import Icon from '@/components/Icon'

/*
  - Uncommenting the line below will break the linter.
  - However, if you do include it, you will notice that when building,
    `purifycss` removes any unused CSS.
 */
// import PurifiedCss from '@/containers/PurifiedCss'

import './styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Icon />
          <h2>this is that-react-app-you-want.</h2>
        </div>
        <p className="App-intro">
          Run the <code>build</code> command to check out purifycss or click the
          button for some chunks & lazy loading.
        </p>
        <br />
        <Button />
        <p>Hello - Happy New Year!</p>
      </div>
    )
  }
}

export default App