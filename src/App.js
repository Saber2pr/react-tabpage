import React, { Component } from 'react'
import TabRouter from './components/TabRouter/TabRouter'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import About from './pages/About/About'
import index from './common/json/data.json'
import './App.css'

class App extends Component {
  render() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:rgb(25, 26, 33)')
    return (
      <div className="app">
        <center>
          <TabRouter>
            <Home data={index.home} />
            <Project data={index.project} />
            <About data={index.about} />
          </TabRouter>
        </center>
      </div>
    )
  }
}

export default App
