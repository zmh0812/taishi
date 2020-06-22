require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

//长安校区
require(
    [
        'echarts',
        'echarts/chart/pie' // 使用饼图就加载pie模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('changan3'));

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

//桃园校区
require(
    [
        'echarts',
        'echarts/chart/pie' // 使用饼图就加载pie模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('taoyuan3'));

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

//太白校区
require(
    [
        'echarts',
        'echarts/chart/pie' // 使用饼图就加载pie模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('taibai3'));

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