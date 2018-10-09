import React, { Component } from 'react';
import { Table, Layout } from 'antd';

/**
 * 执行体警报
 * @type {*[]}
 */

const columns = [{
    title: '执行体IP',
    dataIndex: 'ip',
    key: 'ip'
},{
    title: '当前状态',
    dataIndex: 'status',
    key: 'status'
},{
    title: '出错原因',
    dataIndex: 'error',
    key: 'error'
},{
    title: '处理方式',
    dataIndex: 'method',
    key: 'method'
}
];

const data =[
    {
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'true',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'false',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'false',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'false',
        error: 'collapse',
        method: 'reboot'
    },{
        key: '1',
        ip: '122.13.144.156',
        status: 'false',
        error: 'collapse',
        method: 'reboot'
    },
];

const AbnormalExecutive = () => (
    <Table dataSource={data} columns={columns} />
);
export default AbnormalExecutive;