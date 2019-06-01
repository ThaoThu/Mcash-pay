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
      <div className="sign-in ">    
        <h3 className="sign-in__title text-center">Sign in to your account</h3>
        <form >
            <div className="form-group">
                <input className="form-control" type="text" placeholder ="Email" value={this.state.email}></input>
            </div>
            <div className="form-group">
                <input className="form-control" type="password" placeholder ="Password" value={this.state.password}></input>
            </div>
            <div  className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
            <button className="sign-in__btn btn btn-primary w-100">Login</button>
        </form>
        <p><Link to="">Forgot password</Link></p>
        <p><Link to=""> Don't have an account</Link></p>
        <p>If there are too many faild login attempts your account will be locked for 60 minutes</p>
      </div>
    )
  }
}
