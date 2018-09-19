//主要内容显示
import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Index from '../../page/index/index'
// import Button from 'pages/basic/button'
// import Icons from 'pages/basic/icon'
// import Carousels from 'pages/basic/carousel'
// import Tab from 'pages/basic/tab'
// import Tree from 'pages/basic/tree'
// import Modal from 'pages/basic/modal'
// import Tip from 'pages/basic/tip'
// import RichText from 'pages/basic/richText'
// import BasicForm from 'pages/form/basic'
// import OtherForm from 'pages/form/other'
import FixedTable from '../../page/tables/FixedTable';
import Echarts from '../../page/charts/Echarts';
import Topology from '../../page/charts/Topology';
import EditUser from '../../page/user/editUser/editUser';
import AddUser from '../../page/user/addUser/addUser';
import ListVoter from '../../page/voter/listVoter/listVoter';
import ListExecutive from '../../page/executive/listexecutive/list_executive';
import ListLog from '../../page/log/listLog/llist_llog';
import FeedBack from '../../page/log/LogFeedback/LogFeedBack';
// import TodoList from 'pages/utils/todoList'
// import MortgageCal from 'pages/utils/mortgage'
// import Map from 'pages/map/index'
// import Gallery from 'pages/gallery/index'

import './index.less'

class Content extends React.Component {
  render() {
    return (
      <Layout.Content className="content" id="content">
          <Route path="/app/index" component={Index} />
          <Route path="/app/user/user_edit" component={EditUser}/>
          <Route path="/app/user/user_add" component={AddUser}/>
          <Route path="/app/user/user_list" component={FixedTable}/>
          <Route path="/app/situational/attack_map"  component={Echarts}/>
          <Route path="/app/topology/voter_executive" component={Topology}/>
          <Route path="/app/voter/voter_list" component={ListVoter} />
          <Route path="/app/executive/executive_list" component={ListExecutive}/>
          <Route path="/app/log/voter_log" component={ListLog}/>
          <Route path="/app/log/feedback" component={FeedBack} />


      </Layout.Content>
    )
  }
}

export default Content
