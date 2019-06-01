import React, { Component } from 'react'
import './styles/trustby.less'
export default class TrustBy extends Component {
  render() {
    return (
        <div className="trust-by ">
        <h2 className="trust-by__title text-center">Trust By</h2>
        <div className="container">
            <div className ="row ">
                <div className="col-8 offset-2 ">
                    <div className=" row mb-50 primary-logo">
                        <div className="col-lg-2 col-4">
                            <img  src="https://picsum.photos/50/50"></img>
                        </div>
                        <div className="col-lg-2 col-4">
                            <img  src="https://picsum.photos/50/50"></img>
                        </div>
                        <div className="col-lg-2 col-4">
                            <img  src="https://picsum.photos/50/50"></img>
                        </div>
                        <div className="col-lg-2 col-4">
                            <img  src="https://picsum.photos/50/50"></img>
                        </div>
                        <div className="col-lg-2 col-4">
                            <img  src="https://picsum.photos/50/50"></img>
                        </div>
                        <div className="col-lg-2 col-4">
                            <img  src="https://picsum.photos/50/50"></img>
                        </div>

                    </div>
                   
                </div>
             
            </div>
        </div>
    </div>
    )
  }
}
