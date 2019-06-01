import React, { Component } from 'react'
import './styles/payment.less'

import { Col, Row } from 'antd'

export default class PaymentFeature extends Component {
  render() {
    return (
      <div className="payment-feature">
          <h5 className ="payment-feature__title">Payment Feature</h5>
          <Row>
              <Col span={16} offset={4}>
                  <Row gutter={30}>
                      <Col span={12}>
                          <img src="https://picsum.photos/30/30" className="f-left"></img>
                          <div className="payment-feature__item">
                              <h3>Vault</h3>
                              <p>   Callback function called after the current index changes </p>
                          </div>
                      </Col>
                      <Col span={12}>
                          <img src="https://picsum.photos/30/30" className="f-left"></img>
                          <div className="payment-feature__item">
                              <h3>Vault</h3>
                              <p>   Callback function called after the current index changes </p>
                          </div>
                      </Col>
                      <Col span={12}>
                          <img src="https://picsum.photos/30/30" className="f-left"></img>
                          <div className="payment-feature__item">
                              <h3>Vault</h3>
                              <p>   Callback function called after the current index changes </p>
                          </div>
                      </Col>
                      <Col span={12}>
                          <img src="https://picsum.photos/30/30" className="f-left"></img>
                          <div className="payment-feature__item">
                              <h3>Vault</h3>
                              <p>   Callback function called after the current index changes </p>
                          </div>
                      </Col>
                  </Row>
              </Col>
          </Row>
      </div>
    )
  }
}
