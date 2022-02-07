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

// Form Validation & localStorage check
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
      error.innerText = "";
  }

  // Email already exists
  if (localStorage.getItem(email.value) !== null) {
    e.preventDefault();
    addImgToRow();
    imgGet();
  }
  // Email does not exist
  else {
    e.preventDefault();
    addEmailRow();
    imgGet();
    localStorage.setItem(email.value, email.value);
  }
})

// Function tests variable against regex format
function isEmail(i) {
  return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(i);
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

function addEmailRow() {
      let p = document.createElement("p");
      p.classList.add("email");
      p.innerText = email.value;
      p.style.paddingLeft = "30px";
      p.style.fontSize = "20px";
      emailImages.appendChild(p);

      let row = document.createElement("div")
      row.classList.add("logitem");
      row.id = email.value;
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.overflowX = "scroll";
      row.style.borderBottom = "4px solid darksalmon";
      emailImages.appendChild(row);

      let img = document.createElement("img");
      img.style.borderRadius = "50%";
      img.style.margin = "10px 15px 10px 15px";
      img.style.paddingLeft = "10px";
      img.style.height = "120px";
      img.style.width = "120px";
      img.style.objectFit = "cover";

      row.appendChild(img);
      img.src = imgToDisplay.src;
    }

//fetch request
function addImgToRow() {
      let img = document.createElement("img");
      img.style.borderRadius = "50%";
      img.style.margin = "10px 15px 10px 15px";
      img.style.height = "120px";
      img.style.width = "120px";
      img.style.objectFit = "cover";

      let log = document.getElementById(email.value);
      log.appendChild(img);
      img.src = imgToDisplay.src;
    }
