# react-tabpage

> A create-react-app project.

### preview

![loadingImage...](https://github.com/Saber2pr/MyWeb/raw/master/resource/React.jpg)

- easy to make a tabpage!

> There is also a Vue demo like this:  
> [vue-tabpage](https://github.com/Saber2pr/vue-tabpage)

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run start

# build for production with minification
npm run build

# run unit tests
npm run test
```

## Details

> TabRouter.jsx

```jsx
import React, { Component } from 'react'
import './TabRouter.css'

export default class TabRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: this.initArray(props.tabs),
      currentTab: null
    }
  }
  initArray(array) {
    return Array.isArray(array) ? array : this.getTabs(array)
  }
  getTabs(array) {
    let names = []
    for (const o in array) {
      names.push(o)
    }
    return names
  }
  set currentTab(tab) {
    this.setState({ currentTab: tab })
  }
  get currentTab() {
    return this.state.currentTab || 0
  }
  render() {
    let TAB = this.state.tabs.map((item, index) => (
      <button
        key={index}
        onClick={() => {
          this.currentTab = index
        }}
        className={'tab-button'}
      >
        {item}
      </button>
    ))
    return (
      <div>
        {TAB}
        {this.props.children[this.currentTab]}
      </div>
    )
  }
}
```

> App.js

```jsx
import React, { Component } from 'react'
import TabRouter from './components/TabRouter/TabRouter'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import About from './pages/About/About'
import index from './common/json/data.json'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <center>
          <TabRouter tabs={index}>
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
```

> Home.jsx

```jsx
import React, { Component } from 'react'
import BaseLayout from '../../layout/base/Base'
import Group from '../../components/Group/Group'
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    let data = props.data
    this.state = {
      title: data.title,
      logo: data.logo,
      author: data.author,
      readMe: data.readMe,
      websites: data.websites
    }
  }
  render() {
    return (
      <div className="home">
        <BaseLayout>
          <p>{this.state.title}</p>
          <img src={this.state.logo} alt={'loading'} />
          <p>{this.state.author}</p>
          <p>{this.state.readMe}</p>
          <Group group={this.state.websites} />
        </BaseLayout>
      </div>
    )
  }
}
```

### More pages just like this and the App will import them to use tabs to play.

### ...
