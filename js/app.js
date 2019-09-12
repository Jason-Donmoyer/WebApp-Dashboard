
var linectx = document.getElementById('webTrafficChart');
var lineChart = new Chart(linectx, {
    type: 'line',
    data: {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [{
            label: 'TRAFFIC',
            data: [10, 4, 60, 8],
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
            ]
        }]
        
    },
    option: {

    }
});







var ctx = document.getElementById('dailyTrafficChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});