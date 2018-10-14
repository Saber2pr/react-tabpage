import React, { Component } from 'react'
import Group from '../../components/Group/Group'
import './About.css'

export default class About extends Component {
  constructor(props) {
    super(props)
    let data = props.data
    this.state = {
      about: data
    }
  }
  render() {
    return (
      <div className="about">
        <p>Call Me</p>
        <Group group={this.state.about} />
      </div>
    )
  }
}
