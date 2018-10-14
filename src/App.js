import React, { Component } from 'react'
import TabRouter from './components/TabRouter/TabRouter'
import Home from './pages/Home/Home'

class App extends Component {
  render() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:rgb(25, 26, 33)')
    return (
      <div className="App">
        <center>
          <TabRouter />
          <Home />
        </center>
      </div>
    )
  }
}

export default App
