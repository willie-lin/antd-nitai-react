import React, { Component } from 'react';
import { Table, Layout } from 'antd';

const columns = [{

    title: '编号',
    dataIndex: 'id',
    key: 'id'
},{
    title: 'IP',
    dataIndex: 'ip',
    key: 'ip',
},{
    title: '创建时间',
    dataIndex: 'createAt',
    key: 'createAt'
},{
    title: '所属表决器',
    dataIndex: 'voter',
    key: 'voter'
},{
    title: '修改日期',
    dataIndex: 'updateAt',
    key: 'updateAt'
}
];


const data = [{
    key: '1',
    id: 'NT-123',
    ip: '192.168.0.1',
    createAt: '2018.09.13 12:37:26',
    voter: 'NJ-123456',
    updateAt: '2018.09.15 06:23:48'
},
    {
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    }, {
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },{
        key: '1',
        id: 'NT-123',
        ip: '192.168.0.1',
        createAt: '2018.09.13 12:37:26',
        voter: 'NJ-123456',
        updateAt: '2018.09.15 06:23:48'
    },
];



const ListExecutive = () => (
    <Table dataSource={data} columns={columns} />
);

export default ListExecutive;