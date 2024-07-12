function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
  document.getElementById("percentageValue").innerHTML = Math.round(scrolled) + "%";
}

window.onscroll = function() {
  progressBarScroll();
};

window.onscroll = function() {
  progressBarScroll();
};