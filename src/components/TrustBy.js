import React, { Component } from 'react'
import './styles/trustby.less'
import icon from '../assets/images/icon.png'
export default class TrustBy extends Component {
  render() {
    return (
        <div className="trust-by ">
            <h2 className="trust-by__title text-center common-title">Trust By</h2>
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
         
        </div>
    )
  }
}
