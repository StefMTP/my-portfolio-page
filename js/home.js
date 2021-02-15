//Retrieve the portfolio projects from a json file and add them in the page dynamically
const portfolio = document.querySelector('.portfolio');
for (let index = 1; index <= 6; index++) {
    portfolio.innerHTML += `<a href="portfolio-item.html?index=${index}" class="portfolio__item">
    <img class="portfolio__img" src="img/portfolio-${index}.png" alt="">
</a>`;
}
