//柱状图
import React from 'react';
// import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  option = (data) => {
    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['常规赛', '季后赛']
      },
      xAxis: {
        type: 'category',
        data: data.years
      },
      yAxis: {
          type: 'value'
      },
      series: [
        {
          name: '常规赛',
          data: data.scoreCommon,
          type: 'bar'
        },
        {
          name: '季后赛',
          data: data.offs,
          type: 'bar'
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

export default Bar