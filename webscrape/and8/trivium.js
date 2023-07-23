var battleString = "";

var breaker1 = document.getElementById("dancer1_h").innerText.slice(1);
var breaker2 = document.getElementById("dancer2_h").innerText.slice(1);
var winner;
if (document.getElementsByClassName("round_info")[0].classList[1].slice(6,-4) == 1) {
    winner = breaker1;
}
else {
    winner = breaker2;
}
var numRounds = document.getElementsByClassName("round_info").length;
var numJudges = document.getElementsByClassName("judges_width").length / numRounds;

battleString += breaker1 + ",";
battleString += breaker2 + ",";
battleString += winner + ",";
battleString += numRounds + ",";
battleString += numJudges + ",";

for (var i = 0; i < numJudges; i++) {
    battleString += document.getElementsByClassName("judges_width")[i].querySelectorAll("#dancer1_tri, #dancer2_tri")[0].firstChild.innerText + ",";
}
for (var i = 0; i < (9 - numJudges); i++) {
    battleString += ",";
}

var ratingSets = document.getElementsByClassName("all_details");
var rating;
var misc;

for (var i = 0; i < ratingSets.length; i++) {
    if (ratingSets[i].parentElement.id == "dancer1_tri") {
        battleString += "-";
    }
    battleString += document.getElementsByClassName("judges_width")[i].querySelectorAll("#dancer1_tri, #dancer2_tri")[0].childNodes[2].innerText.slice(1,-1) + ",";
    for (var j = 0; j < 6; j++) {
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
    misc = document.querySelectorAll("#button_presses")[i];
    if (misc.textContent) {
        battleString += "breaker1 " + misc.getElementsByTagName("div")[0].textContent + " breaker2 " + misc.getElementsByTagName("div")[1].textContent;
    }
    battleString += ",";

    if (((i + 1) % numJudges) == 0) {
        for (var m = 0; m < (9 - numJudges); m++) {
            for (var x = 0; x < 8; x++) {
                battleString += ",";
            }
        }
    }
}

console.log(battleString);