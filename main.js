const videos = document.querySelectorAll(".reviews__video");
console.log(videos);
videos.forEach((item) => {
  item.addEventListener("click", () => {
    stopVideo(item);
  });
});

function stopVideo(item) {
  console.log(item.played);
  if (item.played) {
    item.play();
  } else {
    item.pause();
  }
}

document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".aside").classList.toggle("active");
});

document.querySelector(".registration").addEventListener("click", function () {
  document.querySelector(".modal--registration").classList.toggle("active");
});
