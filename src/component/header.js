import React, { Component, Fragment } from 'react'
import { Col } from 'reactstrap'

class Header extends Component {
  render() {
    return (
      <Fragment >
        <Col md={12} xs={12} sm={12}>
          <h1>{this.props.city}</h1>
          <p>{this.props.weather}</p>
        </Col>
        <Col md={12} xs={12} sm={12}>
          <h1>{this.props.temp}&deg;C</h1>
        </Col>
      </Fragment>
    )
  }
}

export default Header