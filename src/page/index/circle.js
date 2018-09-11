//圆形图表
import React from 'react';
// import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //配置函数
  option = (data) => {
    return {
      series: [
        {
          name: data.name,
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          legendHoverLink: false,
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: function() {
                return data.rate+'%'
              },
              textStyle: {
                fontSize: 20,
                color: data.color
              }
            },
            emphasis: {
              show: false,
              // textStyle: {
              //   fontSize: '30',
              //   fontWeight: 'bold'
              // }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {
              value: data.rate, 
              name: data.name, 
              label: {normal: {show: true}},
              itemStyle:{
                normal:{
                  color: data.color
                }
              }
            },
            {
              value: 100-data.rate,
              name:'',
              itemStyle:{
                normal:{
                  color:'#d9d9d9'
                }
              }
            }
          ]
        }
      ]
    }
  }

  render () {
    return (
      <ReactEcharts
        option={this.option(this.props.option)}
        style={{height: '150px', width: '100%', textAlign: 'center'}}
        className={'react_for_echarts'}
      />
    )
  }
}

export default Circle