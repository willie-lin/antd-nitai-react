import React, { Component } from 'react';
import { Table } from 'antd';


const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
},{
    title: 'NAME',
    dataIndex: 'name',
    key: 'name'

}, {
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
},{
    title: '服务器类型',
    dataIndex: 'serverName',
    key: 'serverName'

}, {
        title: 'DATABASES',
        dataIndex: 'database',
        key: 'database'
    }
];

const data = [{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},{
    key: '1',
    id: 'NT-123456',
    name: 'web1',
    throughput: 11111,
    cpu: '65%',
    ram: '80%',
    serverName: 'Nginx',
    database: '1GB'
},]

const LoadExecutive = () => (
    <Table dataSource={data} columns={columns} />
);

export default LoadExecutive;