//数据折线图
import React from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  option = (data) => {
    return {
      title: {
        show: false,
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: data.type
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
            saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.years
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: data.type[3],
          type:'line',
          stack: '总量',
          data: data.steal
        },
        {
          name: data.type[1],
          type:'line',
          stack: '总量',
          data: data.reb
        },
        {
          name: data.type[2],
          type:'line',
          stack: '总量',
          data: data.assit
        },
        {
          name: data.type[0],
          type:'line',
          stack: '总量',
          data: data.score
        }
      ]
    }
  }

  render () {
    return (
      <ReactEcharts
        option={this.option(this.props.option)}
        style={{height: '350px', width: '100%', textAlign: 'center'}}
        className={'react_for_echarts'}
      />
    )
  }
}

export default Line