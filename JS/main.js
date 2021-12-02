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
const uList = document.getElementById("img_list");

window.onload = imgGet();
window.onload = localStorage.clear();

// FORM VALIDATION & LOCAL STORAGE CHECK
form.addEventListener('submit', (e) => {
  let messages = []
// If user has entered email/ else if, then compares value to regex format
  if (email.value === '' || email.value == null) {
    messages.push('Please enter an email address')
  } else if (!isEmail(email.value)) {
    messages.push('Invalid email address')
  }

  // Prevent submit & display messages in error div, or accept and store cookie
  if (messages.length > 0) {
    e.preventDefault()
    error.innerText = messages.join(', ')
    return;
    } else if (isEmail(email.value)) {
  }

  // Email already exists
  if (localStorage.getItem(email.value) !== null) {
    e.preventDefault();
    imgAdd();
  }
  // Email does not exist
  else {
    e.preventDefault();
    addDiv();
    localStorage.setItem(email.value, email.value);
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
function  addDiv() {
  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      let items = document.createElement("div")
      items.style.display = "flex";
      items.classList.add("logitem");
      emailImages.appendChild(items);

      let p = document.createElement("p");
      p.classList.add("email");
      p.innerText = email.value;
      items.appendChild(p);

      let img = document.createElement("img");
      img.style.borderRadius = "50%";
      img.style.margin = "10px 15px 10px 15px";
      img.style.height = "200px";
      img.style.width = "140px";

      items.appendChild(img);
      img.src = jsonData.urls.thumb;
    })

    .catch(function(error) {
      console.log("Error: " + error);
    });
}

//fetch request
function imgAdd() {
  fetch(requestURL)
    .then(function(response) {
      return response.json();
    })
    // Sets image and provides link in href value
    .then(function(jsonData) {
      let img = document.createElement("img");
      img.style.borderRadius = "50%";
      img.style.margin = "10px 15px 10px 15px";
      img.style.height = "200px";
      img.style.width = "140px";

      let log = document.querySelector(".logitem");
      log.appendChild(img);
      img.src = jsonData.urls.thumb;
    })
    .catch(function(error) {
      console.log("Error: " + error);
    });
}
