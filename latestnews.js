let key = `9cc668dcb3954dcaa42c5b9af070ef2c`;
let url = `https://newsapi.org/v2/top-headlines/sources?country=in&apiKey=${key}`;
let indianBusinessNews = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`;
let indianHealthNews = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`;
let indianSportsNews = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`;
let indianTechnologyNews = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${key}`;

function businessNews() {
    let newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "";
    //instanting a xhr object
    const xhr = new XMLHttpRequest();

    //open the xhr object
    xhr.open("GET", indianBusinessNews, true);

    //on load
    xhr.onload = function () {

        let news = JSON.parse(this.response);
        console.log(JSON.parse(this.response));
        news.articles.forEach(function (elem) {
            let news = `
             <div class="col-8 mx-auto">
             <a class="newsLink" href="${elem.url}" target="_blank"><h5 id="newsTitle">${elem.title}</h5></a>
             <hr/>
             </div>
         `;
            newsContainer.innerHTML += news;
        });
    }

    //sending the request
    xhr.send();
}

function sportsNews() {

    newsContainer.innerHTML = "";

    //instanting a xhr object
    const xhr = new XMLHttpRequest();

    //open the xhr object
    xhr.open("GET", indianSportsNews, true);

    //on load
    xhr.onload = function () {

        let news = JSON.parse(this.response);
        console.log(JSON.parse(this.response));
        news.articles.forEach(function (elem) {
            let news = `
             <div class="col-8 mx-auto">
             <a class="newsLink" href="${elem.url}" target="_blank"><h5 id="newsTitle">${elem.title}</h5></a>
             <hr/>
             </div>
         `;
            newsContainer.innerHTML += news;
        });
    }

    //sending the request
    xhr.send();
}

function healthNews() {
    let newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "";

    //instanting a xhr object
    const xhr = new XMLHttpRequest();

    //open the xhr object
    xhr.open("GET", indianHealthNews, true);

    //on load
    xhr.onload = function () {

        let news = JSON.parse(this.response);
        console.log(JSON.parse(this.response));
        news.articles.forEach(function (elem) {
            let news = `
             <div class="col-8 mx-auto">
             <a class="newsLink" href="${elem.url}" target="_blank"><h5 id="newsTitle">${elem.title}</h5></a>
             <hr/>
             </div>
         `;
            newsContainer.innerHTML += news;
        });
    }

    //sending the request
    xhr.send();
}

function technologyNews() {
    let newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "";

    //instanting a xhr object
    const xhr = new XMLHttpRequest();

    //open the xhr object
    xhr.open("GET", indianTechnologyNews, true);

    //on load
    xhr.onload = function () {

        let news = JSON.parse(this.response);
        console.log(JSON.parse(this.response));
        news.articles.forEach(function (elem) {
            let news = `
             <div class="col-8 mx-auto">
             <a class="newsLink" href="${elem.url}" target="_blank"><h5 id="newsTitle">${elem.title}</h5></a>
             <hr/>
             </div>
         `;
            newsContainer.innerHTML += news;
        });
    }

    //sending the request
    xhr.send();
}

businessNews();