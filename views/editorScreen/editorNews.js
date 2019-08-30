

const newsScreen = `
<div class="container">
  <div class="alert alert-secondary" role="alert">
  Adding news
</div>
<form>
  <div class="form-group">
    <label for="link">Link</label>
    <input type="text" class="form-control" id="link" placeholder="">
  </div>
  <div class="form-group">
    <label for="img">Img</label>
    <input type="text" class="form-control" id="img" placeholder="">
  </div>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="">
  </div>
  <div class="form-group">
    <label for="branch">Branch</label>
    <input type="text" class="form-control" id="branch" placeholder="">
  </div>
  
  <div class="form-check">
  <button id = "js-submit" type="submit" class="btn btn-primary">Submit</button>
</form>

  </div>
`;

function onload() {
  const form = document.querySelector("form");
  const button = document.getElementById("js-submit");
  const time = new Date();
  button.addEventListener("click", event => {
    event.preventDefault();
    
    // Add a new document in collection
    db.collection("news")
      .doc()
      .set(formData)
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  });
}

const news = {
  content: newsScreen,
  onload: onload
};

export default news;
