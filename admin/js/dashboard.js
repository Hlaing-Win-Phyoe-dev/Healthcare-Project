
$('.counter-up').counterUp({
    delay:10,
    time:3000
})
let monthArr = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
let orderCountArr = [7, 5, 6, 9, 6, 12,8,6,8,11,6,5];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16,18];

let ctx = document.getElementById('pv');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: monthArr,
        datasets: [
            {
                label: 'Total Patients',
                data: orderCountArr,
                backgroundColor: [
                    ' #009688',
                ],
                borderColor: [
                    ' #009688',
                ],
                borderWidth: 1,
            },
            {
                label: 'Viewer',
                data: viewerCountArr,
                backgroundColor: [
                    '#00968860',
                ],
                borderColor: [
                    '#009688',
                ],
                borderWidth: 1,
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                display:false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes:[{
                display:false,
                gridLines:[
                    {
                        display:false
                    }
                ]
            }]
        },
        legend: {
            display:true,
            position:'top',
            labels:{
                fontColor: '#343a40',
                usePointStyle:true,
            }
        }
    }
});

dycalendar.draw({
    target: '#calendar',
    type:"month",
    year:2020,
    month:10,
    highlighttargetdate: true,
});