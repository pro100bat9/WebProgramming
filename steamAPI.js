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
    let kd = kdration.toFixed(2)
    console.log(kdration);
    let playerBox = `
        <a href="#"  class="news-wall-image">
                <img alt="Europe" src="preview/EU1.gif" class="news-flag flag" title="Europe">
                <div class="news-text">kd лучшего игрока в кс го ${kd}</div>
                <div class="news-tc">
                    <div class="news-recent">10 минут назад</div>
                    <div>45 комментариев</div>
                </div>
            </a>
        `;
    document.querySelector(".news-wall").insertAdjacentHTML("afterbegin", playerBox);
}

async function pageLoaded() {
    await showData();
}

window.addEventListener("load", pageLoaded);