import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import './styles/navbar.less'
export default class Nav extends Component {
  render() {
    return (
    <div className ="header-nav">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-xl navbar-light  col-12">
                    <a className="navbar-brand" href="#"><img className="img-fluid" src={logo}></img></a>
                    <button className="navbar-toggler d-xl-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <span className="form-inline my-2 my-lg-0 ml-auto">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Merchant Tools<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add your coin</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Contacts<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link border-item" href="#">Login</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link border-item" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Vi</a>
                                    <a className="dropdown-item" href="#">En</a>
                                </div>
                            </li>
                        </ul>
                            
                        </span>
                    </div>
                </nav> 
            </div>
        </div>
      </div>
    )
  }
}
