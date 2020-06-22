//异步加载数据版本
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
        var myChart = ec.init(document.getElementById('main'));

        myChart.setOption({
            legend: {
                data: ['区间1', '区间2', '区间3中正常设备', '区间3中超负荷设备', '区间4中正常设备', '区间4中超负荷设备', '区间5中正常设备', '区间5中超负荷设备'],
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
            xAxis: [
                {
                    type: 'category',
                    data: ['0时', '1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时',
                        '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时',
                        '20时', '21时', '22时', '23时'],
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
            color: ['#c23531', '#d48265', '#91c7ae', '#bdfcc8', '#ff6103', '#ff8000', '#ffd700', '#fff799'],
            series: [
                {
                    name: '区间1',
                    type: 'bar',
                    data: []
                },
                {
                    name: '区间2',
                    type: 'bar',
                    data: []
                },
                {
                    name: '区间3中正常设备',
                    type: 'bar',
                    stack: '区间3',
                    data: []
                },
                {
                    name: '区间3中超负荷设备',
                    type: 'bar',
                    stack: '区间3',
                    data: []
                },
                {
                    name: '区间4中正常设备',
                    type: 'bar',
                    stack: '区间4',
                    data: []
                },
                {
                    name: '区间4中超负荷设备',
                    type: 'bar',
                    stack: '区间4',
                    data: []
                },
                {
                    name: '区间5中正常设备',
                    type: 'bar',
                    stack: '区间5',
                    data: []
                },
                {
                    name: '区间5中超负荷设备',
                    type: 'bar',
                    stack: '区间5',
                    data: []
                }
            ]
        });

        myChart.showLoading(); //数据加载完之前先显示一段简单的loading动画

        //数量数组（实际用来盛放Y坐标值）
        var num1 = [];
        var num2 = [];
        var num3 = [];
        var num4 = [];
        var num5 = [];
        var num6 = [];
        var num7 = [];
        var num8 = [];

        $.ajax({
            type: "get",
            async: true, //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
            url: "${pageContext.request.contextPath }/Echarts",  //API
            dataType: "json",
            success: function (data) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                if (data.code == 'success') {
                    var obj = eval(data.items);     //解析后台传来的json数据
                    for (var i = 0; i < obj.length; i++) {
                        num1.push(obj[i].num1);
                    }
                    for (var i = 0; i < obj.length; i++) {
                        num2.push(obj[i].num2);
                    }
                    for (var i = 0; i < obj.length; i++) {
                        num3.push(obj[i].num3);
                    }
                    for (var i = 0; i < obj.length; i++) {
                        num4.push(obj[i].num4);
                    }
                    for (var i = 0; i < obj.length; i++) {
                        num5.push(obj[i].num5);
                    }
                    for (var i = 0; i < obj.length; i++) {
                        num6.push(obj[i].num6);
                    }
                    for (var i = 0; i < obj.length; i++) {
                        num7.push(obj[i].num7);
                    }
                    for (var i = 0; i < obj.length; i++) {
                        num8.push(obj[i].num8);
                    }
                    myChart.hideLoading(); //隐藏加载动画
                    myChart.setOption({ //加载数据图表
                        series: [
                            {
                                // 根据名字对应到相应的系列
                                name: '区间1',
                                data: num1
                            },
                            {
                                name: '区间2',
                                data: num2
                            },
                            {
                                name: '区间3中正常设备',
                                data: num3
                            },
                            {
                                name: '区间3中超负荷设备',
                                data: num4
                            },
                            {
                                name: '区间4中正常设备',
                                data: num5
                            },
                            {
                                name: '区间4中超负荷设备',
                                data: num6
                            }, 
                            {
                                name: '区间5中正常设备',
                                data: num7
                            },
                            {
                                name: '区间5中超负荷设备',
                                data: num8
                            }, 
                        ]
                    });
                } else {
                    alert("后台数据获取失败!");
                }
            },
            error: function (errorMsg) {
                //请求失败时执行该函数
                alert("图表请求数据失败!");
                myChart.hideLoading();
            }
        })

        //为echarts对象加载数据
        myChart.setOption(option);

    }
);




