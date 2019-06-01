import React, { Component } from 'react';
import { Input, Table,Divider, Tag  } from 'antd';
import './styles/wallet.less'
const Search = Input.Search;

const columns = [
   
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: '1',
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: '2',
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Available Balance',
      dataIndex: 'avaiBalance',
      key: '3',
    },
    {
      title: 'Total Fee',
      dataIndex: 'tFee',
      key:'4'
    },
    {
      title: 'Total Balance',
      dataIndex: 'tBalance',
      key:'5'
    },
    {
      title: 'BTC Value',
      dataIndex: 'btcValue',
      key:'6'
    },
    {
      title: 'USD Value',
      dataIndex: 'usdValue',
      key:'7'
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Deposite</a>
          <Divider type="vertical" />
          <a href="javascript:;">Withdraw</a>
        </span>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      symbol:'HTC(coin)',
      name: 'Cohn Brown',
      avaiBalance:10.32,
      tFee: 0.4,
      tBalance: 1,
      btcValue:23,
      usdValue:12
   
    },
    {
      key: '1',
      symbol:'BTC(coin)',
      name: 'Hohn Brown',
      avaiBalance:11.32,
      tFee: 0.4,
      tBalance: 1,
      btcValue:23,
      usdValue:12
   
    },
    {
      key: '1',
      symbol:'BTC(coin)',
      name: 'John Brown',
      avaiBalance:10.32,
      tFee: 0.4,
      tBalance: 1,
      btcValue:23,
      usdValue:12
   
    },
    
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
export default class Wallet extends Component {
  render() {
    return (
      <div className="wallet mt-50">
          <div className="container">
            <h4 className="text-center clear">MY WALLET/ SUPPORTED COIN</h4>
            <Search
                className="float-right"
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200,borderRadius:'10px' }}
            />
           <Table rowSelection={rowSelection} columns={columns} dataSource={data} />

      
          </div>
      </div>
    )
  }
}
