///////

// because wdsf has the left and right position swapped for red and blue
// have to make sure correct number is pulled to correct position within data

// var system = "pseudo threefold"
var system = "wdsf"
// var system = "trivium"

var valuesCount;
var blanksCount;
if (system == "pseudo threefold") {
    valuesCount = 3;
    blanksCount = 4;
}
else if (system == "wdsf") {
    valuesCount = 5;
    blanksCount = 6;
}
else if (system == "trivium") {
    valuesCount = 6;
    blanksCount = 9;
}

var battlesString = "";
var battleString;

var breaker1;
var breaker2;
var breaker1RoundVotes;
var breaker2RoundVotes;
var breaker1VoteCount;
var breaker2VoteCount;
var breaker1RoundWin;
var breaker2RoundWin;
var rounds;
var numRounds;
var winner;

var judges;
var numJudges;

var rounds;
var scoreSets;
var scores;

var battles = document.getElementsByClassName("group-result");
for (var i = (battles.length - 1); i >= 0; i--) {
    battleString = "";

    breaker1 = battles[i].getElementsByClassName("athlete-red")[0].innerText.split(" (")[0].trim();
    breaker2 = battles[i].getElementsByClassName("athlete-blue")[0].innerText.split(" (")[0].trim();

    breaker1VoteCount = 0;
    breaker2VoteCount = 0;
    breaker1RoundWin = 0;
    breaker2RoundWin = 0;
    rounds = battles[i].getElementsByClassName("battle-round");
    numRounds = rounds.length;
    judges = battles[i].getElementsByClassName("battle-round")[0].getElementsByClassName("col-sm-12 trivium_scores");
    numJudges = judges.length;
    var j;
    for (j = 0; j < numRounds; j++) {
        // breaker1VoteCount += parseInt(roundWinners[j].innerText.split(":")[1]);
        // breaker2VoteCount += parseInt(roundWinners[j].innerText.split(":")[0]);
        // if (parseInt(roundWinners[j].innerText.split(":")[1]) > parseInt(roundWinners[j].innerText.split(":")[0])) {
        //     breaker1RoundWin += 1;
        // }
        // else if (parseInt(roundWinners[j].innerText.split(":")[1]) < parseInt(roundWinners[j].innerText.split(":")[0])) {
        //     breaker2RoundWin += 1;
        // }

        // breaker1VoteCount += parseInt(roundWinners[j].innerText.split("(")[1].split(")")[0].split(":")[1]);
        // breaker2VoteCount += parseInt(roundWinners[j].innerText.split("(")[1].split(")")[0].split(":")[0]);
        // if (parseInt(roundWinners[j].innerText.split("(")[1].split(")")[0].split(":")[1]) > parseInt(roundWinners[j].innerText.split("(")[1].split(")")[0].split(":")[0])) {
        //     breaker1RoundWin += 1;
        // }
        // else if (parseInt(roundWinners[j].innerText.split("(")[1].split(")")[0].split(":")[1]) < parseInt(roundWinners[j].innerText.split("(")[1].split(")")[0].split(":")[0])) {
        //     breaker2RoundWin += 1;
        // }
        breaker1RoundVotes = 0;
        breaker2RoundVotes = 0;
        for (k = 0; k < numJudges; k++) {
            if (rounds[j].getElementsByClassName("scores")[k].classList[1].includes("1")) breaker1RoundVotes++;
            if (rounds[j].getElementsByClassName("scores")[k].classList[1].includes("2")) breaker2RoundVotes++;
        }
        breaker1VoteCount += breaker1RoundVotes;
        breaker2VoteCount += breaker2RoundVotes;
        if (breaker1RoundVotes > breaker2RoundVotes) breaker1RoundWin++;
        else if (breaker1RoundVotes < breaker2RoundVotes) breaker2RoundWin++;
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
    battleString += numRounds + "," + numJudges + "," + breaker1RoundWin + "," + breaker2RoundWin + "," + breaker1VoteCount + "," + breaker2VoteCount + ",";
    for (j = 0; j < numJudges; j++) {
        battleString += judges[j].getElementsByClassName("judge-name")[0].innerText.trim() + ",";
    }
    for (j = 0; j < (9 - numJudges); j++) {
        battleString += ",";
    }

    for (j = 0; j < numRounds; j++) {
        scoreSets = rounds[j].getElementsByClassName("trivium_scores");
        var k;
        for (k = 0; k < scoreSets.length; k++) {
            if (scoreSets[k].getElementsByClassName("scores")[0].classList.contains("winner_1")) {
                battleString += "-";
            }
            battleString += scoreSets[k].getElementsByTagName("p")[0].innerText.slice(1,-1) + ",";

            scores = scoreSets[k].getElementsByClassName("score-bar");
            for (var m = 0; m < scores.length; m++) {
                if (scores[m].innerText == "") {
                    battleString += "0,";
                }
                else {
                    if (scores[m].childNodes[0].classList.contains("score-bar-1")) {
                        battleString += "-";
                    }
                    battleString += scores[m].innerText.slice(1,-1) + ",";
                }
            }
            if (system == "trivium") {
                battleString += scoreSets[k].getElementsByClassName("AthleteBlue")[0].innerText.trim().replaceAll(/(\r\n|\n|\r)/gm, "").replaceAll(" ","").replaceAll("1x", "1x ").replaceAll("2x", "2x ").replaceAll("3x", "3x ") + ",";
                battleString += scoreSets[k].getElementsByClassName("AthleteRed")[0].innerText.trim().replaceAll(/(\r\n|\n|\r)/gm, "").replaceAll(" ","").replaceAll("1x", "1x ").replaceAll("2x", "2x ").replaceAll("3x", "3x ") + ",";
                // battleString += scoreSets[k].getElementsByClassName("athlete2")[0].innerText.trim().replaceAll(/(\r\n|\n|\r)/gm, "").replaceAll(" ","").replaceAll("1x", "1x ").replaceAll("2x", "2x ").replaceAll("3x", "3x ") + ",";
                // battleString += scoreSets[k].getElementsByClassName("athlete1")[0].innerText.trim().replaceAll(/(\r\n|\n|\r)/gm, "").replaceAll(" ","").replaceAll("1x", "1x ").replaceAll("2x", "2x ").replaceAll("3x", "3x ") + ",";
            }
        }
        for (k = 0; k < (9 - numJudges); k++) {
            for (var x = 0; x < blanksCount; x++) {
                battleString += ",";
            }
        }
    }

    battlesString += battleString + "\n";
}

console.log(battlesString);