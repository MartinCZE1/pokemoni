const tutorialButton = document.getElementById("tutorialButton");
const playButton = document.getElementById("playButton");

const firstLocMenuButton = document.getElementById("firstLocMenuButton");
const secondLocMenuButton = document.getElementById("secondLocMenuButton");
const thirdLocMenuButton = document.getElementById("thirdLocMenuButton");

const firstLocPlayerHPCounter = document.getElementById(
  "firstLocPlayerHPCounter"
);
const firstLocEnemyHPCounter = document.getElementById(
  "firstLocEnemyHPCounter"
);

const firstLocAttackOne = document.getElementById("firstLocAttackOne");
const firstLocAttackTwo = document.getElementById("firstLocAttackTwo");
const firstLocAttackThree = document.getElementById("firstLocAttackThree");

let firstLocPlayerHP = 100;
let firstLocEnemyHP = 100;

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

firstLocMenuButton.onmouseenter = () => {
  arenaOnePreview.style.display = "block";
};

firstLocMenuButton.onmouseleave = () => {
  arenaOnePreview.style.display = "none";
};

secondLocMenuButton.onmouseenter = () => {
  arenaTwoPreview.style.display = "block";
};

secondLocMenuButton.onmouseleave = () => {
  arenaTwoPreview.style.display = "none";
};

thirdLocMenuButton.onmouseenter = () => {
  arenaThreePreview.style.display = "block";
};

thirdLocMenuButton.onmouseleave = () => {
  arenaThreePreview.style.display = "none";
};

firstLocMenuButton.onclick = () => {
  mainLoc.style.display = "none";
  firstLoc.style.display = "block";
      
  firstLocFight();
};

function firstLocFight() {
  firstLocFightInterval = setInterval(() => {
    firstLocPlayerHP -= 5;
    firstLocPlayerHPCounter.innerHTML = `Počet životů hráče: ${firstLocPlayerHP}`;
    if (firstLocPlayerHP <= 0) {
      clearInterval(firstLocFightInterval);
      firstLocEnemyWin.style.display = "block";
      endGame = setInterval(() => {
        firstLoc.style.display = "none";
        mainLoc.style.display = "block";
        firstLocEnemyWin.style.display = "none";
        firstLocPlayerHP = 100;
        firstLocEnemyHP = 100;
        clearInterval(endGame);
      }, 1000);
    }
  }, 5000);
  firstLocAttackOne.onclick = () => {
    firstLocEnemyHP -= 5;
    firstLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${firstLocEnemyHP}`;
    firstLocEnemyDead();
  };
  firstLocAttackTwo.onclick = () => {
    firstLocEnemyHP -= 15;
    firstLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${firstLocEnemyHP}`;
    firstLocEnemyDead();
  };
  firstLocAttackThree.onclick = () => {
    firstLocEnemyHP -= 25;
    firstLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${firstLocEnemyHP}`;
    firstLocEnemyDead();
  };
}
function firstLocEnemyDead() {
  if (firstLocEnemyHP <= 0) {
    clearInterval(firstLocFightInterval);
    firstLocPlayerWin.style.display = "block";
    endGame = setInterval(() => {
      firstLoc.style.display = "none";
      mainLoc.style.display = "block";
      firstLocPlayerWin.style.display = "none";
      firstLocPlayerHP = 100;
      firstLocEnemyHP = 100;clearInterval(endGame);
    }, 1000);
  }
}
