const form = document.querySelector('.form');
const input = document.querySelector('.phonenumber');
const output = document.querySelector('.output');
const thankyou = document.querySelector('.thankyou')

const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

function testInfo(orderInput) {
    const ok = re.exec(orderInput.value);

    output.textContent = !ok
        ? `${orderInput.value} isn't written with the accepted phone number style. Try just numbers with no separators.`:
        " ";
}


function thanksMsg() {
    const date = new Date();
    let fname = document.querySelector(".name").value
    let email = document.querySelector(".email").value
    let phone = document.querySelector(".phonenumber").value
    let currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
    

    let card = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    p1.textContent = `Thanks ${fname} for ordering!`
    p2.textContent = `We will get back to you at ${email} or ${phone}.`
    p3.textContent = currentdate

    card.appendChild(p1)
    card.appendChild(p2)
    card.appendChild(p3)
    thankyou.appendChild(card)
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    testInfo(input);
    thanksMsg();
    
});

(function() {
    function addValidation(checkboxes) {
        const firstCheckbox = getFirstCheckbox(checkboxes);
    
        if (firstCheckbox) {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener('change', function() {
                    checkValidity(checkboxes, firstCheckbox);
                });
            }

            checkValidity(checkboxes, firstCheckbox);
        }
    }
    
    function getFirstCheckbox(checkboxes) {
        return checkboxes.length > 0 ? checkboxes[0] : null;
    }

    function isChecked(checkboxes) {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity(checkboxes, firstCheckbox) {
        const errorMessage = !isChecked(checkboxes) ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

        const form = document.querySelector('.form');
    
    // Let's add a validation for the first group of checkboxes
    const checkboxes = form.querySelectorAll('.checkbox');
    addValidation(checkboxes);
    
});
