const form = document.querySelector('.form');
const input = document.querySelector('.phonenumber');
const output = document.querySelector('.output');
const thankyou = document.querySelector('.thankyou')

const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

function testInfo(orderInput) {
    const ok = re.exec(orderInput.value);

    output.textContent = !ok
        ? `${orderInput.value} isn't written with the accepted phone number style. Try just numbers with no separators.` :
        " ";

}


function thanksMsg() {
    const date = new Date();
    let fname = document.querySelector(".name").value
    let email = document.querySelector(".email").value
    let phone = document.querySelector(".phonenumber").value
    let currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
    let specialins = document.querySelector(".specialins").value


    let card = document.createElement('div');
    card.setAttribute("class", "reciept")
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    p1.textContent = `Thanks ${fname} for ordering!`
    p2.textContent = `We will get back to you at ${email} or ${phone}.`
    p3.textContent = currentdate
    p4.textContent = `Special Instructions:  ${specialins}`

    card.appendChild(p1)
    card.appendChild(p2)
    card.appendChild(p3)
    card.appendChild(p4)
    thankyou.appendChild(card)
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    testInfo(input);
    if (good_or_bad) {
        thanksMsg();
    }

});

function handleData() {
    var form_data = new FormData(document.querySelector("form"));
    
    if (!form_data.has("fruit")) {
        document.getElementById("chk_option_error").style.visibility = "visible";
        return good_or_bad = false;
    }
    else {
        document.getElementById("chk_option_error").style.visibility = "hidden";
        return good_or_bad = true;
    }

}
