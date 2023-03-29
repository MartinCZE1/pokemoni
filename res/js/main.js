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

const secondLocPlayerHPCounter = document.getElementById(
  "secondLocPlayerHPCounter"
);
const secondLocEnemyHPCounter = document.getElementById(
  "secondLocEnemyHPCounter"
);

const secondLocAttackOne = document.getElementById("secondLocAttackOne");
const secondLocAttackTwo = document.getElementById("secondLocAttackTwo");
const secondLocAttackThree = document.getElementById("secondLocAttackThree");

let secondLocPlayerHP = 100;
let secondLocEnemyHP = 100;

const fightBackButton = document.getElementById("fightBackButton");

//Start hry

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

//Hlavní lokace

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

//První boj

firstLocMenuButton.onclick = () => {
  mainLoc.style.display = "none";
  firstLoc.style.display = "block";
  fightBackButton.style.display = "none";
  firstLocPlayerWin.style.display = "none";
  firstLocEnemyWin.style.display = "none";
  firstLocFight();
};

function firstLocFight() {
  firstLocFightInterval = setInterval(() => {
    firstLocPlayerHP -= 5;
    firstLocPlayerHPCounter.innerHTML = `Počet životů hráče: ${firstLocPlayerHP}`;
    if (firstLocPlayerHP <= 0) {
      clearInterval(firstLocFightInterval);
      firstLocEnemyWin.style.display = "block";
      fightBackButton.style.display = "block";
    }
  }, 100);
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
    fightBackButton.style.display = "block";
  }
}

fightBackButton.onclick = () => {
  firstLoc.style.display = "none";
  mainLoc.style.display = "block";
  firstLocEnemyHP = 100;
  firstLocPlayerHP = 100;
};

//Druhý boj

secondLocMenuButton.onclick = () => {
  mainLoc.style.display = "none";
  secondLoc.style.display = "block";
  fightBackButton.style.display = "none";
  secondLocPlayerWin.style.display = "none";
  secondLocEnemyWin.style.display = "none";
  secondLocFight();
};

function secondLocFight() {
  secondLocFightInterval = setInterval(() => {
    secondLocPlayerHP -= 10;
    secondLocPlayerHPCounter.innerHTML = `Počet životů hráče: ${secondLocPlayerHP}`;
    if (secondLocPlayerHP <= 0) {
      clearInterval(secondLocFightInterval);
      secondLocEnemyWin.style.display = "block";
      fightBackButton.style.display = "block";
    }
  }, 5000);
  secondLocAttackOne.onclick = () => {
    secondLocEnemyHP -= 10;
    secondLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${secondLocEnemyHP}`;
    secondLocEnemyDead();
  };
  secondLocAttackTwo.onclick = () => {
    secondLocEnemyHP -= 20;
    secondLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${secondLocEnemyHP}`;
    secondLocEnemyDead();
  };
  secondLocAttackThree.onclick = () => {
    secondLocEnemyHP -= 30;
    secondLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${secondLocEnemyHP}`;
    secondLocEnemyDead();
  };
}

function secondLocEnemyDead() {
  if (secondLocEnemyHP <= 0) {
    clearInterval(secondLocFightInterval);
    secondLocPlayerWin.style.display = "block";
    fightBackButton.style.display = "block";
  }
}

fightBackButton.onclick = () => {
  firstLoc.style.display = "none";
  secondLoc.style.display = "none";
  mainLoc.style.display = "block";
  secondLocEnemyHP = 100;
  secondLocPlayerHP = 100;
};
