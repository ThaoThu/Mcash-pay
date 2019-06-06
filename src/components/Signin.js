import React, { Component } from 'react'
import './styles/signin.less'
import {Link} from 'react-router-dom'
export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }

    }
    handleInput=(e)=>{

    }

  render() {
    return (
      <div className="sign-in__wrapper d-flex justify-content-center align-items-center">    
        <div className="sign-in__container">   
          <h3 className="sign-in__title text-center">Sign in to your account</h3>
          <form >
              <div className="form-group">
                  <input className="form-control sign-in__input" type="text" placeholder ="Email" value={this.state.email}></input>
              </div>
              <div className="form-group">
                  <input className="form-control sign-in__input" type="password" placeholder ="Password" value={this.state.password}></input>
              </div>
              <div  className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
              <button className="sign-in__btn btn btn-primary w-100">Login</button>
          </form>
          <div className="d-flex justify-content-between sign-in__bottom">
              <p><Link to="" className="gray-color">Forgot password</Link></p>
              <p ><Link to=""className="main-color"> Don't have an account</Link></p> 
          </div>
        
          <p className="gray-color sign-in__fail">If there are too many faild login attempts your account will be locked for 60 minutes</p>

          </div>
      </div>
    )
  }
}
