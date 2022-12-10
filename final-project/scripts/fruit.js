let good_or_bad = false
const form1 = document.querySelector('.form');
arr1 = []
const options = document.querySelector('.options')
const requestJSON = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
fetch(requestJSON)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        var fruits = jsonObject;
        for (let i = 0; i < 3; i++) {
            displayFruits(fruits, i);
        };
        return arr1 = jsonObject;
    }
    )

const form = document.querySelector('.form');
const input = document.querySelector('.phonenumber');
const output = document.querySelector('.output');
const thankyou = document.querySelector('.thankyou');

const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

function testInfo(orderInput) {
    const ok = re.exec(orderInput.value);

    output.textContent = !ok
        ? `${orderInput.value} isn't written with the accepted phone number style. Try just numbers with no separators.` :
        " ";

};


function Total(arr1, sortedFruits) {
    const totalCarbohydrates = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.carbohydrates : a, 0);
    const totalProtein = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.protein : a, 0);
    const totalFat = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.fat : a, 0);
    const totalCalories = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.calories : a, 0);
    const totalSugar = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.sugar : a, 0);
    const div = document.createElement('div');
    div.setAttribute("class", "reciept");
    let p0 = document.createElement('p');
    let p = document.createElement('p');
    p.setAttribute("class", "totals");

    if (sortedFruits[0] != "Select" && sortedFruits[1] != "Select" && sortedFruits[2] != "Select") {
        p0.innerHTML = `${sortedFruits[0]}, ${sortedFruits[1]}, and ${sortedFruits[2]} Juice Mix`;
        div.appendChild(p0);
        p.innerHTML = `<br>Nutritional Facts of your Juice:<br>
    Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
    Total Protein: ${totalProtein.toFixed(2)}<br>
    Total Fat: ${totalFat.toFixed(2)}<br>
    Total Calories: ${totalCalories.toFixed(2)}<br>
    Total Sugar: ${totalSugar.toFixed(2)}<br>`;
    };
    if (sortedFruits[0] == "Select" && sortedFruits[1] == "Select" && sortedFruits[2] == "Select") {
        p0.innerHTML = "<strong>Please choose at least one option</strong>";
        div.appendChild(p0);
    };
    if (sortedFruits[0] != "Select" && sortedFruits[1] != "Select" && sortedFruits[2] != "Select") {
        p0.innerHTML = `${sortedFruits[0]}, ${sortedFruits[1]}, and ${sortedFruits[2]} Juice Mix`;
        div.appendChild(p0);
        p.innerHTML = `<br>Nutritional Facts of your Juice:<br>
        Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
        Total Protein: ${totalProtein.toFixed(2)}<br>
        Total Fat: ${totalFat.toFixed(2)}<br>
        Total Calories: ${totalCalories.toFixed(2)}<br>
        Total Sugar: ${totalSugar.toFixed(2)}<br>`;
    };
    if (sortedFruits[0] != "Select" && sortedFruits[1] == "Select" && sortedFruits[2] == "Select") {
        p0.innerHTML = `${sortedFruits[0]} Juice`;
        div.appendChild(p0);
        p.innerHTML = `<br>Nutritional Facts of your Juice:<br>
        Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
        Total Protein: ${totalProtein.toFixed(2)}<br>
        Total Fat: ${totalFat.toFixed(2)}<br>
        Total Calories: ${totalCalories.toFixed(2)}<br>
        Total Sugar: ${totalSugar.toFixed(2)}<br>`;
    };
    if (sortedFruits[0] == "Select" && sortedFruits[1] != "Select" && sortedFruits[2] == "Select") {
        p0.innerHTML = `${sortedFruits[1]} Juice`;
        div.appendChild(p0);
        p.innerHTML = `<br>Nutritional Facts of your Juice:<br>
        Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
        Total Protein: ${totalProtein.toFixed(2)}<br>
        Total Fat: ${totalFat.toFixed(2)}<br>
        Total Calories: ${totalCalories.toFixed(2)}<br>
        Total Sugar: ${totalSugar.toFixed(2)}<br>`;
    };
    if (sortedFruits[0] == "Select" && sortedFruits[1] == "Select" && sortedFruits[2] != "Select") {
        p0.innerHTML = `${sortedFruits[2]} Juice`;
        div.appendChild(p0);
        p.innerHTML = `<br>Nutritional Facts of your Juice:<br>
        Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
        Total Protein: ${totalProtein.toFixed(2)}<br>
        Total Fat: ${totalFat.toFixed(2)}<br>
        Total Calories: ${totalCalories.toFixed(2)}<br>
        Total Sugar: ${totalSugar.toFixed(2)}<br>`;
    };
    if (sortedFruits[0] != "Select" && sortedFruits[1] != "Select" && sortedFruits[2] == "Select") {
        p0.innerHTML = `${sortedFruits[0]} and ${sortedFruits[1]} Juice Mix`;
        div.appendChild(p0);
        p.innerHTML = `<br>Nutritional Facts of your Juice:<br>
        Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
        Total Protein: ${totalProtein.toFixed(2)}<br>
        Total Fat: ${totalFat.toFixed(2)}<br>
        Total Calories: ${totalCalories.toFixed(2)}<br>
        Total Sugar: ${totalSugar.toFixed(2)}<br>`;
    };
    if (sortedFruits[0] != "Select" && sortedFruits[1] == "Select" && sortedFruits[2] != "Select") {
        p0.innerHTML = `${sortedFruits[0]} and ${sortedFruits[2]} Juice Mix`;
        div.appendChild(p0);
        p.innerHTML = `<br>Nutritional Facts of your Juice:<br>
        Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
        Total Protein: ${totalProtein.toFixed(2)}<br>
        Total Fat: ${totalFat.toFixed(2)}<br>
        Total Calories: ${totalCalories.toFixed(2)}<br>
        Total Sugar: ${totalSugar.toFixed(2)}<br>`;
    };
    if (sortedFruits[0] == "Select" && sortedFruits[1] != "Select" && sortedFruits[2] != "Select") {
        p0.innerHTML = `${sortedFruits[1]} and ${sortedFruits[2]} Juice Mix`;
        div.appendChild(p0);
        p.innerHTML = `<br>Nutritional Facts of your Juice:<br>
        Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
        Total Protein: ${totalProtein.toFixed(2)}<br>
        Total Fat: ${totalFat.toFixed(2)}<br>
        Total Calories: ${totalCalories.toFixed(2)}<br>
        Total Sugar: ${totalSugar.toFixed(2)}<br>`;
    };


    div.appendChild(p);
    thankyou.appendChild(div);
}

