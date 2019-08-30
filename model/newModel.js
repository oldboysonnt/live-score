import news from "../views/screen/news.js"

let listNews = [];

// get data from firebase 
  db.collection("news")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      listNews.push(doc.data());
    });
  });

  db.collection("news")
    .onSnapshot(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        listNews.push(doc.data());
      });
    });
  export default listNews;


