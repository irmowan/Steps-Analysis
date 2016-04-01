option = {
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: false},
            saveAsImage: {show: false}
        }
    },
    legend: {
        data:['步数','距离']
    },
    xAxis: [
        {
            type: 'category',
            data: ['4月','5月','6月','7月','8月','9月','10月','11月','12月','1月','2月','3月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '步数',
            min: 0,
            max: 400000,
            interval: 40000,
            axisLabel: {
                formatter: '{value} 步'
            }
        },
        {
            type: 'value',
            name: '距离',
            min: 0.0,
            max: 300.0,
            interval: 30.0,
            axisLabel: {
                formatter: '{value} km'
            }
        }
    ],
    series: [
        {
            name:'步数',
            type:'bar',
            data:[310689, 346670, 261315, 321501, 279737, 235670, 208599, 208371, 234276, 310419, 170064, 307820]
        },
        {
            name:'距离',
            type:'bar',
            data:[211.5, 229.0, 171.47, 226.28, 206.12, 175.14, 159.6, 158.72, 167.5, 251.98, 133.87, 229.44]
        }
    ]
};
