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

        const shuffledFruits = fruits.sort(shuffle);
        for (let i = 0; i < 3; i++) {
            displayFruits(shuffledFruits[i], i);
        }
        return arr1 = jsonObject;
    }
    )


function shuffle() {
    return 0.5 - Math.random();
}




function Total(arr1, sortedFruits) {
    const totalCarbohydrates = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.carbohydrates : a, 0)
    console.log(totalCarbohydrates)
    const totalProtein = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.protein : a, 0)
    console.log(totalProtein)
    const totalFat = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.fat : a, 0)
    console.log(totalFat)
    const totalCalories = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.calories : a, 0)
    console.log(totalCalories)
    const totalSugar = arr1.reduce((a, b) => sortedFruits.includes(b.name) ? a += +b.nutritions.sugar : a, 0)
    console.log(totalSugar)
    let p = document.createElement('p');
    p.innerHTML = `Nutritional Facts of your Juice:<br>
    Total Carbs: ${totalCarbohydrates.toFixed(2)}<br>
    Total Protein: ${totalProtein.toFixed(2)}<br>
    Total Fat: ${totalFat.toFixed(2)}<br>
    Total Calories: ${totalCalories.toFixed(2)}<br>
    Total Sugar: ${totalSugar.toFixed(2)}<br>`

    thankyou.appendChild(p)
}


function displayFruits(fruit, i) {

    let label = document.createElement("label");
    let fruitOption = document.createElement('input');
    let p = document.createElement('p');
    fruitOption.setAttribute('value', fruit.name);
    fruitOption.setAttribute('type', "checkbox");
    fruitOption.setAttribute('class', `checkbox`);
    fruitOption.setAttribute('name', "fruit");
    p.textContent = `${fruit.name}`;
    label.appendChild(fruitOption);
    label.appendChild(p);

    options.appendChild(label);
}

form1.addEventListener("submit", (event) => {
    event.preventDefault();
    let chosen = document.querySelectorAll('input[name="fruit"]:checked');
    let fruitList = [];
    chosen.forEach((fruit) => {
        fruitList.push(fruit.value);
    });
    if (good_or_bad) {
        Total(arr1, fruitList)
    }
})