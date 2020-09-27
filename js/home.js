//Add the portfolio projects semi-dynamically, they could be stored in a json or a database and retrieved from there in a fully dynamic way
const portfolio = document.querySelector('.portfolio');
for (let index = 1; index <= 10; index++) {
    portfolio.innerHTML += `<a href="portfolio-item.html?index=${index}" class="portfolio__item">
    <img class="portfolio__img" src="img/portfolio-${index}.jpg" alt="">
</a>`;
}
