import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MainRoute from '../route/Routes'

export default withRouter(
  class extends Component {
    render() {
      return (
        <div>
          <MainRoute />
        </div>
      )
    }
  }
)
