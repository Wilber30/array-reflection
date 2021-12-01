
// Email Validation
const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");

let requestURL = `https://api.unsplash.com/photos/random/?client_id=y-_yh_bYyoUgOO9Eq6u4Ov4smojskd0HzkgQL1zg2Ys`;
const getImageBtn = document.getElementById("generate_btn");
let imgToDisplay = document.getElementById("imageToDisplay");
let imageLink = document.getElementById("imageLink");
let creator = document.getElementById("creator");

const emailSubmit = document.getElementById("submit_btn");
const emailImages = document.getElementById("emailImages");


// form
form.addEventListener('submit', (jsonData) => {
  event.preventDefault();
  imgGet();

  let img = document.createElement("img");
  img.style.borderRadius = "50%";
  img.style.margin = "10px 15px 10px 15px";
  img.style.height = "200px";
  img.style.width = "140px";
  emailImages.appendChild(img);
  img.src = jsonData.urls.thumb;
})

// Button to Generate Image
getImageBtn.addEventListener('click', (jsonData) => {
  imgGet();
})

window.onload = imgGet();

//fetch request
function imgGet() {
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
}
