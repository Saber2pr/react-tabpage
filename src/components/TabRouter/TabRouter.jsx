import React, { Component } from 'react'
import './TabRouter.css'

export default class TabRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: props.tabs,
      currentTab: null
    }
  }
  set currentTab(tab) {
    this.setState({ currentTab: tab })
  }
  get currentTab() {
    return this.state.currentTab || 0
  }
  record(order) {
    this.currentTab = order
  }
  render() {
    let TAB = this.state.tabs.map((item, index) => (
      <button
        key={index}
        onClick={this.record.bind(this, index)}
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
