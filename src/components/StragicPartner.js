import React, { Component } from 'react'
import  './styles/partner.less'
import icon from '../assets/images/icon.png'
export default class Stragic extends Component {
  render() {
    return (
      <div className="stragic-partner ">
          <h3 className=" text-center main-color">Stragic Partners</h3> 
          
          <div className="container">
                    <div className="row">
                        <div className = "coin-type__imgs d-flex justify-content-between flex-wrap ">
                                <img  src={icon} className="img-fluid"></img>
                                <img  src={icon} className="img-fluid"></img>
                                <img  src={icon} className="img-fluid"></img>
                                <img  src={icon} className="img-fluid"></img>
                                <img  src={icon} className="img-fluid"></img> 
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
