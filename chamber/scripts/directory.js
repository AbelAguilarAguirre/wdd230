const requestJSON = "json/data.json"
const grid = document.querySelector('.grid');

fetch(requestJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
  let card = document.createElement('section');
  let h3 = document.createElement('h3');
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')
  let logo = document.createElement('img');

  h3.textContent = `${business.name}`
  p1.textContent = `${business.address}`
  p2.textContent = `${business.phone}`
  p3.innerHTML = `<a href="${business.url}" target="blank">${business.url}</a>`
  logo.setAttribute('src', business.image);
  logo.setAttribute('alt', `${business.name}'s Logo`);
  logo.setAttribute('loading', 'lazy');

  card.appendChild(logo);
  card.appendChild(h3);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);


  document.querySelector('.grid').appendChild(card);
}


