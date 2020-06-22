//新的业务
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

require(
    [
        'echarts',
        'echarts/chart/bar' // 使用线性图就加载line模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main'));

        
        var option = {
            legend: {
                data:['区间1','区间2','区间3中正常设备','区间3中超负荷设备','区间4中正常设备','区间4中超负荷设备','区间5中正常设备','区间5中超负荷设备'],
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
            xAxis : [
                {
                    type : 'category',
                    data : ['0时','1时','2时','3时','4时','5时','6时','7时','8时','9时',
                    '10时','11时','12时','13时','14时','15时','16时','17时','18时','19时',
                    '20时','21时','22时','23时'],
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
            yAxis : [
                {
                    type : 'value',
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
                }
            ],
            color:['#c23531', '#d48265', '#91c7ae', '#bdfcc8', '#ff6103', '#ff8000', '#ffd700', '#fff799'],
            series : [
                {
                    name:'区间1',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320, 120, 132, 101, 134, 90,
                         230, 210, 320, 332, 301, 334, 390, 330, 320, 222, 333, 100]
                },
                {
                    name:'区间2',
                    type:'bar',
                    data:[120, 132, 101, 134, 90, 230, 210, 320, 332, 301, 334, 390,
                         330, 320, 320, 332, 301, 334, 390, 330, 320, 222, 333, 444]
                },
                {
                    name:'区间3中正常设备',
                    type:'bar',
                    stack: '区间3',
                    data:[220, 182, 191, 234, 290, 330, 310, 320, 332, 301, 334, 390, 
                        330, 320, 222, 333, 150, 232, 201, 154, 190, 330, 410, 555]
                },
                {
                    name:'区间3中超负荷设备',
                    type:'bar',
                    stack: '区间3',
                    data:[150, 232, 201, 154, 190, 330, 410, 330, 320, 222, 333, 150, 
                        232, 201, 154, 190, 330, 410, 964, 1026, 1679, 1600, 1570, 200]
                },
                {
                    name:'区间4中正常设备',
                    type:'bar',
                    stack: '区间4',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570, 150, 232, 201, 154, 190,
                         330, 410, 330, 320, 222, 333, 150, 620, 732, 701, 734, 1090]
                },
                {
                    name:'区间4中超负荷设备',
                    type:'bar',
                    stack: '区间4',
                    data:[620, 732, 701, 734, 1090, 1130, 1120, 330, 410, 330, 320, 222,
                         333, 150, 620, 732, 701, 734, 1090, 120, 132, 101, 134, 290]
                },
                {
                    name:'区间5中正常设备',
                    type:'bar',
                    stack: '区间5',
                    data:[120, 132, 101, 134, 290, 230, 220, 320, 332, 301, 334, 390,
                         330, 320, 120, 132, 101, 134, 90, 60, 72, 71, 74, 190]
                },
                {
                    name:'区间5中超负荷设备',
                    type:'bar',
                    stack: '区间5',
                    data:[60, 72, 71, 74, 190, 130, 110, 333, 150, 620, 732, 701, 734,
                        120, 132, 101, 134, 290, 230, 220, 320, 332, 301, 334, 390]
                }
            ]
        };
        ;

        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);