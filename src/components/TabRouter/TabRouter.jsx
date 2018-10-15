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
