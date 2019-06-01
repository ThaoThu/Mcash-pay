import React, { Component } from 'react';
import { Menu ,Select} from 'antd';
class RightMenu extends Component {
    render() {
        return (
            <div>
                 <Menu mode={this.props.mode}>
        <Menu.Item >
            <a>Merchant Tools</a>
        </Menu.Item>
        <Menu.Item >
            <a>Add your coin</a>
        </Menu.Item>
        <Menu.Item >
            <a>Contacts</a>
        </Menu.Item>
        <Menu.Item >
            <a>Login</a>
        </Menu.Item>
        <Menu.Item >
            <a>Sign Up</a>
        </Menu.Item>
          <Select name="language" defaultValue="vn"> 
            <Option value="vn">Language</Option>
          </Select>
      </Menu>
            </div>
        );
    }
}

export default RightMenu;
