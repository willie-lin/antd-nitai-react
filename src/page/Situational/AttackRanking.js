import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';  // 引入echarts 模块
import 'echarts/lib/chart/bar' // 引入Echarts 柱状图
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class AttackRanking extends Component{

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            // option = {
            title: {
                text: '攻击排行榜',
                subtext: '实时数据展示'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },

            xAxis: {
                data: [
                    "SQL注入",
                    "XSS",
                    "CSRF",
                    "文件上传",
                    "PHP脚本攻击",
                    "JS脚本攻击"

                ]
            },
            yAxis: {},
            series: [{
                name: '次数',
                type: 'bar',
                data: [5000, 5600, 7999, 6666, 4333,3256]
            }]
        });
    }


    render() {
        return (
            <div id="main" style={{ width: 800, height: 600 }}></div>
        );
    }

}
export default AttackRanking;