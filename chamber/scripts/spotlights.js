const requestJSON = "json/data.json"
const spotlights = document.querySelector('.spotlights');

fetch(requestJSON)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const businesses = jsonObject['businesses'];
        var businessesArray = Object.keys(businesses);
        var randomNumber = Math.random();
        var businessesIndex = Math.floor(randomNumber * 6);
        var randomKey = businessesArray[businessesIndex];
        var randomValue1 = businesses[randomKey];
        displayBusinesses(randomValue1);
        var businessesArray = Object.keys(businesses);
        var randomNumber = Math.random();
        var businessesIndex = Math.floor(randomNumber * 6);
        var randomKey = businessesArray[businessesIndex];
        var randomValue2 = businesses[randomKey];
        displayBusinesses(randomValue2);
        var businessesArray = Object.keys(businesses);
        var randomNumber = Math.random();
        var businessesIndex = Math.floor(randomNumber * 6);
        var randomKey = businessesArray[businessesIndex];
        var randomValue3 = businesses[randomKey];
        displayBusinesses(randomValue3);
    });

function displayBusinesses(business) {
    if (business.membership == "gold" || business.membership == "silver") {
        let card = document.createElement('div');
        if (business.membership == "gold") {
            card.setAttribute('class', 'sl1');
        } else {
            card.setAttribute('class', 'sl3');
        }

        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', `${business.name}'s Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('class', 'slimg');
        let p1 = document.createElement('p');
        let hr = document.createElement('hr');
        let div = document.createElement('div')
        div.setAttribute('class', 'contact-info');
        let p2 = document.createElement('a');
        p2.setAttribute('class', 'email');
        p2.setAttribute('href', `tel:${business.phone}`)
        let p3 = document.createElement('a');
        p3.setAttribute('class', 'email');
        p3.setAttribute('href', `${business.url}`);



        h2.textContent = `${business.name}`;
        p1.textContent = `${business.slogan}`;
        p2.textContent = `${business.phone}`;
        p3.textContent = `${business.url}`;


        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(hr);
        card.appendChild(div);
        div.appendChild(p2);
        div.appendChild(p3);


        document.querySelector('.spotlights').appendChild(card);
    }
    
}