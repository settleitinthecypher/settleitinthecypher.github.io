// update this
var system = "traditional";
// var system = "threefold";
// var system = "trivium";

var valuesCount;
var blanksCount;
if (system == "threefold") {
    valuesCount = 3;
    blanksCount = 4;
}
if (system == "trivium") {
    valuesCount = 6;
    blanksCount = 9;
}

var battleString = "";

var breaker1 = document.getElementById("dancer1_h").innerText.trim();
var breaker2 = document.getElementById("dancer2_h").innerText.trim();
var breaker1RoundWin = 0;
var breaker2RoundWin = 0;
var roundWinners = document.getElementsByClassName("round_info");
for (var i = 0; i < roundWinners.length; i++) {
    if (roundWinners[i].classList[1]) {
        if (roundWinners[i].classList[1].slice(6,7) == "1") {
            breaker1RoundWin += 1;
        }
        else if (roundWinners[i].classList[1].slice(6,7) == "2") {
            breaker2RoundWin += 1;
        }
    }
}
var numRounds = roundWinners.length;
var breaker1VoteCount = 0;
var breaker2VoteCount = 0;
var winner;
var voteCounts = document.getElementsByTagName("nobr");

for (var i = 1; i < (numRounds + 1); i++) {
    breaker1VoteCount += parseInt(voteCounts[i].innerText.slice(11,12));
    breaker2VoteCount += parseInt(voteCounts[i].innerText.slice(13,14));
    if (system == "traditional") {
        break;
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
var numJudges = document.getElementsByClassName("judges_width").length / numRounds;
var tiebreaker = false;
if (numRounds > 1) tiebreaker = true;
if (system == "traditional") numRounds = "";
battleString += numRounds + ","
if (system == "traditional") {
    if (tiebreaker) battleString += "yes,";
    else battleString += "no,";
}
battleString += numJudges + ",";
if (system != "traditional") battleString += breaker1RoundWin + "," + breaker2RoundWin + ",";
var tieVoteCount = 0;
var tieBreaker1VoteCount = "";
var tieBreaker2VoteCount = "";
var tieTieVoteCount = "";
if (system == "traditional") {
    for (var i = 0; i < roundWinners[0].getElementsByClassName("judges_width").length; i++) {
        if (roundWinners[0].getElementsByClassName("judges_width")[i].children[0].id.includes("TIE")) {
            tieVoteCount++;
        }
    }
    if (tiebreaker) {
        tieBreaker1VoteCount = 0;
        tieBreaker2VoteCount = 0;
        tieTieVoteCount = 0;
        for (var i = 0; i < roundWinners[1].getElementsByClassName("judges_width").length; i++) {
            if (roundWinners[1].getElementsByClassName("judges_width")[i].children[0].id.includes("dancer1")) {
                tieBreaker1VoteCount++;
            }
            else if (roundWinners[1].getElementsByClassName("judges_width")[i].children[0].id.includes("dancer2")) {
                tieBreaker2VoteCount++;
            }
            else if (roundWinners[1].getElementsByClassName("judges_width")[i].children[0].id.includes("TIE")) {
                tieTieVoteCount++;
            }
        }
    }
}
battleString += breaker1VoteCount + "," + breaker2VoteCount + ",";
if (system == "traditional") battleString += tieVoteCount + "," + tieBreaker1VoteCount + "," + tieBreaker2VoteCount + "," + tieTieVoteCount + ",";


for (var i = 0; i < numJudges; i++) {
    battleString += document.getElementsByClassName("judges_width")[i].querySelectorAll("#dancer1_tri, #dancer2_tri, #TIE_tri")[0].firstChild.innerText.trim() + ",";
}
for (var i = 0; i < (9 - numJudges); i++) {
    battleString += ",";
}

if (system == "traditional") {
    var judgeVotes = document.getElementsByClassName("judges_width");
    for (var i = 0; i < judgeVotes.length; i++) {
        if (judgeVotes[i].children[0].id.includes("dancer1")) battleString += "red,";
        else if (judgeVotes[i].children[0].id.includes("dancer2")) battleString += "blue,";
        else if (judgeVotes[i].children[0].id.includes("TIE")) battleString += "tie,";
        if (((i + 1) % numJudges) == 0) {
            for (var j = 0; j < (9 - numJudges); j++) {
                battleString += ","
            }
        }
    }
}

else {
    var ratingSets = document.getElementsByClassName("all_details");
    var rating;
    var misc;

    for (var i = 0; i < ratingSets.length; i++) {
        if (ratingSets[i].parentElement.id == "dancer1_tri") {
            battleString += "-";
        }
        battleString += document.getElementsByClassName("judges_width")[i].querySelectorAll("#dancer1_tri, #dancer2_tri")[0].childNodes[2].innerText.slice(1,-1) + ",";
        for (var j = 0; j < valuesCount; j++) {
            if (ratingSets[i].getElementsByClassName("fader_neu")[j].getElementsByTagName("div").length > 0) {
                rating = ratingSets[i].getElementsByClassName("fader_neu")[j].getElementsByTagName("div")[0];
                if (rating.id == "dancer1") {
                    battleString += "-";
                }
                battleString += rating.innerText.slice(1,-1) + ",";
            }
            else {
                battleString += "0,"
            }
        }
        if (system == "trivium") {
            misc = document.querySelectorAll("#button_presses")[i];
            if (misc.textContent) {
                battleString += misc.getElementsByTagName("div")[0].textContent + ",";
                battleString += misc.getElementsByTagName("div")[1].textContent + ",";
            }
            else {
                battleString += ",,";
            }
        }

        if (((i + 1) % numJudges) == 0) {
            for (var m = 0; m < (9 - numJudges); m++) {
                for (var x = 0; x < blanksCount; x++) {
                    battleString += ",";
                }
            }
        }
    }
}

console.log(battleString);