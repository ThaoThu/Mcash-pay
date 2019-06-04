import React, { Component } from 'react'
import './styles/trustby.less'
export default class TrustBy extends Component {
  render() {
    return (
        <div className="trust-by ">
            <h2 className="trust-by__title text-center main-color">Trust By</h2>
            <div className="container mt-30">
                <div className ="row d-flex justify-content-between">
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
    )
  }
}
