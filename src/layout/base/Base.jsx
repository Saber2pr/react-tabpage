import React, { Component } from 'react'
import './Base.css'

export default class BaseLayout extends Component {
  render() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:rgb(25, 26, 33)')
    return <div>{this.props.children}</div>
  }
}
