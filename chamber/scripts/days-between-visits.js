const visitDisplay = document.querySelector("#lastvisit")
let timeStamp = Date(window.localStorage.getItem("visit1"));
let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0) {
	timeStamp = timeStamp-timeStamp
    visitDisplay.textContent = timeStamp
} else {
	visitDisplay.textContent = "This is your first visit!";
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visit1", timeStamp)