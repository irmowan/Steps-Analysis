var myChart = echarts.init(document.getElementById('main'));

// options.
var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
'7a', '8a', '9a', '10a', '11a',
'12p', '1p', '2p', '3p', '4p', '5p',
'6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0 , 0 , 320 ],[0 , 1 , 86 ],[0 , 2 , 13 ],[0 , 3 , 16 ],[0 , 4 , 8 ],[0 , 5 , 0 ],[0 , 6 , 66 ],[0 , 7 , 70 ],[0 , 8 , 116 ],[0 , 9 , 159 ],[0 , 10 , 392 ],[0 , 11 , 408 ],[0 , 12 , 708 ],[0 , 13 , 687 ],[0 , 14 , 517 ],[0 , 15 , 433 ],[0 , 16 , 486 ],[0 , 17 , 750 ],[0 , 18 , 697 ],[0 , 19 , 450 ],[0 , 20 , 276 ],[0 , 21 , 595 ],[0 , 22 , 532 ],[0 , 23 , 144 ],[1 , 0 , 225 ],[1 , 1 , 46 ],[1 , 2 , 29 ],[1 , 3 , 0 ],[1 , 4 , 0 ],[1 , 5 , 28 ],[1 , 6 , 42 ],[1 , 7 , 40 ],[1 , 8 , 195 ],[1 , 9 , 444 ],[1 , 10 , 300 ],[1 , 11 , 478 ],[1 , 12 , 780 ],[1 , 13 , 724 ],[1 , 14 , 341 ],[1 , 15 , 690 ],[1 , 16 , 681 ],[1 , 17 , 940 ],[1 , 18 , 920 ],[1 , 19 , 517 ],[1 , 20 , 794 ],[1 , 21 , 659 ],[1 , 22 , 274 ],[1 , 23 , 160 ],[2 , 0 , 180 ],[2 , 1 , 99 ],[2 , 2 , 0 ],[2 , 3 , 25 ],[2 , 4 , 35 ],[2 , 5 , 32 ],[2 , 6 , 36 ],[2 , 7 , 114 ],[2 , 8 , 347 ],[2 , 9 , 656 ],[2 , 10 , 265 ],[2 , 11 , 465 ],[2 , 12 , 892 ],[2 , 13 , 571 ],[2 , 14 , 291 ],[2 , 15 , 338 ],[2 , 16 , 793 ],[2 , 17 , 764 ],[2 , 18 , 688 ],[2 , 19 , 341 ],[2 , 20 , 468 ],[2 , 21 , 503 ],[2 , 22 , 532 ],[2 , 23 , 381 ],[3 , 0 , 148 ],[3 , 1 , 43 ],[3 , 2 , 36 ],[3 , 3 , 0 ],[3 , 4 , 0 ],[3 , 5 , 0 ],[3 , 6 , 0 ],[3 , 7 , 17 ],[3 , 8 , 391 ],[3 , 9 , 519 ],[3 , 10 , 433 ],[3 , 11 , 607 ],[3 , 12 , 969 ],[3 , 13 , 646 ],[3 , 14 , 231 ],[3 , 15 , 375 ],[3 , 16 , 872 ],[3 , 17 , 879 ],[3 , 18 , 712 ],[3 , 19 , 333 ],[3 , 20 , 313 ],[3 , 21 , 320 ],[3 , 22 , 409 ],[3 , 23 , 406 ],[4 , 0 , 110 ],[4 , 1 , 15 ],[4 , 2 , 24 ],[4 , 3 , 0 ],[4 , 4 , 0 ],[4 , 5 , 0 ],[4 , 6 , 11 ],[4 , 7 , 32 ],[4 , 8 , 758 ],[4 , 9 , 773 ],[4 , 10 , 283 ],[4 , 11 , 560 ],[4 , 12 , 902 ],[4 , 13 , 676 ],[4 , 14 , 171 ],[4 , 15 , 462 ],[4 , 16 , 422 ],[4 , 17 , 777 ],[4 , 18 , 672 ],[4 , 19 , 350 ],[4 , 20 , 557 ],[4 , 21 , 582 ],[4 , 22 , 598 ],[4 , 23 , 85 ],[5 , 0 , 191 ],[5 , 1 , 36 ],[5 , 2 , 49 ],[5 , 3 , 0 ],[5 , 4 , 0 ],[5 , 5 , 0 ],[5 , 6 , 0 ],[5 , 7 , 46 ],[5 , 8 , 335 ],[5 , 9 , 373 ],[5 , 10 , 388 ],[5 , 11 , 614 ],[5 , 12 , 834 ],[5 , 13 , 590 ],[5 , 14 , 301 ],[5 , 15 , 278 ],[5 , 16 , 532 ],[5 , 17 , 833 ],[5 , 18 , 772 ],[5 , 19 , 318 ],[5 , 20 , 662 ],[5 , 21 , 647 ],[5 , 22 , 355 ],[5 , 23 , 156 ],[6 , 0 , 124 ],[6 , 1 , 120 ],[6 , 2 , 18 ],[6 , 3 , 4 ],[6 , 4 , 0 ],[6 , 5 , 0 ],[6 , 6 , 44 ],[6 , 7 , 24 ],[6 , 8 , 161 ],[6 , 9 , 246 ],[6 , 10 , 587 ],[6 , 11 , 765 ],[6 , 12 , 790 ],[6 , 13 , 480 ],[6 , 14 , 655 ],[6 , 15 , 441 ],[6 , 16 , 393 ],[6 , 17 , 650 ],[6 , 18 , 897 ],[6 , 19 , 440 ],[6 , 20 , 451 ],[6 , 21 , 536 ],[6 , 22 , 419 ],[6 , 23 , 176 ]]
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        y: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours
    },
    yAxis: {
        type: 'category',
        data: days
    },
    visualMap: {
        min: 100,
        max: 1000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
}]
};

myChart.setOption(option);