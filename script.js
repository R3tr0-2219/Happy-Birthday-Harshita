const images = [
  { src: "images/img1.jpg", caption: "Remember this? When you wore mom's lipstick at age 4! 😂" },
  { src: "images/img2.jpg", caption: "Your first school dance – you were the star! 💃" },
  { src: "images/img3.jpg", caption: "Teenage drama queen phase – iconic! 👑" },
  { src: "images/img4.jpg", caption: "Our beach trip – you buried me in the sand 😅" },
  { src: "images/img5.jpg", caption: "This year’s birthday — you shine brighter than ever! ✨" }
];

let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("birthdayImage").src = images[currentIndex].src;
  document.getElementById("caption").innerText = images[currentIndex].caption;
}
