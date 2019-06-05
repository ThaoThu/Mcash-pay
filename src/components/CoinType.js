import React, { Component } from 'react';
import './styles/cointype.less'
import icon from '../assets/images/icon.png'
class CoinType extends Component {
    render() {
        return (
            <div className="coin-type ">
                <h2 className="text-center main-color">Accept Bitcoint and Over 50 Altcoins</h2>
                <div className="coin-type__description text-center">From the dev team lorem From the dev team lorem From the dev team lorem  </div>
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
            
        );
    }
}

export default CoinType;
