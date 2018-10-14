import React, { Component } from 'react'
import BaseLayout from '../../layout/base/Base'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.data.title,
      logo: props.data.logo,
      author: props.data.author,
      readMe: props.data.readMe,
      websites: props.data.websites
    }
  }
  render() {
    return (
      <div>
        <BaseLayout>
          <p>{this.state.title}</p>
          <p>{this.state.author}</p>
          <p>{this.state.readMe}</p>
        </BaseLayout>
      </div>
    )
  }
}
