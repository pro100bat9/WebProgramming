
async function loadData(userId) {

    let stats = fetch("https://cors-anywhere.herokuapp.com/" + applicationUrl + userId)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
        });

    let playerStats = await stats;
    return playerStats;
}


async function showData() {
    const data = await loadData("76561198201133886");
    console.log(data);

    let stats = data.playerstats.stats;
    console.log(stats);
    let totalkills = stats[0].value;
    let totaldeaths = stats[1].value;
    let kdration = totalkills / totaldeaths;
    let totalwins = stats[5].value;
    let totalwinspistolround = stats[27].value;
    let lastmatchdamage = stats[98].value;
    let totalkillselite = stats[13].value;
    let totalmvps = stats[102].value;
    let totalhitsp250 = stats[139].value;
    let totalkillsnova = stats[158].value;
    let totalkillsawp = stats[19].value;
    let totalkillsak47 = stats[20].value;
    let totalkillsaug = stats[21].value;
    let totalkillsfamas = stats[22].value;
    window.addEventListener("load", pageLoaded);
    var datakills = [totalkillsaug, totalhitsp250,totalkillsfamas, totalkillsawp, totalkillsak47]
    const optionsPie = {
        animation: {
            duration: 2000,
        },
    }
    var circle = document.getElementById('circle').getContext('2d');
    var chart = new Chart(circle, {
        type: 'doughnut',
        data: {
            labels: ['aug', 'p250', 'famas', 'awp', 'ak47'],
            datasets: [{
                label: 'All_kills',
                data: datakills,
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)','rgb(255, 205, 86)', 'rgb(215, 105, 86)', 'rgb(255, 35, 16)']
            }]
        },
        options: optionsPie
    });

    let kd = kdration.toFixed(2)
    console.log(kdration);
    let playerBox = `
        <div class="columns">
    <div class="col stats-rows standard-box">
      <div class="stats-row dropdown"><span class="">K/D Ratio</span>
        <div id="drop" class="dropdown-menu"><h2>qwerty1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
      <span>${kd}</span></div>
      <div class="stats-row dropdown"><span>Total kills</span>
        <div id="drop" class="dropdown-menu"><h2>qwerty2</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
      <span>${totalkills}</span></div>
      <div class="stats-row dropdown"><span>Total deaths</span>
        <div id="drop" class="dropdown-menu"><h2>qwerty3</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
      <span>${totaldeaths}</span></div>
      <div class="stats-row dropdown"><span>Total wins</span>
        <div id="drop" class="dropdown-menu"><h2>qwerty4</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
      <span>${totalwins}</span></div>
      <div class="stats-row dropdown"><span>wins round</span>
        <div id="drop" class="dropdown-menu"><h2>qwerty5</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
      <span>${totalwinspistolround}</span></div>
      <div class="stats-row dropudown"><span>damage</span>
        <div id="drop" class="dropdown-menu"><h2>qwerty6</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
      <span>${lastmatchdamage}</span></div>
      <div class="stats-row dropdown"><span>total kills elite</span>
        <div id="drop" class="dropdown-menu"><h2>qwerty7</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
      <span>${totalkillselite}</span></div>
    </div>
    <div class="col stats-rows standard-box">
      <div class="stats-row dropdown"><span>total mvps</span>
        <div id="drop" class="dropdown-menu"><h2>qwerty8</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
      <span>${totalmvps}</span></div>
      <div class="stats-row dropdown"><span class="">totalhitsp250</span>
          <div id="drop" class="dropdown-menu"><h2>qwerty6</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
    <span>${totalhitsp250}</span></div>
      <div class="stats-row dropdown"><span class="">total kills nova</span>
                <div id="drop" class="dropdown-menu"><h2>qwerty6</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
    <span>${totalkillsnova}</span></div>
      <div class="stats-row dropdown"><span class="">kills awp</span>
                <div id="drop" class="dropdown-menu"><h2>qwerty6</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
    <span>${totalkillsawp}</span></div>
      <div class="stats-row dropdown"><span>kills ak47</span>
                <div id="drop" class="dropdown-menu"><h2>qwerty6</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
    <span>${totalkillsak47}</span></div>
      <div class="stats-row dropdown"><span>total kills aug</span>
                <div id="drop" class="dropdown-menu"><h2>qwerty6</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
    <span>${totalkillsaug}</span></div>
      <div class="stats-row dropdown"><span>total kills famas</span>
                <div id="drop" class="dropdown-menu"><h2>qwerty6</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
    <span>${totalkillsfamas}</span></div>
    </div>
  </div>
        `;
    document.querySelector(".statistics").insertAdjacentHTML("beforeend", playerBox);
}

async function pageLoaded() {
    await showData();
}

window.addEventListener("load", pageLoaded);

