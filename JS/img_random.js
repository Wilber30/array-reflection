
// Random image

let requestURL = `https://api.unsplash.com/photos/random/?client_id=y-_yh_bYyoUgOO9Eq6u4Ov4smojskd0HzkgQL1zg2Ys`;
const getImageBtn = document.getElementById("generate_btn");
let imgToDisplay = document.getElementById("imageToDisplay");
let imageLink = document.getElementById("imageLink");
let creator = document.getElementById("creator");

//On load fetch request
fetch(requestURL)
.then(function (response) {
  return response.json();
})
// Sets image and provides link in href value
  .then(function (jsonData) {
    imgToDisplay.src = jsonData.urls.regular;
    imageLink.setAttribute("href", jsonData.links.html)

// Sets the HTML innerText and href attribute
    creator.innerText = jsonData.user.name;
    creator.setAttribute("href", jsonData.user.portfolio_url);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

// Button to Generate Image
getImageBtn.addEventListener('click', (jsonData) => {
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
    .then(function (jsonData) {
      imgToDisplay.src = jsonData.urls.regular;
      imageLink.setAttribute("href", jsonData.links.html)

      creator.innerText = jsonData.user.name;
      creator.setAttribute("href", jsonData.user.portfolio_url);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
})

// Email submit
const emailSubmit = document.getElementById("submit_btn");
const emailImages = document.getElementById("emailImages")

emailSubmit.addEventListener('click', (jsonData) => {
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
    .then(function (jsonData) {
      imgToDisplay.src = jsonData.urls.regular;
      imageLink.setAttribute("href", jsonData.links.html)

      creator.innerText = jsonData.user.name;
      creator.setAttribute("href", jsonData.user.portfolio_url);

      let img = document.createElement("img");
      img.style.borderRadius = "50%";
      img.style.margin = "10px 15px 10px 15px";
      img.style.height = "200px";
      emailImages.appendChild(img);
      img.src = jsonData.urls.thumb;
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
})
