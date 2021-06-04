const key1="5a9ddfd315914f8eb173c24e10764011";
var url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key1}`;
async function fetchNews() {
    const response = await fetch(`${url}`);
    const data = await response.json();
    const result = data.articles;
    console.log(result);
    const html = result.map(
        (element) => (`${element['urlToImage']}`!="null") ?
            (`<li class="cards__item">
                <div class="card">
                <div class="card__image" style="background-image:url(${element['urlToImage']});"></div>
                <div class="card__content">
                    <div class="card__title">${element['title']}</div>
                    <p class="card__text">${element['description']}</p>
                    <button class="btn1 btn--block card__btn" onclick="window.open('${element['url']}')">Read More</button>
                </div>
                </div>
            </li>`) :
            (`<li class="cards__item">
                <div class="card">
                <div class="card__image" style="background-image:url('./no-img.png');"></div>
                <div class="card__content">
                    <div class="card__title">${element['title']}</div>
                    <p class="card__text">${element['description']}</p>
                    <button class="btn1 btn--block card__btn" onclick="window.open('${element['url']}')">Read More</button>
                </div>
                </div>
            </li>`)
    );
    document.getElementById("main").innerHTML = html.join("");
}
function searchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    li = document.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByClassName("card__title")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  async function category(val) {
    var url=`https://newsapi.org/v2/top-headlines?category=${val}&apiKey=${key1}`;
    if (val.length===2){
      var url=`https://newsapi.org/v2/top-headlines?country=${val}&apiKey=${key1}`;
    }
    const response = await fetch(`${url}`);
    const data = await response.json();
    const result = data.articles;
    console.log(result);
    const html = result.map(
        (element) =>
            `<li class="cards__item">
                <div class="card">
                <div class="card__image" style="background-image:url(${element['urlToImage']});"></div>
                <div class="card__content">
                    <div class="card__title">${element['title']}</div>
                    <p class="card__text">${element['description']}</p>
                    <button class="btn1 btn--block card__btn" onclick="window.open('${element['url']}')">Read More</button>
                </div>
                </div>
            </li>`
    );
    document.getElementById("main").innerHTML = html.join("");
}

function load(){
  var myDiv = document.getElementById("loader");
  var myDiv2 = document.getElementById("main");
    show = function(){
      myDiv.style.display = "block";
      myDiv2.style.display = "none";
      setTimeout(hide, 2000); // 5 seconds
    },

    hide = function(){
      myDiv.style.display = "none";
      myDiv2.style.display = "flex";
    };

  show();
}
load();
  
fetchNews();