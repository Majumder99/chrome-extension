let willSmithImages = [
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
  "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
];

const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
  let randomNum = Math.floor(Math.random() * willSmithImages.length);
  let randomImage = willSmithImages[randomNum];
  imgs[i].src = randomImage;
  imgs[i].srcset = randomImage;
}
