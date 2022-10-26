const visitDisplay = document.querySelector("#lastvisit")
let timeStamp = Date.now(window.localStorage.getItem("visit1"));
let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0) {
	timeStamp = parseInt(Date.now()) - parseInt(timeStamp)
    localStorage.setItem("visit1", timeStamp)
    const days = Math.floor(timeStamp / (24*60*60*1000));
    visitDisplay.textContent = days;
} else {
	visitDisplay.textContent = "This is your first visit!";
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visit1", timeStamp)