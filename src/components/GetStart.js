import React, { Component } from 'react'
import { Row, Col ,Carousel} from 'antd';
import './styles/getstart.less'
export default class GetStart extends Component {
  render() {
    return (
      <div className="get-start__wrapper">
          <div className="container">
              <div className="row">
                  <div className="col-6">
                        <h3 className="get-start__title">
                                    Your Trust Cryptp Payment
                        </h3>
                        <div className="get-start__content">
                            <p>Empower your business with borderless payment method</p>
                            <p>Start accepting crytocurrency today</p>
                            <button className="get-start__btn btn btn-secondary">Get Started</button>
                        </div>
                  </div>
                  <div className="col-6">
                        
                            <Carousel effect="fade" autoplay>
                                <div >
                                    <img className="d-block" src="https://picsum.photos/500/300"></img>
                                </div>
                                <div >
                                    <img className="d-block" src="https://picsum.photos/500/300"></img>
                                </div>
                                <div >
                                    <img className="d-block" src="https://picsum.photos/500/300"></img>
                                </div>
                            </Carousel>

                    

                  </div>
              </div>
          </div>
      </div>
    )
  }
}
