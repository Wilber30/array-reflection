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
