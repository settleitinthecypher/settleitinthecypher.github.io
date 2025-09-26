document.getElementsByClassName("arrow text-center")[0].click();

setTimeout(() => {
    var battleString;

    var breaker1;
    var breaker2;
    var breaker1VoteCount;
    var breaker2VoteCount;
    var breaker1RoundWin;
    var breaker2RoundWin;
    var rounds;
    var numRounds = 0;
    var winner;
    
    var judges;
    var numJudges;
    
    var rounds;
    var scoreSets;
    var scores;
    
    battleString = "";
    breaker1 = document.getElementsByClassName("score-horizontal-container")[0].getElementsByClassName("competitor-long-name")[0].innerText;
    breaker2 = document.getElementsByClassName("score-horizontal-container")[0].getElementsByClassName("competitor-long-name")[2].innerText;
    breaker1VoteCount = document.getElementsByClassName("d-flex w-20  ")[0].getElementsByTagName("b")[0].innerText.slice(1,-1);
    breaker2VoteCount = document.getElementsByClassName("d-flex w-20  ")[0].getElementsByTagName("b")[1].innerText.slice(1,-1);;
    breaker1RoundWin = document.getElementsByClassName("score-horizontal-result-number undefined")[0].innerText;
    breaker2RoundWin = document.getElementsByClassName("score-horizontal-result-number undefined")[1].innerText;
    
    var roundsInfo = document.getElementsByClassName("bkg-individual-main")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (var i = 0; i < roundsInfo.length; i++) {
        if (roundsInfo[i].getElementsByTagName("td").length > 0) {
            if (roundsInfo[i].getElementsByTagName("td")[0].innerHTML.includes("Round ")) {
                numRounds++;
            }
        }
    }
    if (breaker1RoundWin > breaker2RoundWin) {
        winner = breaker1;
    }
    else if (breaker1RoundWin < breaker2RoundWin) {
        winner = breaker2;
    }
    else if (breaker1RoundWin == breaker2RoundWin) {
        if (breaker1VoteCount > breaker2VoteCount) {
            winner = breaker1;
        }
        else if (breaker1VoteCount < breaker2VoteCount) {
            winner = breaker2;
        }
        else if (breaker1VoteCount == breaker2VoteCount) {
            winner = "Tie";
        }
    }
    battleString += breaker1 + "," + breaker2 + "," + winner + ",";
    
    var judgesInfo = document.getElementsByClassName("table-referees")[1].getElementsByTagName("tr");
    numJudges = judgesInfo.length;
    battleString += numRounds + "," + numJudges + "," + breaker1RoundWin + "," + breaker2RoundWin + "," + breaker1VoteCount + "," + breaker2VoteCount + ",";
    
    for (var i = 0; i < judgesInfo.length; i++) {
        battleString += judgesInfo[i].getElementsByClassName("competitor-container")[0].innerText + ",";
    }
    for (j = 0; j < (9 - numJudges); j++) {
        battleString += ",";
    }
    
    var judgeScores;
    for (var i = 3; i < roundsInfo.length; i++) {
        judgeScores = roundsInfo[i].getElementsByTagName("td");
        for (var j = 1; j < judgeScores.length; j++) {
            if (judgeScores[j].querySelectorAll('svg[data-ocs-label="LabelRedCard"]').length > 0) {
                battleString += "-";
            }
            if (!judgeScores[j].innerText.slice(2,-1)) {
                battleString += "0";
            }
            battleString += judgeScores[j].innerText.slice(2,-1) + ",";
        }
        if (((i + 1) % 12) == 0) {
            i += 3;
        }
    }
    for (k = 0; k < (9 - numJudges); k++) {
        battleString += ",,,,,,,,,";
    }
    
    console.log(battleString);
}, 250);