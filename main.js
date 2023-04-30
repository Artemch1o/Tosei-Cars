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
