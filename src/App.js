import React, { Component } from 'react';
import logo from './logo.svg';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import SiderCustom from './components/SiderCustom';
// import HeaderCustom from  './components/HeaderCustom';
// import avatar from './utils/Colors';
// import {  Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
// import Dashboard from './components/dashboard/Dashboard';
// import Headers from "./layout/header";


class App extends Component {
    render(){
        return(
            <div className="App">
                <Headers className='App-header'>
                    <img src={logo} className="App-logo" align="logo" />
                    <h1 className="App-title">Welcome to ni tai</h1>
                </Headers>
                <p className="App-intro">
                    To get started edit <code>src/App.js</code> and save to reload
                </p>
            </div>
        );
    }
}

export default App;