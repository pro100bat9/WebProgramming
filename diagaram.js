var datakills = [200, 500, 100, 300, 400]
const optionsPie = {
    animation: {
        duration: 2000,
    },
}
var circle = document.getElementById('circle').getContext('2d');
var chart = new Chart(circle, {
    type: 'doughnut',
    data: {
        labels: ['P90', 'awp', 'ak47', 'glock', 'ump45'],
        datasets: [{
            label: 'All_kills',
            data: datakills,
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)','rgb(255, 205, 86)', 'rgb(215, 105, 86)', 'rgb(255, 35, 16)']
        }]
    },
    options: optionsPie
});
