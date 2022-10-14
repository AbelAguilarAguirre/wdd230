//Todays date
document.getElementById('date').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());