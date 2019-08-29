import listNews from '../../model/newModel.js'

const newsScreen = `
<div class="container">
   <div class="main-new" id = "js-news">
  
   </div>

  </div>
`;

function onload() {
  loadNews();

}

function renderNews(data){
  const news = document.getElementById("js-news");
  const when = dateFns.distanceInWordsToNow(data.time.toDate());
  const render = `
  <div class="block">
    <img class="img-news" src="${data.img}">
          <a href="${data.link}"<h5 class="text">${data.title}</h5></a>
          <br>
          <span class="small-text">${data.branch}</span>
          <span class="smaller-text">${when} ago</span>
  </div>
  `;
  news.insertAdjacentHTML("beforeend", render);
}

function loadNews() {
  for (let i = 0; i < listNews.length; i++) {
    renderNews(listNews[i]);
  }
}

const news = {
    content: newsScreen,
    onload: onload
}

export default news