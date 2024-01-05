const chartOptions = {
    chart: {
        type: "area",
        height: 180,
        // 오른쪽 위 툴 안 보이도록 설정
        toolbar: {
            show: false
        },
        zoom : {
            enabled: false
        }
    },
    // 차트 줄 색상
    colors: ['#3498db'],
    // 각 부분 호버시 나오는 설명 설정
    series : [
        {
            name: "Views",
            data: [45, 52, 38, 45, 19, 23, 2]
        }
    ],
    dataLabels: {
        enabled: false
    },
    stroke: {
        // 두께랑 차트 커브 부드럽게 설정
        width: 3,
        curve: "smooth"
    },
    fill : {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            // 불투명도 범위 설정
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: ['Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec'],
        labels: {
            style: {
                colors: '#a7a7a7',
                fontFamily: 'Poppins'
            }
        },
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        show:false
    },
    grid: {
        borderColor: "rgba(0, 0, 0, 0)",
        padding: { 
            top: -30, 
            bottom: -8, 
            left: 12, 
            right: 12 
        }
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: value => `${value}K`
        },
        style: {
            fontFamily: "Poppins"
        }
    }
}

const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();