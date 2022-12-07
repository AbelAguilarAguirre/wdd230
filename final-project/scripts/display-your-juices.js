let yourJuices = document.querySelector(".yourjuice");
function displayNumJuice() {
    // Displays your juices card
    let num = parseInt(localStorage.getItem("numJuice"));
    let title = document.createElement("h1");
    let msg = document.createElement("h3")
    let number = document.createElement("h2");
    title.textContent = "History of Number of Juices Ordered"
    if (num == 0 || window.isNaN(num)) {
        msg.textContent = "You have never ordered our juice! Go to the Order Fresh to order now!"
    } else if (num == 1) {
        msg.textContent = "The first one got you to comeback huh! Treat yourself again!"
        number.innerHTML = `You have ordered ${num} juice.`
    } else {
        msg.textContent = "You have ordered here before. Dont forget to order your favorite juice!"
        number.innerHTML = `You have ordered ${num} juices.`
    }
    
    yourJuices.appendChild(title)
    yourJuices.appendChild(msg)
    yourJuices.appendChild(number)

}
displayNumJuice();