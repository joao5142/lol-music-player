const musicProgress = document.getElementById("music-progress");
const musicProgressInner = document.getElementById("music-progress__inner");

let prevProgressPosition = musicProgressInner.clientWidth;

function setProgressPosition(progressPosition) {
  let percentageClickProgress = (progressPosition * 100) / this.clientWidth;
  musicProgressInner.style.width = `${percentageClickProgress}%`;
}

musicProgress.addEventListener("click", function (e) {
  prevProgressPosition = e.pageX;
  setProgressPosition.call(this, e.pageX);
});

musicProgress.addEventListener("mousemove", function (e) {
  e.preventDefault();
  setProgressPosition.call(this, e.pageX);
});

musicProgress.addEventListener("mouseleave", function (e) {
  setProgressPosition.call(this, prevProgressPosition);
});
