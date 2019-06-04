import React, { Component } from 'react'
// import './styles/bill.less'
export default class BillPayment extends Component {
  render() {
    return (
      <div className="bill-pay">  
          <h3  className="text-center">BILL PAYMENT</h3>
          <form>
              <fieldset className="my-fieldset">
                  <legend className="login-legend">Order details</legend>
                  <div className="bill-pay__detail ">
                    <img className=" float-right" src="https://picsum.photos/90/90"></img>
                    <p>Order ID: A888888</p>
                    <p>Amount: 100 USD</p>
                    <p>Description: Payment on MC</p>

                  </div>
                 
              
              </fieldset>
              <h4 className="bill-pay__title mb-20">Payment methods:</h4>
              <select name="select-payment " className="form-control" defaultValue="1">
                  <option value="1">Select coin/token</option>
              </select>
              <div className="mt-20">
                <input className="mr-1" type ="radio" name="checkbox-payment"></input>Pay by your Vinex account
              </div>
              <div className="mb-20">
                <input className="mr-1" type ="radio" name="checkbox-payment"></input>Transform from your wallet
              </div>
              <button className="btn btn-primary mr-3">Confirm</button>
              <button className="btn btn-secondary">Cancel</button>
          </form>
      </div>
    )
  }
}
