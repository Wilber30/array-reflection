// Email Validation
const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");

let requestURL = `https://api.unsplash.com/photos/random/?client_id=y-_yh_bYyoUgOO9Eq6u4Ov4smojskd0HzkgQL1zg2Ys`;
const getImageBtn = document.getElementById("generate_btn");
let imgToDisplay = document.getElementById("imageToDisplay");
let imageLink = document.getElementById("imageLink");
let creator = document.getElementById("creator");
let para = document.getElementById("para");

const emailSubmit = document.getElementById("submit_btn");
const emailImages = document.getElementById("emailImages");

// form
form.addEventListener('submit', (e) => {
  let messages = []
// If user has entered email/ else if, then compares value to regex format
  if (email.value === '' || email.value == null) {
    messages.push('Please enter an email address')
  } else if (!isEmail(email.value)) {
    messages.push('Invalid email address')
  }
  // If  message length  >  0, prevent submit & display messages in error div
if (messages.length > 0) {
  e.preventDefault()
  error.innerText = messages.join(', ')
} else if (isEmail(email.value)) {
  e.preventDefault();
  thumb();
  }
})

// Function tests variable against regex format
function isEmail(i) {
  return /^([a-z\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(i);
}

// Button to Generate Image
getImageBtn.addEventListener('click', (jsonData) => {
  imgGet();
})

window.onload = imgGet();

//fetch request
function imgGet() {
  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    // Sets image and provides link in href value
    .then(function(jsonData) {
      imgToDisplay.src = jsonData.urls.regular;
      imageLink.setAttribute("href", jsonData.links.html)

      // Sets the HTML innerText and href attribute
      creator.innerText = jsonData.user.name;
      creator.setAttribute("href", jsonData.user.portfolio_url);
    })
    .catch(function(error) {
      console.log("Error: " + error);
    });
}

//The same as the above fetch request, but added thumnail img
function thumb() {
  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      let item = document.createElement("li")
      item.style.listStyle = "none";
      emailImages.appendChild(item);

      let p = document.createElement("p");
      item.appendChild(p);
      p.innerText = email.value;

      let img = document.createElement("img");
      img.style.borderRadius = "50%";
      img.style.margin = "10px 15px 10px 15px";
      img.style.height = "200px";
      img.style.width = "140px";

      item.appendChild(img);
      img.src = jsonData.urls.thumb;
    })

    .catch(function(error) {
      console.log("Error: " + error);
    });
}
