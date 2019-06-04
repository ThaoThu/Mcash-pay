import React, { Component } from 'react'
import  './styles/partner.less'
export default class Stragic extends Component {
  render() {
    return (
      <div className="stragic-partner ">
          <h3 className=" text-center main-color">Stragic Partners</h3> 
          <div className="container mt-30">
            <div className ="row ">
              <div className = " col-12 d-flex justify-content-between">
                <div className="col-img">
                    <img  src="https://picsum.photos/50/50"></img>
                </div>
                <div className="col-img">
                    <img  src="https://picsum.photos/50/50"></img>
                </div>
                <div className="col-img">
                    <img  src="https://picsum.photos/50/50"></img>
                </div>
                <div className="col-img">
                    <img  src="https://picsum.photos/50/50"></img>
                </div>
                <div className="col-img">
                    <img  src="https://picsum.photos/50/50"></img>
                </div>
                </div>
            </div>
          </div>
          <div className="text-center mt-50">
            <button className="btn stragic-partner__btn text-white">Register Now</button>
          </div>
      </div>
    )
  }
}
