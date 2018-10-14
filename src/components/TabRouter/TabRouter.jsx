import React, { Component } from 'react'
import './TabRouter.css'
import BaseLayout from '../../layout/base/Base'

export default class TabRouter extends Component {
  render() {
    return (
      <div>
        <BaseLayout />
        <button className="tab-button">Home</button>
        <button className="tab-button">Project</button>
        <button className="tab-button">About</button>
      </div>
    )
  }
}
