// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }
function getKeyBoardEvent(event){

    const targetKey = document.getElementById("current-alphabet");
    const targetKeyText = targetKey.innerText;
    const targetKeyTextLower = targetKeyText.toLowerCase();
    if(event.key === targetKeyTextLower){
        const scoreCount = document.getElementById("increment_score");
        const scoreCountText = scoreCount.innerText;
        let scoreCountInt = parseInt(scoreCountText) + 1;
        document.getElementById("increment_score").innerText = scoreCountInt;
        document.getElementById("final_score_text").innerText = scoreCountInt;
    }
    else{
       const lifeDecrease = document.getElementById("life_decrease");
       const lifeDecreaseText = lifeDecrease.innerText;
       let lifeDecreaseInt = parseInt(lifeDecreaseText) - 1;
       document.getElementById("life_decrease").innerText = lifeDecreaseInt;
       if(lifeDecreaseInt === 0){
        hideElementById('play-ground');
        showElementById('final_score');
       }
    }
    removeBackgroundColorById(targetKeyTextLower);
    continueGame();
}
document.addEventListener("keyup", getKeyBoardEvent)
function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

    // dynamicChangeKey
    dynamicChangeKey(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function playAgain(){
    hideElementById('final_score');
    showElementById('play-ground');

    document.getElementById('increment_score').innerText = 0;
    document.getElementById('life_decrease').innerText=5;
}