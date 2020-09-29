const params = new URLSearchParams(window.location.search);
const i = params.get("index") <= 10 ? params.get("index") : 1;
const dumpster = document.querySelectorAll('.number-dump');
dumpster.forEach(element => {
    element.firstElementChild.innerHTML += ` ${i}`;
})
document.querySelector(".intro__img").setAttribute("src", `img/portfolio-${i}.jpg`);