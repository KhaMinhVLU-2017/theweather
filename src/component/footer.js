import React, { Component } from 'react'
import { Col } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <Col md={12} sm={12} xs={12} style={{textShadow: '2px 2px 2px black'}}>
        <h5>Develop by JudasFate</h5>
      </Col>
    )
  }
}

export default Footer