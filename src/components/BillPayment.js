import React, { Component } from 'react'
import './styles/bill.less'
import {HttpRequest} from '../service/httpService'



export default class Payment extends Component {
  constructor(props){
    super(props);
    this.state= {
      data:{
          orderId:'',
          amount:'',
          description:'',
          currency:''
      }
     

    };
  }
  async componentDidMount() {
    if(this.props.location){
      let string = 'amount=10000000000&apiKey=Midas&command=pay&currency1=USD&description=payment for order A&refCode=2019A157&timestamp=1559290379';
      let url = new URLSearchParams(string);
      let amount = url.get('amount');
      let apiKey = url.get('apiKey');
      let command = url.get('command');
      let currency1 = url.get('currency1');
      let description = url.get('description');
      let refCode = url.get('refCode');
      let timestamp = url.get('timestamp');
      let data={apiKey,refCode,currency1,amount: Number(amount),command,timestamp: Number(timestamp),description}
      let response = await HttpRequest.postWithSignature(`${HttpRequest.api}/v1/orders`,data)
      if(response.status===200){
        console.log('dd')

          this.setState({
           data:response.data
          })
            
      }
    
      
    }
  }
  
  render() {
      let {data} = this.state
    return (
      <div className="bill-pay">  
          <h3  className="text-center">BILL PAYMENT</h3>
          <form>
              <fieldset className="my-fieldset">
                  <legend className="login-legend">Order details</legend>
                  <div className="bill-pay__detail ">
                    <img className=" float-right" src="https://picsum.photos/90/90"></img>
                    {data &&
                     <div>
                        <p>Order ID: {data.orderId}</p>
                        <p>Amount: {data.billInfo.amount} {data.billInfo.currency}</p>
                        <p>Description: {data.billInfo.description}</p>
                    </div>
                    }
                   
            

                  </div>
              </fieldset>
              <h4 className="bill-pay__title mb-20">Payment methods:</h4>
              <select name="select-payment " className="form-control" defaultValue="1">
                  <option value="1">Select coin/token</option>
              </select>
              <div className="mt-20">
                <input className="mr-1" type ="radio"defaultChecked   name="checkbox-payment"></input>Pay by your Vinex account
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
