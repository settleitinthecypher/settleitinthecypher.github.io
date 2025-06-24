// https://and8.dance/en/stats
// need to login to see data

// first expand all year sections on page because no event data when collapsed
(async() => {
    var years = document.getElementsByClassName("report_show_hide");
    var delay = 1000; // 1 second between each loop iteration. For some reason they don't seem to load when expanded too quickly.

    for (var i = years.length - 1; i > 0; i--) {
        years[i].click();
        await new Promise(resolve => setTimeout(resolve, delay));
    }
})();

// then scrape event data
var events = document.querySelectorAll("#report_list");
var eventDateArray = [];
var eventDate = "";
var eventName = "";
var eventDetails = "";
var eventDetailTag = "";
var pageName = "";
var eventString = "";

for (var i = 0; i < events.length; i++) {
    eventDateArray = events[i].getElementsByTagName("small")[0].innerText.split(".");
    eventDate = eventDateArray[2] + "." + eventDateArray[1] + "." + eventDateArray[0];
    eventName = events[i].getElementsByTagName("a")[0].innerText;
    console.log(eventDate + " - " + eventName);
    eventDetails = events[i].querySelector("#hashtags").querySelectorAll("*");
    for (var j = 0; j < eventDetails.length; j++) {
        eventDetailTag = eventDetails[j].outerHTML.split(" ")[0].split(">")[0];
        if (eventDetailTag == "<div") {
            if (eventDetails[j].innerText) {
                pageName = eventDetails[j].innerText;
            }
        }
        else if (eventDetailTag == "<a") {
            eventString += eventDate + ";" + eventName + ";" + pageName + ";" + eventDetails[j].innerText + ";" + eventDetails[j].href.slice(0, -1) + "\n";
        }
    }
}

console.log(eventString);