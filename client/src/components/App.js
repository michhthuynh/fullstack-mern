import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Headers from './Header'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Landing from './Landing'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Headers />
          <Route path='/' exact component={Landing} />
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)