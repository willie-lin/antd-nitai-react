import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

const option = {
    title: {
        text: ''
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: "center",
        show: false,
        data: ["宿主机", "表决器", '执行体']
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: '宿主机',
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: '表决器',
                itemStyle: {
                    normal: {
                        color: "#4592FF",
                    }
                }
            }, {
                name: '执行体',
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                name: 'WEB1',
                draggable: true,
            }, {
                name: 'WEB2',
                category: 1,
                draggable: true,
            }, {
                name: 'WEB3',
                category: 1,
                draggable: true,
            }, {
                name: 'WEB4',
                category: 1,
                draggable: true,
            }, {
                name: 'BJ1',
                category: 1,
                draggable: true,
            }, {
                name: 'BJ2',
                category: 1,
                draggable: true,
            }, {
                name: 'BJ3',
                category: 1,
                draggable: true,
            }, {
                name: 'BJ4',
                category: 1,
                draggable: true,
            }, {
                name: 'ZX1',
                category: 1,
                draggable: true,
            }, {
                name: 'ZX2',
                category: 1,
                draggable: true,
            }, {
                name: 'ZX3',
                category: 1,
                draggable: true,
            }, {
                name: 'ZX4',
                category: 1,
                draggable: true,
            }, {
                name: 'ZX5',
                category: 1,
                draggable: true,
            }],
            links: [{
                source: 0,
                target: 1,
                category: 0,
                value: '宿主机'
            }, {
                source: 0,
                target: 2,
                value: '表决器'
            }, {
                source: 0,
                target: 3,
                value: '执行体'
            }, {
                source: 0,
                target: 4,
                value: '宿主机'
            }, {
                source: 1,
                target: 2,
                value: '表决器'
            }, {
                source: 0,
                target: 5,
                value: '执行体'
            }, {
                source: 4,
                target: 5,
                value: '宿主机'
            }, {
                source: 2,
                target: 8,
                value: '表决器'
            }, {
                source: 0,
                target: 12,
                value: '执行体'
            }, {
                source: 6,
                target: 11,
                value: '宿主机'
            }, {
                source: 6,
                target: 3,
                value: '表决器'
            }, {
                source: 7,
                target: 5,
                value: '执行体'
            }, {
                source: 9,
                target: 10,
                value: '宿主机'
            }, {
                source: 3,
                target: 10,
                value: '表决器'
            }, {
                source: 2,
                target: 11,
                value: '执行体'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};
class EchartsToggle extends Component {
    render() {
        return (
            <ReactEcharts
                option={option}
                style={{height: '400px', width: '100%'}}
                className={'react_for_echarts'}
            />
        )
    }
}

export default EchartsToggle;