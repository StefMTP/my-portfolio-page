const params = new URLSearchParams(window.location.search);
const i = params.get("index");
document.querySelector('.section__title--intro').firstElementChild.innerHTML += ` ${i}`;
document.querySelector(".intro__img").setAttribute("src", `img/portfolio-${i}.jpg`);