function thanksMsg(sortedFruits) {
    if (sortedFruits[0] == "Select" && sortedFruits[1] == "Select" && sortedFruits[2] == "Select") {
        return;
    } else {
        const date = new Date();
        let fname = document.querySelector(".name").value;
        let email = document.querySelector(".email").value;
        let phone = document.querySelector(".phonenumber").value;
        let currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
        let specialins = document.querySelector(".specialins").value;


        let card = document.createElement('div');
        card.setAttribute("class", "reciept");
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        p1.textContent = `Thanks ${fname} for ordering!`;
        p2.textContent = `We will get back to you at ${email} or ${phone}.`;
        p3.textContent = currentdate;
        p4.textContent = `Special Instructions:  ${specialins}`;

        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        thankyou.appendChild(card);
        var num = parseInt(localStorage.getItem("numJuice") ?? "0");
        localStorage.setItem("numJuice", ++num);
    }
};


function displayFruits(fruits, i) {
    const select = document.querySelector(`.fruitOp${i}`);
    let option = document.createElement("option");
    option.setAttribute('value', "Select");
    option.textContent = "Select:";
    select.appendChild(option);
    for (let x in fruits) {
        let option = document.createElement("option");
        option.setAttribute('value', fruits[x].name);
        option.textContent = fruits[x].name;
        select.appendChild(option);
    };
};

form1.addEventListener("submit", (event) => {
    event.preventDefault();
    let chosen0 = document.querySelector(".fruitOp0");
    let chosen1 = document.querySelector(".fruitOp1");
    let chosen2 = document.querySelector(".fruitOp2");
    let fruitList = [];

    fruitList.push(chosen0.value);
    fruitList.push(chosen1.value);
    fruitList.push(chosen2.value);

    testInfo(input);
    thanksMsg(fruitList);
    Total(arr1, fruitList);
    
}, {once:true});