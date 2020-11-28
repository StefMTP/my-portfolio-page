const projects = [
    {
        title: "Top Headlines Website",
        subtitle: "Website interacting with the News API",
        description: "Interacting with a foreign API, the News API, making requests to the top-headlines endpoint for news from various websites, with a range of selection in countries and headline categories.",
        tools: "Node and Express, the newsapi package, Bootstrap for styling, the Pug template engine and flag-icons",
        link: "https://news-api-demo.herokuapp.com"
      },
      {
        title: "Todo List Single Page App",
        subtitle: "Yeah I know, can't get any more boring than that...",
        description: "Simple application for presenting, creating and deleting tasks in a list, my first result of studying the React library and putting my knowledge into practice.",
        tools: "Node with React and the JSONPlaceholder API for HTTP requests through the Axios client, custom CSS for styling",
        link: "https://whitestrabbit-todo.herokuapp.com"
      },
      {
        title: "My Own Portfolio Website",
        subtitle: "The website you are viewing is also part of my work!",
        description: "Portfolio website, presenting myself and my projects.",
        tools: "HTML, CSS and vanilla JavaScript",
        link: "index.html"
      },
      {
        title: "50 Cent Name Converter Website",
        subtitle: "Website interacting with the Currency Layer API, with a humorous twist",
        description: "The application interacts with the Currency Layer API to receive the hourly exchange rates and convert 50 Cent’s alias to the corresponding value of a random world currency.",
        tools: "JavaScript with fetch to make requests from two different endpoints of the Currency Layer API, custom CSS for styling",
        link: "http://fifty-cent-convert.herokuapp.com"
      },
      {
        title: "Knowledge Base Website",
        subtitle: "Knowledge Base CRUD App with User System",
        description: "Simple knowledge base app, with login, registration and access control, flash messages, as well as creating, reading, updating and deleting articles. Interacts with the MongoDB Atlas to store and alter articles and users.",
        tools: "Node, Express, Pug, bcryptjs, Passport, connect-flash, express messages, session & validator, mongoose",
        link: "https://article-base.herokuapp.com/"
      }
];

let i = new URLSearchParams(window.location.search).get("index");
if(!i || i > 5) i = 1;
// const i = params.get("index") <= 5 ? params.get("index") : 1;
document.querySelector(".intro__img").setAttribute("src", `img/portfolio-${i}.png`);
document.querySelector(".section__title--intro").innerHTML += projects[i-1].title;
document.querySelector(".section__subtitle--intro").innerHTML += projects[i-1].subtitle;
document.querySelector(".portfolio-item-individual__description").innerHTML += projects[i-1].description;
document.querySelector(".portfolio-item-individual__tools").innerHTML += projects[i-1].tools;
document.querySelector(".portfolio-item-individual__link").firstElementChild.setAttribute("href", projects[i-1].link);