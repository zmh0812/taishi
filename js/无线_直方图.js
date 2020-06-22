require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 使用（第二段）
//长安校区无线设备
require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('changan2'));

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

//桃园校区无线设备
require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('taoyuan2'));

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

//太白校区无线设备
require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('taibai2'));

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