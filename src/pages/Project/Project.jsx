import React, { Component } from 'react'
import Group from '../../components/Group/Group'

export default class Project extends Component {
  constructor(props) {
    super(props)
    let data = props.data
    this.state = {
      projects: data
    }
  }
  render() {
    return (
      <div>
        <Group group={this.state.projects} />
      </div>
    )
  }
}
