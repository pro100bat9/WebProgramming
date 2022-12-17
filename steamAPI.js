const applicationUrl = "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=62AAFA6C35CD1F1F61093C1A3CEEAB4A&steamid="

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
    let kd = kdration.toFixed(2)
    console.log(kdration);
    let playerBox = `
        <div class="columns">
    <div class="col stats-rows standard-box">
      <div class="stats-row"><span>K/D Ratio</span><span>${kd}</span></div>
      <div class="stats-row"><span>Total kills</span><span>${totalkills}</span></div>
      <div class="stats-row"><span>Total deaths</span><span>${totaldeaths}</span></div>
      <div class="stats-row"><span>Total wins</span><span>${totalwins}</span></div>
      <div class="stats-row"><span>total wins round</span><span>${totalwinspistolround}</span></div>
      <div class="stats-row"><span>match damage</span><span>${lastmatchdamage}</span></div>
      <div class="stats-row"><span>total kills elite</span><span>${totalkillselite}</span></div>
    </div>
    <div class="col stats-rows standard-box">
      <div class="stats-row"><span>total mvps</span><span>${totalmvps}</span></div>
      <div class="stats-row"><span class="">totalhitsp250</span><span>${totalhitsp250}</span></div>
      <div class="stats-row"><span class="">total kills nova</span><span>${totalkillsnova}</span></div>
      <div class="stats-row"><span class="">total kills awp</span><span>${totalkillsawp}</span></div>
      <div class="stats-row"><span>total kills ak47</span><span>${totalkillsak47}</span></div>
      <div class="stats-row"><span>total kills aug</span><span>${totalkillsaug}</span></div>
      <div class="stats-row"><span>total kills famas</span><span>${totalkillsfamas}</span></div>
    </div>
  </div>
        `;
    document.querySelector(".statistics").insertAdjacentHTML("beforeend", playerBox);
}

async function pageLoaded() {
    await showData();
}

window.addEventListener("load", pageLoaded);