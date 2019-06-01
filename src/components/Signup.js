import React, { Component } from 'react'
import {Row,Col,Input,Select,Checkbox,Button} from 'antd'

import './styles/signup.less'
export default class Signup extends Component {
  onChange=()=>{
    console.log('changing..')
  }
  render() {
    return (
      <div>
          <Row>
                <Col span = {12}  offset = {6} className="signup-wrapper">
                    <Row gutter={30}>
                        <Col span ={12} >
                            <Input placeholder="Firstname" className="mb-20"/>
                        </Col>
                        <Col span ={12}>
                            <Input placeholder="Lastname" className="mb-20"/>
                        </Col>
                        <Col span ={12} >
                            <Input placeholder="Email" className="mb-20"/>
                        </Col>
                        <Col span ={12}>
                            <Input placeholder="Confirm Email" className="mb-20"/>
                        </Col>
                        <Col span ={12} >
                            <Input placeholder="Password" className="mb-20"/>
                        </Col>
                        <Col span ={12}>
                            <Input placeholder="Confirm Password" className="mb-20"/>
                        </Col>
                        <Col span ={22} offset={1} className="mb-20" >
                            <label className="signup-label">Country of Residence</label>
                            <Select defaultValue="Option1" className="w-100">
                                <Option value="Option1">Canada</Option>
                                <Option value="Option2">Option2</Option>
                            </Select>
                        </Col>
                        <Col span ={22} offset={1} className="mb-20" >
                            <label className="signup-label">Timezone -Select any city with the time as yours</label>
                            <Select defaultValue="Option1" className="w-100">
                                <Option value="Option1">Toronto </Option>
                                <Option value="Option2">Option2</Option>
                            </Select>
                        </Col>
                        <Col span ={22} offset={1} className="mb-10" >
                            <label className="signup-label">By clicking the register below, I certify that:</label>
                            <Checkbox onChange={this.onChange}>Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi</Checkbox>
                        </Col>
                        <Col span ={22} offset={1} className="mb-10" >
                            <Checkbox onChange={this.onChange}>Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi</Checkbox>
                        </Col>
                        <Col span ={22} offset={1} className="mb-10" >
                            <Checkbox onChange={this.onChange}>Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi</Checkbox>
                        </Col>
                        <Col span ={22} offset={1} className="mb-10" >
                            <img className="d-block" src="https://picsum.photos/200/100"></img>
                            <span className="mb-10">Type the character in the image you see above</span> <Input className="input-code"/>
                            <span><a>[Different image]</a></span>
                        </Col>
                        <Col span ={22} offset={1} className="mb-10" >
                            <Button type="primary" className="d-block">Register</Button>
                            <a>Already have an account ?</a>
                        </Col>
                    </Row>
                </Col>
          </Row>
      </div>
    )
  }
}
