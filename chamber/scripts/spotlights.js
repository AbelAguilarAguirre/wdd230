const requestJSON = "json/data.json"
const spotlights = document.querySelector('.spotlights');

fetch(requestJSON)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        let spotlightCompany = businesses.filter(goldSilverMember);
        let shuffledBusinesses = spotlightCompany.sort(shuffle);
        for (let i = 0; i < 3; i++) {
            displayBusinesses(shuffledBusinesses[i]);
        };
    });

function goldSilverMember(business) {
    if (business.membership == "gold" || business.membership == "silver") {
        return business;
    } else {
        return false;
    };
};
function shuffle(){
    return 0.5 - Math.random();
}

function displayBusinesses(business) {
        let card = document.createElement('div');   
        card.setAttribute('class', 'sl1');
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