//首页
import React from 'react'
import { Row, Col, Card, Timeline } from 'antd'
import './index.less'
import Circle from './circle'
import Line from './line'
import Bar from './bar'
import Pual from '../../images/pual.jpg'
import Wade from '../../images/wade.jpg'
import Anthony from '../../images/anthony.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // type: ['得分','篮板','助攻','抢断'],
      type: ['URL','木马','频率','时间'],
      years: ['2013', '2014', '2015', '2016', '2017', '2018'],
      score: ['20362', '21089', '21743', '31920', '11954', '32251'],
      offs: ['11596', '21548', '12601', '12552', '21591', '22600'],
      reb: ['13610', '21533', '15416', '18565', '25639', '31709'],
      assit: ['13551', '21488', '15511', '22514', '11646', '21747'],
      steal: ['12129', '23121', '27109', '31104', '33192', '11116']
    }
  }

  componentDidMount () {
    
  }

  render () {
    return (
      <div className="gutter-example button-demo">
        {/* 数据能力 */}
        <Row gutter={24}>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>攻击类型</div>
              <Circle option={{color: '#108ee9', rate: 98, name: '得分'}} />
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>主机IP</div>
              <Circle option={{color: '#F09B22', rate: 95, name: '篮板'}} />
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>URL</div>
              <Circle option={{color: '#690', rate: 96, name: '助攻'}} />
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>攻击来源</div>
              <Circle option={{color: '#f5222d', rate: 90, name: '抢断'}} />
            </div>
          </Col>
        </Row>
        {/* 数据统计 */}
        <Row gutter={24} className="static">
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>攻击次数</div>
              <div className='number'>30,000</div>
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>防御数</div>
              <div className='number'>8,000</div>
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>拦截数</div>
              <div className='number'>8,000</div>
            </div>
          </Col>
          <Col span={6} className="gutter-row">
            <div className='col-box'>
              <div>中断数</div>
              <div className='number'>2,000</div>
            </div>
          </Col>
        </Row>
        {/* 折线图 */}
        <Row gutter={24} className="static">
          <Col span={12} className="gutter-line">
            <div className='col-box'>
              <Card title="数据走势图" bordered={false}>
                <Line 
                  option={{
                    type: this.state.type,
                    years: this.state.years, 
                    score: this.state.score, 
                    reb: this.state.reb, 
                    assit: this.state.assit, 
                    steal: this.state.steal
                  }} 
                />
              </Card>
            </div>
          </Col>
          {/*<Col span={12} className="gutter-line">*/}
            {/*<div className='col-box'>*/}
              {/*<Card title="得分对比图" bordered={false}>*/}
                {/*<Bar*/}
                  {/*option={{*/}
                    {/*years: this.state.years,*/}
                    {/*scoreCommon: this.state.score,*/}
                    {/*offs: this.state.offs*/}
                  {/*}}*/}
                {/*/>*/}
              {/*</Card>*/}
            {/*</div>*/}
          {/*</Col>*/}
        </Row>
        {/* 消息任务 */}
        <Row gutter={24} className="static">
          <Col span={12} className="gutter-line">
            <div className='col-box'>
              <Card title="开发进度" bordered={false}>
                <Timeline pending={<a>完善中...</a>}>
                  <Timeline.Item color="green">主页开发</Timeline.Item>
                  <Timeline.Item color="green">模块化完成</Timeline.Item>
                  <Timeline.Item color="red">
                    <p>后台管理</p>
                    <p>实时信息</p>
                    {/*<p>进100个罚球 4:00 PM</p>*/}
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>可视化地图</p>
                    <p>更新信息</p>
                  </Timeline.Item>
                </Timeline>
              </Card>
            </div>
          </Col>
          {/*<Col span={12} className="gutter-line">*/}
            {/*<div className='col-box'>*/}
              {/*<Card title="我的消息" bordered={false}>*/}
                {/*<div>*/}
                  {/*<img className='info-img' src={Wade} />*/}
                  {/*<div className="clear">*/}
                    {/*<a className="block">D-wade</a>*/}
                    {/*<p className="text-muted">今晚有空吗？附近新开了一家店，去试试。。</p>*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className='info-block'>*/}
                  {/*<img className='info-img' src={Pual} />*/}
                  {/*<div className="clear">*/}
                    {/*<a className="block">C-pual</a>*/}
                    {/*<p className="text-muted">周末一起训练啊，我买了最新的器材</p>*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className='info-block'>*/}
                  {/*<img className='info-img' src={Anthony} />*/}
                  {/*<div className="clear">*/}
                    {/*<a className="block">K-anthony</a>*/}
                    {/*<p className="text-muted">老弟，有空切磋切磋，我要把你按在地上摩擦！！！</p>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</Card>*/}
            {/*</div>*/}
          {/*</Col>*/}
        </Row>
      </div>
    )
  }
}

export default Index