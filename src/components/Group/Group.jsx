import React, { Component } from 'react'
import './Group.css'

export default class Group extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.getGroup()
    }
  }
  getGroup() {
    let items = []
    for (const o in this.props.group) {
      items.push(this.props.group[o])
    }
    return items
  }
  render() {
    let GROUP = this.state.items.map((item, index) => (
      <div key={index}>
        <a href={item.href}>{item.name}</a>
        {item.img === undefined ? null : <img src={item.img} alt={item.name} />}
      </div>
    ))
    return <div>{GROUP}</div>
  }
}
