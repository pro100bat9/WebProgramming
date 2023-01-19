// const applicationUrl = "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=62AAFA6C35CD1F1F61093C1A3CEEAB4A&steamid="
//
// async function loadData(userId) {
//
//     let stats = fetch("https://cors-anywhere.herokuapp.com/" + applicationUrl + userId)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             console.log(error);
//         });
//
//     let playerStats = await stats;
//     return playerStats;
// }
//
//
//
//
//     // var array = [totalkillsaug, totalhitsp250,totalkillsfamas, totalkillsawp, totalkillsak47]
//
// async function getdata(){
//     window.addEventListener("load", pageLoaded);
//     var qwert = await showData();
//     var datakills = [totalkillsaug, totalhitsp250,totalkillsfamas, totalkillsawp, totalkillsak47]
//     const optionsPie = {
//         animation: {
//             duration: 2000,
//         },
//     }
//     var circle = document.getElementById('circle').getContext('2d');
//     var chart = new Chart(circle, {
//         type: 'doughnut',
//         data: {
//             labels: ['P90', 'awp', 'ak47', 'glock', 'ump45'],
//             datasets: [{
//                 label: 'All_kills',
//                 data: datakills,
//                 backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)','rgb(255, 205, 86)', 'rgb(215, 105, 86)', 'rgb(255, 35, 16)']
//             }]
//         },
//         options: optionsPie
//     });
// }