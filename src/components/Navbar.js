import React, { Component } from 'react'
import {Menu, Button, Drawer, Select} from 'antd'
import menuIcon from '../assets/images/menu.png'
import './styles/navbar.less'
import RightMenu from './RightMenu'

export default class Navbar extends Component {
  constructor(props){
      super(props);
      this.state={
        visible:false
      }
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <nav className="menu-bar">
        <div className="menu-bar__logo" >
          <a>Logo</a>
        </div>
        <div className="menu-right">
            <RightMenu mode="horizontal"></RightMenu>
        </div>
        {/* <Button className="menu__mobile-btn" type="primary" > */}
            <span className="bars-btn">
                <img src={menuIcon} onClick={this.showDrawer}></img>
            </span>
        {/* </Button> */}
        <Drawer
          title="drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
              <RightMenu mode="inline"></RightMenu>
          </Drawer>
      </nav>
    )
  }
}
