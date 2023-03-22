const tutorialButton = document.getElementById("tutorialButton");
const playButton = document.getElementById("playButton");

const firstLocButton = document.getElementById("firstLocButton");
const secondLocButton = document.getElementById("secondLocButton");
const thirdLocButton = document.getElementById("thirdLocButton");

tutorialButton.onclick = () => {
  start.style.display = "none";
  tutorialButton.style.display = "none";
  tutorialText.style.display = "block";
};

playButton.onclick = () => {
  start.style.display = "none";
  tutorialButton.style.display = "none";
  mainLoc.style.display = "block";
};

firstLocButton.onmouseenter = () => {
  arenaOnePreview.style.display = "block";
};

firstLocButton.onmouseleave = () => {
  arenaOnePreview.style.display = "none";
};

secondLocButton.onmouseenter = () => {
  arenaTwoPreview.style.display = "block";
};

secondLocButton.onmouseleave = () => {
  arenaTwoPreview.style.display = "none";
};

thirdLocButton.onmouseenter = () => {
  arenaThreePreview.style.display = "block";
};

thirdLocButton.onmouseleave = () => {
  arenaThreePreview.style.display = "none";
};
