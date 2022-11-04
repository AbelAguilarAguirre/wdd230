//display a banner on Mondays or Tuesdays only at the very top of the page that says "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
const date = new Date();
const currentDay = date.getDay();
document.getElementById("specialbanner").style.display = "none";
if (currentDay >= 1 && currentDay <= 2) {
    document.getElementById("specialbanner").style.display = "block";
} else document.getElementById("specialbanner").style.display = "none";

//Current year
const currentYear = date.getFullYear(); 
document.getElementById("currentyear").innerHTML = currentYear;

//Todays date
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);

