import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      logo: null,
      author: null,
      readMe: null,
      websites: null
    }
  }
  render() {
    return (
      <div>
        <p>the Website is based on React</p>
      </div>
    )
  }
}
