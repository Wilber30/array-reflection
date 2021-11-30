
// Random image

const requestURL = `https://api.unsplash.com/photos/random/?client_id=y-_yh_bYyoUgOO9Eq6u4Ov4smojskd0HzkgQL1zg2Ys`;
const getImageBtn = document.getElementById("generate_btn");
const imgToDisplay = document.getElementById("imageToDisplay");

fetch(requestURL)
.then(function (response) {
  console.log(response.json());
})
