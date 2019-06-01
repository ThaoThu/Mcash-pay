import React, { Component } from 'react';
import './styles/cointype.less'

class CoinType extends Component {
    render() {
        return (
            <div className="coin-type ">
                <h2 className="text-center">Accept Bitcoint and Over 50 Altcoins</h2>
                <div className="coin-type__description text-center">From the dev team lorem From the dev team lorem From the dev team lorem  </div>
                <div className="container">
                    <div className ="row ">
                        <div className="col-8 offset-2 ">
                            <div className=" row mb-50">
                                <div className="col-2 ">
                                    <img  src="https://picsum.photos/50/50"></img>
                                </div>
                                <div className="col-2 ">
                                    <img  src="https://picsum.photos/50/50"></img>
                                </div>
                                <div className="col-2 ">
                                    <img  src="https://picsum.photos/50/50"></img>
                                </div>
                                <div className="col-2 ">
                                    <img  src="https://picsum.photos/50/50"></img>
                                </div>
                                <div className="col-2 ">
                                    <img  src="https://picsum.photos/50/50"></img>
                                </div>
                                

                            </div>
                            <div className ="col-12 text-center ">
                                <button className="btn btn-secondary">Register Now</button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default CoinType;
