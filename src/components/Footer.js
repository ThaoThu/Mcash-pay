import React, { Component } from 'react'
import './styles/footer.less'
import appStoreImg from '../assets/images/app.png'
import ggStoreImg from '../assets/images/ggp.png'

export default class Footer extends Component {
  render() {
    return (
      <footer >
          <div className="container">
            <div className="row primary-logo">
                <p className="col-12 text">2013-2019 Coinpayments. Inc. All rights Reserved. Wallet Services provided by Hodtech OU licence number FH435</p>
                <div className = "col-4 col-lg-2">
                    <div className ="footer-link">
                        <h5 className = "footer-link__title">COINT PAYMENT</h5>
                        <ul>
                            <li><a>Fees/Pricing</a></li>
                            <li><a>Supperied Coints</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className = "col-4 col-lg-2">
                    <div className ="footer-link">
                        <h5 className = "footer-link__title">RESOURCES</h5>
                        <ul>
                            <li><a>Merchant Tools </a></li>
                            <li><a>Affinate Information </a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Offical TORIRI</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "col-4 col-lg-2">
                    <div className ="footer-link">
                        <h5 className = "footer-link__title">CONTACT</h5>
                        <ul>
                            <li><a>Add your coin</a></li>
                            <li><a>Add your store </a></li>
                            <li><a>Support</a></li>
                            <li><a>Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "col-4 col-lg-2">
                    <div className ="footer-link">
                        <h5 className = "footer-link__title">SOCIAL</h5>
                        <ul>
                            <li><a>Blog</a></li>
                            <li><a>Twitter</a></li>
                            <li><a>Instagram</a></li>
                            <li><a>Telegram</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "col-4 col-lg-2">
                    <div className ="footer-link">
                        <h5 className = "footer-link__title">LEGAL</h5>
                        <ul>
                            <li><a>Primary Policy</a></li>
                            <li><a>User Agreement</a></li>
                            <li><a>GDPR Notice</a></li>
                            
                        </ul>
                    </div>
                </div>

                <div className = "col-4 col-lg-2">
                    <div className ="footer-link">
                        <button className="btn btn-footer text-white mb-2">Add your coin</button>
                        <img src={appStoreImg } className=" mb-2"></img>
                        <img src={ggStoreImg} className=""></img>
                    </div>
                </div>
            </div>

          </div>
      </footer>
    )
  }
}
