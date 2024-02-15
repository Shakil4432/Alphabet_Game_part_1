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
// Function to handle keyboard events
function handleKeyboardEvent(event) {
    const targetKey = document.getElementById("current-alphabet").innerText.toLowerCase();
    const keyPressed = event.key.toLowerCase();
    
    if (keyPressed === targetKey) {
        incrementScore();
    } else {
        decreaseLife();
    }
    
    removeBackgroundColorById(targetKey);
    continueGame();
}

// Function to increment the score
function incrementScore() {
    const scoreCount = document.getElementById("increment_score");
    const scoreCountInt = parseInt(scoreCount.innerText) + 1;
    
    scoreCount.innerText = scoreCountInt;
    document.getElementById("final_score_text").innerText = scoreCountInt;
}

// Function to decrease life
function decreaseLife() {
    const lifeDecrease = document.getElementById("life_decrease");
    let lifeDecreaseInt = parseInt(lifeDecrease.innerText) - 1;
    
    lifeDecrease.innerText = lifeDecreaseInt;
    
    if (lifeDecreaseInt === 0) {
        hideElementById('play-ground');
        showElementById('final_score');
    }
}

// Function to continue the game
function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
    dynamicChangeKey(alphabet);
}

// Function to start the game
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

// Function to play again
function playAgain() {
    hideElementById('final_score');
    showElementById('play-ground');
    
    document.getElementById('increment_score').innerText = 0;
    document.getElementById('life_decrease').innerText = 5;
}

// Event listener for keyboard events
document.addEventListener("keyup", handleKeyboardEvent);


// normal function 
// function getKeyBoardEvent(event){

//     const targetKey = document.getElementById("current-alphabet");
//     const targetKeyText = targetKey.innerText;
//     const targetKeyTextLower = targetKeyText.toLowerCase();
//     if(event.key === targetKeyTextLower){
//         const scoreCount = document.getElementById("increment_score");
//         const scoreCountText = scoreCount.innerText;
//         let scoreCountInt = parseInt(scoreCountText) + 1;
//         document.getElementById("increment_score").innerText = scoreCountInt;
//         document.getElementById("final_score_text").innerText = scoreCountInt;
//     }
//     else{
//        const lifeDecrease = document.getElementById("life_decrease");
//        const lifeDecreaseText = lifeDecrease.innerText;
//        let lifeDecreaseInt = parseInt(lifeDecreaseText) - 1;
//        document.getElementById("life_decrease").innerText = lifeDecreaseInt;
//        if(lifeDecreaseInt === 0){
//         hideElementById('play-ground');
//         showElementById('final_score');
//        }
//     }
//     removeBackgroundColorById(targetKeyTextLower);
//     continueGame();
// }
// document.addEventListener("keyup", getKeyBoardEvent)
// function continueGame(){
//     // step -1: generate a random alphabet
//     const alphabet = getARandomAlphabet();

//     // set randomly generated alphabet to the screen (show it)
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;

//     // set background color
//     setBackgroundColorById(alphabet);

//     // dynamicChangeKey
//     dynamicChangeKey(alphabet);
// }

// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground');
//     continueGame();
// }

// function playAgain(){
//     hideElementById('final_score');
//     showElementById('play-ground');

//     document.getElementById('increment_score').innerText = 0;
//     document.getElementById('life_decrease').innerText=5;
// }