//Tutoriál
const tutorialButton = document.getElementById("tutorialButton");
const playButton = document.getElementById("playButton");

//Proměnné první lokace

//Tlačítka v hlavní lokaci
const firstLocMenuButton = document.getElementById("firstLocMenuButton");
const secondLocMenuButton = document.getElementById("secondLocMenuButton");
const thirdLocMenuButton = document.getElementById("thirdLocMenuButton");

//HP counter v první lokaci
const firstLocPlayerHPCounter = document.getElementById(
  "firstLocPlayerHPCounter"
);
const firstLocEnemyHPCounter = document.getElementById(
  "firstLocEnemyHPCounter"
);

//Bojová tlačítka v první lokaci
const firstLocAttackOne = document.getElementById("firstLocAttackOne");
const firstLocAttackTwo = document.getElementById("firstLocAttackTwo");
const firstLocAttackThree = document.getElementById("firstLocAttackThree");

//HP v první lokace
let firstLocPlayerHP = 100;
let firstLocEnemyHP = 100;

//Zpáteční tlačítka z první lokace
const firstLocLoseFightBackButton = document.getElementById(
  "firstLocLoseFightBackButton"
);
const firstLocWinFightBackButton = document.getElementById(
  "firstLocWinFightBackButton"
);

//Proměnné druhé lokace

//HP counter druhé lokace
const secondLocPlayerHPCounter = document.getElementById(
  "secondLocPlayerHPCounter"
);
const secondLocEnemyHPCounter = document.getElementById(
  "secondLocEnemyHPCounter"
);

//Bojová tlačítka druhé lokace
const secondLocAttackOne = document.getElementById("secondLocAttackOne");
const secondLocAttackTwo = document.getElementById("secondLocAttackTwo");
const secondLocAttackThree = document.getElementById("secondLocAttackThree");

//HP druhé lokace
let secondLocPlayerHP = 100;
let secondLocEnemyHP = 150;

//Zpáteční tlačítka druhé lokace
const secondLocLoseFightBackButton = document.getElementById(
  "secondLocLoseFightBackButton"
);
const secondLocWinFightBackButton = document.getElementById(
  "secondLocWinFightBackButton"
);

//Proměnné třetí lokace

//HP counter třetí lokace
const thirdLocPlayerHPCounter = document.getElementById(
  "thirdLocPlayerHPCounter"
);
const thirdLocEnemyHPCounter = document.getElementById(
  "thirdLocEnemyHPCounter"
);

//Bojová tlačítka třetí lokace
const thirdLocAttackOne = document.getElementById("thirdLocAttackOne");
const thirdLocAttackTwo = document.getElementById("thirdLocAttackTwo");
const thirdLocAttackThree = document.getElementById("thirdLocAttackThree");

//HP třetí lokace
let thirdLocPlayerHP = 100;
let thirdLocEnemyHP = 200;

//Zpáteční tlačítka třetí lokace
const thirdLocLoseFightBackButton = document.getElementById(
  "thirdLocLoseFightBackButton"
);
const thirdLocWinFightBackButton = document.getElementById(
  "thirdLocWinFightBackButton"
);

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
  firstLocLoseFightBackButton.style.display = "none";
  firstLocWinFightBackButton.style.display = "none";
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
      firstLocLoseFightBackButton.style.display = "block";
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
    firstLocWinFightBackButton.style.display = "block";
  }
}

firstLocLoseFightBackButton.onclick = () => {
  firstLocBackButtons();
};

firstLocWinFightBackButton.onclick = () => {
  firstLocBackButtons();
};

//Druhý boj

secondLocMenuButton.onclick = () => {
  mainLoc.style.display = "none";
  secondLoc.style.display = "block";
  secondLocLoseFightBackButton.style.display = "none";
  secondLocWinFightBackButton.style.display = "none";
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
      secondLocLoseFightBackButton.style.display = "block";
    }
  }, 3000);
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
    secondLocWinFightBackButton.style.display = "block";
  }
}

secondLocLoseFightBackButton.onclick = () => {
  secondLocBackButtons();
};

secondLocWinFightBackButton.onclick = () => {
  secondLocBackButtons();
};

//Třetí boj

thirdLocMenuButton.onclick = () => {
  mainLoc.style.display = "none";
  thirdLoc.style.display = "block";
  thirdLocLoseFightBackButton.style.display = "none";
  thirdLocWinFightBackButton.style.display = "none";
  thirdLocPlayerWin.style.display = "none";
  thirdLocEnemyWin.style.display = "none";
  thirdLocFight();
};

function thirdLocFight() {
  thirdLocFightInterval = setInterval(() => {
    thirdLocPlayerHP -= 10;
    thirdLocPlayerHPCounter.innerHTML = `Počet životů hráče: ${thirdLocPlayerHP}`;
    if (thirdLocPlayerHP <= 0) {
      clearInterval(thirdLocFightInterval);
      thirdLocEnemyWin.style.display = "block";
      thirdLocLoseFightBackButton.style.display = "block";
    }
  }, 700);
  thirdLocAttackOne.onclick = () => {
    thirdLocEnemyHP -= 10;
    thirdLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${thirdLocEnemyHP}`;
    thirdLocEnemyDead();
  };
  thirdLocAttackTwo.onclick = () => {
    thirdLocEnemyHP -= 20;
    thirdLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${thirdLocEnemyHP}`;
    thirdLocEnemyDead();
  };
  thirdLocAttackThree.onclick = () => {
    thirdLocEnemyHP -= 30;
    thirdLocEnemyHPCounter.innerHTML = `Počet životů nepřítele ${thirdLocEnemyHP}`;
    thirdLocEnemyDead();
  };
}

function thirdLocEnemyDead() {
  if (thirdLocEnemyHP <= 0) {
    clearInterval(thirdLocFightInterval);
    thirdLocPlayerWin.style.display = "block";
    thirdLocWinFightBackButton.style.display = "block";
  }
}

thirdLocLoseFightBackButton.onclick = () => {
  thirdLocBackButtons();
};

thirdLocWinFightBackButton.onclick = () => {
  thirdLocBackButtons();
};

//Zpáteční tlačítka z bojových lokací

function firstLocBackButtons() {
  firstLoc.style.display = "none";
  mainLoc.style.display = "block";
  firstLocEnemyHP = 100;
  firstLocPlayerHP = 100;
}

function secondLocBackButtons() {
  secondLoc.style.display = "none";
  mainLoc.style.display = "block";
  secondLocEnemyHP = 100;
  secondLocPlayerHP = 100;
}

function thirdLocBackButtons() {
  thirdLoc.style.display = "none";
  mainLoc.style.display = "block";
  thirdLocEnemyHP = 100;
  thirdLocPlayerHP = 100;
}
