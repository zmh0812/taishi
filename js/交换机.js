//交换机设备
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

require(
    [
        'echarts',
        'echarts/chart/line' // 使用线性图就加载line模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('switch1'));

        var option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['家属', '教学', '学生'],
                textStyle: {
                    color: 'white'
                }
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
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#ffffff'
                    }
                }
            },
            color: ['#62d1de', '#54d6b6', '#ffd454', '#ffa361'],
            series: [
                {
                    name: '家属',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '教学',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '学生',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
            ]
        };
        ;

        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);

require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('switch2'));

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['CPU利用率', '内存利用率', 'ping值', '总流量'],
                textStyle: {
                    color: '#ffffff'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                }
            ],

            yAxis: [
                {
                    type: 'value',
                    name: '',
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                }
            ],
            color: ['#62d1de', '#54d6b6', '#ffd454', '#ffa361'],
            series: [
                {
                    name: 'CPU利用率',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '内存利用率',
                    type: 'bar',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'ping值',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                },
                {
                    name: '总流量',
                    type: 'bar',
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        ;

        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);

require(
    [
        'echarts',
        'echarts/chart/pie' // 使用饼图就加载pie模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('switch3'));

        var option = {
            title: {
                text: '',
                subtext: '',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['家属', '教学', '学生'],
                textStyle: {
                    color: 'white'
                }
            },
            color: ['#62d1de', '#54d6b6', '#ffd454', '#ffa361'],
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '家属' },
                        { value: 310, name: '教学' },
                        { value: 234, name: '学生' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        ;

        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);