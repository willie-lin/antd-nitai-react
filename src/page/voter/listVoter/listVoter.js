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
    dataIndex: 'deadline',
    key: 'deadline'

},{
    title: '网站个数',
    dataIndex: ''
}

];