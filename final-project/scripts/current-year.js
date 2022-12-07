//Current year
const date = new Date();
const tomorrow = new Date(date);
tomorrow.setDate(tomorrow.getDate()+1)
const currentYear = date.getFullYear(); 
document.querySelector(".currentyear").innerHTML = currentYear;