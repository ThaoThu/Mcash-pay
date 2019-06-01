import React, { Component } from 'react'
import './styles/footer.less'
import appStoreImg from '../assets/images/app.png'
import ggStoreImg from '../assets/images/ggp.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="container">
          <div className="row primary-logo">
              <div className = "col-4 col-lg-2">
                  <div className ="footer-link">
                      <h5 className = "footer-link__title">Contact</h5>
                      <ul>
                          <li><a>Add your coin</a></li>
                          <li><a>Add your store</a></li>
                          <li><a>Contact us</a></li>
                          <li><a>Add your coin</a></li>
                      </ul>
                  </div>
              </div>
              <div className = "col-4 col-lg-2">
                  <div className ="footer-link">
                      <h5 className = "footer-link__title">Contact</h5>
                      <ul>
                          <li><a>Add your coin</a></li>
                          <li><a>Add your store</a></li>
                          <li><a>Contact us</a></li>
                          <li><a>Add your coin</a></li>
                      </ul>
                  </div>
              </div>
              <div className = "col-4 col-lg-2">
                  <div className ="footer-link">
                      <h5 className = "footer-link__title">Contact</h5>
                      <ul>
                          <li><a>Add your coin</a></li>
                          <li><a>Add your store</a></li>
                          <li><a>Contact us</a></li>
                          <li><a>Add your coin</a></li>
                      </ul>
                  </div>
              </div>
              <div className = "col-4 col-lg-2">
                  <div className ="footer-link">
                      <h5 className = "footer-link__title">Contact</h5>
                      <ul>
                          <li><a>Add your coin</a></li>
                          <li><a>Add your store</a></li>
                          <li><a>Contact us</a></li>
                          <li><a>Add your coin</a></li>
                      </ul>
                  </div>
              </div>
              <div className = "col-4 col-lg-2">
                  <div className ="footer-link">
                      <h5 className = "footer-link__title">Contact</h5>
                      <ul>
                          <li><a>Add your coin</a></li>
                          <li><a>Add your store</a></li>
                          <li><a>Contact us</a></li>
                          <li><a>Add your coin</a></li>
                      </ul>
                  </div>
              </div>
              <div className = "col-4 col-lg-2">
                  <div className ="footer-link">
                      <button className="btn btn-primary mb-2">Add your coin</button>
                      <img src={appStoreImg } className=" mb-2"></img>
                      <img src={ggStoreImg} className=""></img>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
}
