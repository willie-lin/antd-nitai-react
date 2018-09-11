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
      score: ['2036', '2089', '1743', '1920', '1954', '2251'],
      offs: ['596', '548', '601', '552', '591', '600'],
      reb: ['610', '533', '416', '565', '639', '709'],
      assit: ['551', '488', '511', '514', '646', '747'],
      steal: ['129', '121', '109', '104', '92', '116']
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
              <div>中断断数</div>
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
          <Col span={12} className="gutter-line">
            <div className='col-box'>
              <Card title="得分对比图" bordered={false}>
                <Bar
                  option={{
                    years: this.state.years, 
                    scoreCommon: this.state.score,
                    offs: this.state.offs
                  }} 
                />
              </Card>
            </div>
          </Col>
        </Row>
        {/* 消息任务 */}
        <Row gutter={24} className="static">
          <Col span={12} className="gutter-line">
            <div className='col-box'>
              <Card title="我的任务" bordered={false}>
                <Timeline pending={<a>睡觉</a>}>
                  <Timeline.Item color="green">先跑个20KM 9:00 AM</Timeline.Item>
                  <Timeline.Item color="green">柔韧性训练 10:30 AM</Timeline.Item>
                  <Timeline.Item color="red">
                    <p>投进1000个中投 2:00 PM</p>
                    <p>投进100个三分 3:00 PM</p>
                    <p>进100个罚球 4:00 PM</p>
                  </Timeline.Item>
                  <Timeline.Item>
                    <p>力量训练 5:00 PM</p>
                    <p>休息，补充体力 7:00 PM</p>
                  </Timeline.Item>
                </Timeline>
              </Card>
            </div>
          </Col>
          <Col span={12} className="gutter-line">
            <div className='col-box'>
              <Card title="我的消息" bordered={false}>
                <div>
                  <img className='info-img' src={Wade} />
                  <div className="clear">
                    <a className="block">D-wade</a>
                    <p className="text-muted">今晚有空吗？附近新开了一家店，去试试。。</p>
                  </div>
                </div>
                <div className='info-block'>
                  <img className='info-img' src={Pual} />
                  <div className="clear">
                    <a className="block">C-pual</a>
                    <p className="text-muted">周末一起训练啊，我买了最新的器材</p>
                  </div>
                </div>
                <div className='info-block'>
                  <img className='info-img' src={Anthony} />
                  <div className="clear">
                    <a className="block">K-anthony</a>
                    <p className="text-muted">老弟，有空切磋切磋，我要把你按在地上摩擦！！！</p>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index