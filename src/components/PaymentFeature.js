import React, { Component } from 'react'
import './styles/payment.less'
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'

export default class PaymentFeature extends Component {
  render() {
    return (
      <div className="payment-feature mt-50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 payment-feature__img text-center">
                    <img className="img-fluid" src = "https://picsum.photos/560/700"></img>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                    <div>
                        <h4 className ="payment-feature__title common-title  ">Payment Feature</h4>
                        <ul className="payment-feature__icon">
                            <li>
                                <img src={img1} className="img-fluid"></img>
                                    <div className="payment-feature__item">
                                        <h5>Vault</h5>
                                        <p>   Callback function called after the current  index changes index changes </p>
                                    </div>
                            </li>
                            <li>
                                <img  src={img2}className="img-fluid"></img>
                                    <div className="payment-feature__item">
                                        <h5>Vault</h5>
                                        <p>   Callback function called after the current  index changes index changes </p>
                                    </div>
                            </li>
                            <li>
                                <img  src={img3} className="img-fluid"></img>
                                    <div className="payment-feature__item">
                                        <h5>Vault</h5>
                                        <p>   Callback function called after the current  index changes index changes </p>
                                    </div>
                            </li>
                            <li>
                                <img  src={img4} className="img-fluid"></img>
                                    <div className="payment-feature__item">
                                        <h5>Vault</h5>
                                        <p>   Callback function called after the current  index changes index changes </p>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
             
    </div>
    )
  }
}
