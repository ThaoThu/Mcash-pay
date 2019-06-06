import React, { Component } from 'react'
import './styles/receipt.less'
export default class Receipt extends Component {
  render() {
    return (
      <div className="receipt d-flex justify-content-center align-items-center">
        <form className="form-receipt ">
            <h3 className ="form-receipt__text ">Thank you</h3>
            <div className="break-line"></div>
            <div className="form-receipt__check">
                <div className="receipt-check__title">Your payment is stall pending</div>
                <div className="receipt-check__description">
                    Check back later for the final status of your payment. More information about your payment can be found below
                </div>
                <div className="break-div"></div>
                <div className="receipt-check__detail">
                  <span className="float-left color-gray">Amount</span>
                  <span className="float-right">
                     <p>0.01 ETH</p>
                     <p className="orange-text">2.46 <b>USD</b></p>
                  </span>
                  <div className=" clear "></div>
            
                    <table>
                      <tr>
                        <td className=" color-gray">Order Number</td>
                        <td className="float-right">
                          <div className="d-inline-block order-number mb-3"  >1234</div>
                          
                        </td>
                      </tr>
                      <tr>
                        <td className=" color-gray">Status</td>
                        <td className="float-right">
                          <button className="btn btn-outline-danger mb-3">Pending</button>
                         
                        </td>
                      </tr>
                      <tr>
                        <td className=" color-gray">Order Time</td>
                        <td className="float-right order-time">
                          <p>0.01 ETH</p>
                         
                        </td>
                      </tr>
                      <tr>
                        <td className=" color-gray">Exchange Rate</td>
                        <td className="float-right">
                          <p>0.01 <b>ETH</b></p>
                         
                        </td>
                      </tr>
                    </table>
                    <div className="break-line"></div>
                    <div className="receipt__btn-wrapper">
                      <button className="btn receipt__btn color-white">Show activity</button>
                    </div>
                    <div className="break-line"></div>
                    <div className="receipt__help">
                      <span className="float-left color-gray"><a>Need help</a></span>
                      <span className="float-right"><a>Contact us</a></span>
                    </div>
                </div>
            </div>
        </form>
      </div>
    )
  }
}
