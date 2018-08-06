import react, { Component } from 'react';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import screenfull from 'screenfull';
import { gitOauthToken, gitOauthInfo } from '../axios';
// import queryString
import avater from '../utils/Colors';
import SiderCustom from './SiderCustom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const { Header } = Layout;
const MennItemGroup = Mean.ItemGroup;

class HeaderCustom extends Component {

    state = {
        user: '',
        visible: false,
    };

    componentDisMount() {

    }

}