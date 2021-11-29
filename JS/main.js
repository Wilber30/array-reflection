
// Email Validation
const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");

// messages accepts string
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
  }
})

// Function tests variable against regex format
function isEmail(i) {
  return /^([a-z\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(i);
}

const requestURL = "https://api.unsplash.com/search/photos?query=random&client_id=y-_yh_bYyoUgOO9Eq6u4Ov4smojskd0HzkgQL1zg2Ys";
const getImageBtn = document.getElementById("generate_btn");
const imgToDisplay = document.getElementById("imageToDisplay");

getImageBtn.addEventListener('click', async () => {
  let randomImage = await getNewImage();
  imgToDisplay.src = randomImage;
})

async function getNewImage() {
    let randomNumber = Math.floor(Math.random() * 10);
    return fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return.allImages.urls.regular;
  });
}
