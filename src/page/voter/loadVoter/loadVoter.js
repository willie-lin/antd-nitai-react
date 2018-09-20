import React, { Component } from 'react';
import { Table, Layout } from 'antd';

const columns = [{
    title: '吞吐量',
    dataIndex: 'throughput',
    key:'throughput'
},{
    title: 'CPU',
    dataIndex: 'cpu',
    key: 'cpu'
},{
    title: '内存',
    dataIndex: 'ram',
    key: 'ram'
}
];

const data = [{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},{
    key: '1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%'
},
]


const LoadVoter = () => (
  <Table dataSource={data} columns={columns} />
);
export default LoadVoter;
