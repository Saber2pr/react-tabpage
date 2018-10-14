import React, { Component } from 'react'
import TabRouter from './components/TabRouter/TabRouter'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import About from './pages/About/About'
import index from './common/json/data.json'
import './App.css'

class App extends Component {
  getNames() {
    let names = []
    for (const o in index) {
      names.push(o)
    }
    return names
  }
  render() {
    return (
      <div className="app">
        <center>
          <TabRouter tabs={this.getNames()}>
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
