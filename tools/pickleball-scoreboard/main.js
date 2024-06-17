/**
 * HELPERS
 */

let gameNumber = 0
/**
 * Increments the specified team name by one
 * @param {"top" | "bottom"} team the team for which to increment the score
 */
function incrementScore(team) {
    // Get the current score
    let currentScore;
    if(team === "top") {
        currentScore = document.getElementById("score:top").innerHTML;
    }else if(team === "bottom") {
        currentScore = document.getElementById("score:bottom").innerHTML;
    }else{
        console.error("Unexpected team: ", team);
    }

    // isolate the actual scores
    const scores = currentScore.split(' ').filter(element => element !== '');
    scores[gameNumber]++;
    const scoresWithLeading = scores.map(score => String(score).length === 1 ? ' ' + score : score);
    const newScore = scoresWithLeading.join('  ');

    // set the new score
    if(team === "top") {
        document.getElementById("score:top").innerHTML = newScore;
    }else if(team === "bottom") {
        document.getElementById("score:bottom").innerHTML = newScore;
    }else{
        console.error("Unexpected team: ", team);
    }
}

function decrementScore(team) {
    // Get the current score
    let currentScore;
    if(team === "top") {
        currentScore = document.getElementById("score:top").innerHTML;
    }else if(team === "bottom") {
        currentScore = document.getElementById("score:bottom").innerHTML;
    }else{
        console.error("Unexpected team: ", team);
    }

    // isolate the actual scores
    const scores = currentScore.split(' ').filter(element => element !== '');
    scores[gameNumber]--;
    const scoresWithLeading = scores.map(score => String(score).length === 1 ? ' ' + score : score);
    const newScore = scoresWithLeading.join('  ');

    // set the new score
    if(team === "top") {
        document.getElementById("score:top").innerHTML = newScore;
    }else if(team === "bottom") {
        document.getElementById("score:bottom").innerHTML = newScore;
    }else{
        console.error("Unexpected team: ", team);
    }
}

let servingTeam = "top";
function changeServe () {
    if(servingTeam === "top"){
        servingTeam = "bottom";
        document.getElementById("serve:bottom").style.visibility = "visible";
        document.getElementById("serve:top").style.visibility = "hidden";
    }else if(servingTeam === "bottom"){
        servingTeam = "top";
        document.getElementById("serve:top").style.visibility = "visible";
        document.getElementById("serve:bottom").style.visibility = "hidden";
    }
}

function setGameNumber (_gameNumber) {
    gameNumber = _gameNumber;
    document.getElementById("gameNumberDisplay").innerHTML = _gameNumber;
}

function nextGame() {
    const topScore = document.getElementById("score:top").innerHTML;
    const bottomScore = document.getElementById("score:bottom").innerHTML;

    const topScores = topScore.split(' ').filter(element => element !== '');
    const bottomScores = bottomScore.split(' ').filter(element => element !== '');

    let newFound = false;
    let i = 0;
    while(!newFound && i <= 10) {
        if(topScores[i] === '-') {
            newFound = true;
            topScores[i] = 0;
            bottomScores[i] = 0;
        }
        i += 1;
    }

    const topScoresWithLeading = topScores.map(score => String(score).length === 1 ? ' ' + score : score);
    const newTopScore = topScoresWithLeading.join('  ');
    document.getElementById("score:top").innerHTML = newTopScore;

    const bottomScoresWithLeading = bottomScores.map(score => String(score).length === 1 ? ' ' + score : score);
    const newBottomScore = bottomScoresWithLeading.join('  ');
    document.getElementById("score:bottom").innerHTML = newBottomScore;
}

function changeTeamName(team) {
    if(team === "top"){
        document.getElementById("team:top").innerHTML = document.getElementById("teamNameInput:top").value
    } else {
        document.getElementById("team:bottom").innerHTML = document.getElementById("teamNameInput:bottom").value
    }
}

/**
 * USER INPUT
 */

// Update team names
document.getElementById("teamNameInput:top").addEventListener('input', (e) => {
    changeTeamName('top');
});
document.getElementById("teamNameInput:bottom").addEventListener('input', (e) => {
    changeTeamName('bottom');
})

// key press/button click listeners
document.addEventListener("keydown", (e) => {
    if(e.target.classList?.includes?.("no-key-capture")) return;
    const key = e.key;
    handleInput(key);
});

document.addEventListener("click", (e) => {
    if(e.target.classList?.includes?.("no-key-capture")) return;
    if(e.target.id?.includes("actionId-")) {
        const actionId = e.target.id.replace("actionId-","");
        handleInput(actionId);
    }
})


// key press/button click handler
function handleInput (actionId) {
    if(actionId === "p") {
        // increment point
        incrementScore(servingTeam);
    }else if(actionId === "m") {
        // minus point
        decrementScore(servingTeam);
    }else if(actionId === "s") {
        // sideout, change server
        changeServe();
    }else if(actionId === "g") {
        // next game
        setGameNumber(gameNumber + 1);
        nextGame();
    }else if (actionId === "G") {
        // previous game
        setGameNumber(gameNumber - 1);
    }else{
        console.warn("Unmatched actionId was: ", actionId);
    }
};


// document.addEventListener("keydown", (e) => {
//     if(e.target.classList?.includes?.("no-key-capture")) return;

//     const key = e.key;
//     if(key === "p") {
//         // increment point
//         incrementScore(servingTeam);
//     }else if(key === "m") {
//         // minus point
//         decrementScore(servingTeam);
//     }else if(key === "s") {
//         // sideout, change server
//         changeServe();
//     }else if(key === "g") {
//         // next game
//         setGameNumber(gameNumber + 1);
//         nextGame();
//     }else if (key === "G") {
//         // previous game
//         setGameNumber(gameNumber - 1);
//     }else{
//         console.warn("Unmatched key was: ", key);
//     }
// });


