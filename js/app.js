
var linectx = document.getElementById('webTrafficChart');
var lineChart = new Chart(linectx, {
    type: 'line',
    data: {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [{
            label: 'TRAFFIC',
            data: [[1.0, 0.3], [4, 8], [60, 8]],
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
            ],
            showLine: true,
            borderWidth: 1,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ] 
        }]
        
    },
    option: {
        layout: {
           padding: {
                bottom: 60
           } 
        },
        responive: true,
        maintainAspectRation: false
        

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
        responive: true,
        maintainAspectRation: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});