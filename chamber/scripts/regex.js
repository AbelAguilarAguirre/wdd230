const form = document.querySelector('#form');
const input = document.querySelector('#business');
const output = document.querySelector('#output');

const re = /^[ \w-]{7,}/;

function testInfo(businessInput) {
    const ok = re.exec(businessInput.value);

    output.textContent = !ok
        ? `${businessInput.value} isn't written with the accepted alpha characters, hyphens, and spaces with a minimum of seven characters.`:
        window.location.href="https://abelaguilaraguirre.github.io/wdd230/chamber/thankyou.html";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    testInfo(input);
});

