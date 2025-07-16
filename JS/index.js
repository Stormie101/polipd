function bookNow() {
  alert("Redirecting to booking page...");
  // You can later replace this with actual navigation
}

let photoIndex = 0;
const photos = [
  "/IMAGE/community photo 2.jpg",
  "/IMAGE/community photo 3.jpg",
  "/IMAGE/community photo 4.jpg",
  "/IMAGE/community photo 1.jpg",
];

function showPhoto(index) {
  const img = document.querySelector(".gallery-img");
  photoIndex = (index + photos.length) % photos.length;
  img.src = photos[photoIndex];
}

function prevPhoto() {
  showPhoto(photoIndex - 1);
}

function nextPhoto() {
  showPhoto(photoIndex + 1);
}