const tutorialButton = document.getElementById("tutorialButton")

tutorialButton.onclick = () => {
    start.style.display = "none"
    tutorialButton.style.display = "none"
    tutorialText.style.display = "block"
}

/* 
Podobný princip by mohl fungovat jako zobrazení obrázku mapy
tutorialButton.onmouseenter = () => {
    img.style.display = "block"
}

tutorialButton.onmouseleave = () => {
    img.style.display = "none"
}

*/