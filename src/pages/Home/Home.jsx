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
      <div>
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
