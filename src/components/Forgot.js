import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Select} from 'antd'
import './styles/forgot.less'
export default class Forgot extends Component {
  onChange=()=>{
    console.log('changing..')
  }
  render() {
    return (
        <div className="forgot d-flex justify-content-center align-items-center">    
        <div className="forgot__container">   
        <h3 className="sign-in__title text-center">Forgot password</h3>
          <form >
              
              <div className="form-group">
                  <input className="form-control forgot__input" type="text" placeholder ="Email" ></input>
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-group">
                    <input className="form-control  emailcode"  type="text" placeholder ="Email code" ></input>
                </div>  
                <div className="form-group ">
                    <input className="form-control getcode main-color text-center  " defaultValue="Get code" type="text"  ></input>
                </div>  
              </div>
              <div className="form-group">
                  <input className="form-control forgot__input" type="password" placeholder ="Password" ></input>
              </div>
              <div className="form-group">
                  <input className="form-control forgot__input " type="password" placeholder ="Cornfirm Password" ></input>
              </div>
              
  
              <div  className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
              
              <button className="forgot__btn btn btn-primary w-100">Sign up</button>
          </form>
            <p><Link className="main-color" to="/">Sign in to your account ?</Link></p>
         
          </div>
      </div>
    )
  }
}
