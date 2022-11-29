const startTime = new Date().getTime()
const selector = document.querySelector(".perf")
    window.addEventListener('load', () => {
        selector.innerHTML = " Время загрузки: " + ((new Date().getTime() - startTime) / 1000) + " секунды"
    })
