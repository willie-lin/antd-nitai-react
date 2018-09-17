import React, { Component } from 'react';
import { Table } from 'antd';

const columns =[{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
},{
    title: 'MAC',
    dataIndex: 'mac',
    key: 'mac'
},{
    title: '当前状态',
    dataIndex: 'status',
    key: 'status'
},{
    title: '报警次数',
    dataIndex: 'alarms',
    key: 'alarms'
}, {
    title: '创建日期',
    dataIndex: 'createAt',
    key: 'createAt'
}, {

    title: '截至日期',
    dataIndex: 'deadAt',
    key: 'deadAt'

},{
    title: '网站个数',
    dataIndex: 'website',
    key: 'website'
},
    {
        title: '执行体IP',
        dataIndex: 'executive_ip',
        key: 'executive_ip'
    }
];

const data =[{
    key: '1',
    id: 'NJ-123456',
    mac: '01:23:45:67:89:ab',
    status: 'True',
    alarms: '2',
    createAt: '2018-03-09 18:06:09',
    deadAt: '2019-03-09 18:06:09',
    website: '19',
    executive_ip: '117.135.168.195'
},
    {
        key: '2',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '3',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '4',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '5',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '6',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '7',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '8',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '9',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '10',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '11',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '12',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '13',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '14',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '15',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '16',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '17',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
    {
        key: '18',
        id: 'NJ-123456',
        mac: '01:23:45:67:89:ab',
        status: 'True',
        alarms: '2',
        createAt: '2018-03-09 18:06:09',
        deadAt: '2019-03-09 18:06:09',
        website: '19',
        executive_ip: '117.135.168.195'
    },
];

const ListVoter = () => (
    <Table dataSource={data} columns={columns} />
);

export default ListVoter;