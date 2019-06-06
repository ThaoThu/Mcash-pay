import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Select} from 'antd'
import './styles/signup.less'
export default class Signup extends Component {
  onChange=()=>{
    console.log('changing..')
  }
  render() {
    return (
        <div className="sign-up d-flex justify-content-center align-items-center">    
        <div className="sign-up__container">   
          <form >
              <div className="d-flex justify-content-between ">
                <div className="form-group ">
                    <input className="form-control firstname sign-up__input" type="text" placeholder ="Firstname" ></input>
                </div>  
                <div className="form-group">
                    <input className="form-control sign-up__input " type="text" placeholder ="Lastname" ></input>
                </div>  
              </div>
              <div className="form-group">
                  <input className="form-control sign-up__input" type="text" placeholder ="Email" ></input>
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-group">
                    <input className="form-control sign-up__input emailcode"  type="text" placeholder ="Email code" ></input>
                </div>  
                <div className="form-group ">
                    <input className="form-control getcode main-color text-center  " defaultValue="60" type="text"  ></input>
                </div>  
              </div>
              <div className="form-group">
                  <input className="form-control sign-up__input" type="password" placeholder ="Password" ></input>
              </div>
              <div className="form-group">
                  <input className="form-control sign-up__input " type="password" placeholder ="Cornfirm Password" ></input>
              </div>
              <div className="form-group select">
                  <div className="break"></div>
                  <Select defaultValue="lucy" style={{ width: 368, height:50 }} >
                    <Option value="lucy">Lucy</Option>
                  </Select>
              </div>
  
              <div  className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
              <div class="custom-control custom-checkbox " style={{marginTop:'15px'}}>
                <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" />
                <label class="custom-control-label" for="customCheck">Check this custom checkbox</label>
              </div>
              <button className="sign-up__btn btn btn-primary w-100">Sign up</button>
          </form>
            <p><Link className="main-color" to="/">Already have an account ?</Link></p>
         
          </div>
      </div>
    )
  }
}
