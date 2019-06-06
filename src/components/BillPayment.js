import React, { Component } from 'react'
import './styles/bill.less'
// import {HttpRequest} from '../service/httpService'



export default class Payment extends Component {
  constructor(props){
    super(props);
    // this.state= {
    //   data:{
    //       orderId:'',
    //       amount:'',
    //       description:'',
    //       currency:''
    //   }
     

    // };
  }
  // async componentDidMount() {
  //   if(this.props.location){
  //     let string = 'amount=10000000000&apiKey=Midas&command=pay&currency1=USD&description=payment for order A&refCode=2019A157&timestamp=1559290379';
  //     let url = new URLSearchParams(string);
  //     let amount = url.get('amount');
  //     let apiKey = url.get('apiKey');
  //     let command = url.get('command');
  //     let currency1 = url.get('currency1');
  //     let description = url.get('description');
  //     let refCode = url.get('refCode');
  //     let timestamp = url.get('timestamp');
  //     let data={apiKey,refCode,currency1,amount: Number(amount),command,timestamp: Number(timestamp),description}
  //     let response = await HttpRequest.postWithSignature(`${HttpRequest.api}/v1/orders`,data)
  //     if(response.status===200){
  //       console.log('dd')

  //         this.setState({
  //         //  data:response.data
  //         })
            
  //     }
    
      
  //   }
  // }
  
  render() {
 
    return (
      <div className="bill-pay">  
        <div className="bill-pay__content">
          <h3  className="">BILL PAYMENT</h3>
          <div className="bill-pay__item1">
            <div className="my-fieldset ">
              <div className="login-legend">Order details</div>
              <div className="bill-pay__detail d-flex justify-content-between ">
                  <div className="bill-pay__detail-item">
                    <p><span className="color-gray">Order ID:</span><span className="color-black">12</span>
                    </p>
                    <p><span className="color-gray">Amount: </span><span className="color-black">aa </span><span className="bold">USD</span>
                  
                        </p>
                    <p><span className="color-gray">Description: </span><span className="color-black">aa</span>
                  
                    </p>
                </div>
                <img className="float-right  " src="https://picsum.photos/105/115"></img>
              </div>
            </div>
          </div>  
          <div className="bill-pay__item2">
            <div className="my-fieldset ">
              <div className="login-legend">Order details</div>
                <div className="bill-pay__header d-flex justify-content-between ">
                  <span className ="color-gray ">Please send as th instruction below</span>
                  <span className="orange-color">change payment method</span>
                </div>
                <div className="bill-pay__loading ">
                  <p className="orange-color">Loading...</p>
                  <span className="text-center d-block">(Plz)</span>
                </div>
                <div className="bill-pay__detail clearfix ">
                  <div className="float-left mr-30 " >
                      <img className="d-block mr-20" src="https://picsum.photos/105/115"></img>
                      <span className="text-center d-block">Scan QR code</span>
                  </div>
                  <div className="bill-pay__detail-item ">
                    <p><span className="color-gray">Amount:</span><span className="color-black">12 <span className="bold">USD</span></span>
                    </p>
                    <p><span className="color-gray">Address: </span><span className="orange-color">aa </span>
                        </p>
                    <p><span className="color-gray">Time left to pay </span><span className="color-black time">1:00</span>
                  
                    </p>
                </div>
              
              </div>
              
                <div className='bill-pay__instruction'>
                  <p>We will send you ..<span className="orange-color">abc@gmail.com</span></p>
                  <p>Or you can change status</p>
                  <p className="orange-color ml-20">http://</p>
                  <ul className="ml-20">
                    <li>When payment time when out</li>
                    <li>When payment time when out</li>
                  </ul>
                </div>
            </div>
          </div>  
        </div>
      
      </div>
    )
  }
}
