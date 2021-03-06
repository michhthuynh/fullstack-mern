import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        )
      default:
        return <Fragment>
          <li><Payments /></li>
          <li><a href="/api/logout">Logout</a></li>
        </Fragment>
    }
  }


  render() {
    console.log(this.props)
    return (
      <nav>
        <div className="na-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Mich Hoang
          </Link>
          <ul className="right">
            {
              this.renderContent()
            }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth: auth }
}

export default connect(mapStateToProps)(Header)