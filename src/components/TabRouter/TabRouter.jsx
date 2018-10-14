import React, { Component } from 'react'
import './TabRouter.css'

export default class TabRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: this.getNames(),
      currentTab: null
    }
  }
  getNames() {
    let names = []
    for (const child of this.props.children) {
      names.push(child.type.name)
    }
    return names
  }
  set currentTab(tab) {
    this.setState({ currentTab: tab })
  }
  get currentTab() {
    return this.state.currentTab || 0
  }
  record(order) {
    let test = this.currentTab === order ? 'tab-button active' : 'tab-button'
    this.currentTab = order
    return test
  }
  render() {
    let TAB = this.state.tabs.map((item, index) => (
      <button
        key={index}
        className={'tab-button'}
        onClick={this.record.bind(this, index)}
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
