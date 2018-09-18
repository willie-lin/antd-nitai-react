import React, { Component } from 'react';
import { Table, Layout } from 'antd';


const columns = [{
    title: '源IP',
    dataIndex: 'ip',
    key: 'ip'
},{
    title:'出错URL',
    dataIndex: 'url',
    key: 'url'
},{
    title: '出错原因',
    dataIndex: 'reason',
    key: 'reason'
},{
    title: '时间',
    dataIndex: 'data',
    key: 'data'
},{
    title: '攻击类型',
    dataIndex: 'AttackType',
    key: 'AttackType'
},{
    title: '攻击次数',
    dataIndex: 'AttackNum',
    key: 'AttackNum'
},{
    title: '攻击站点',
    dataIndex: 'AttackWebSite',
    key: 'AttackWebSite'
}
];

const data = [{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '2',
    ip: '122.142.15.162',
    url: 'http://233.14.123.17/?name=1',
    reason: '数据库异常',
    data: '2018.9.18 15:23:18',
    AttackType: 'SQL注入',
    AttackNum: 12,
    AttackWebSite: 'Web-NT-21'
},{
    key: '3',
    ip: '112.112.115.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '文件锁定',
    data: '2018.9.18 15:23:18',
    AttackType: 'XSS',
    AttackNum: 190,
    AttackWebSite: 'Web-NJ-41'
},{
    key: '4',
    ip: '233.233.233.233',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},{
    key: '1',
    ip: '112.142.15.165',
    url: 'http://223.14.123.17/?name=1',
    reason: '主页篡改',
    data: '2018.9.18 15:23:18',
    AttackType: '命令注入',
    AttackNum: 111,
    AttackWebSite: 'Web-NT-1'
},

];

const ListLog = () => (
    <Table dataSource={data} columns={columns} />
);
export default ListLog;