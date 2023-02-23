
const zipInput = document.getElementById("zip");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const fullNameInput = document.getElementById("name")

emailInput.addEventListener('input', function () {
    emailInput.nextElementSibling.innerHTML = '';
    if (!emailInput.checkValidity()) {
        emailInput.nextElementSibling.innerHTML = 'Not a valid email'
    }
})

fullNameInput.addEventListener('blur', function () {
    const fullNameValue = fullNameInput.value.trim()
    const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/

    if (fullNameValue === '') {
        fullNameInput.nextElementSibling.innerHTML = 'Full name is require'
    } else if (!fullNameRegex.test(fullNameValue)) {
        fullNameInput.nextElementSibling.innerHTML = "Please enter a valid full name"
    } else {
        fullNameInput.nextElementSibling.innerHTML = ''
    }
})

zipInput.addEventListener('blur', function () {
    const zipValue = zipInput.value.trim()
    const zipRegex = /^\d{5}$/

    if (zipValue === '') {
        zipInput.nextElementSibling.innerText = 'zip code is required'
    } else if (!zipRegex.test(zipValue)) {
        zipInput.nextElementSibling.innerText = 'Please enter a valid zip code'
    } else {
        zipInput.nextElementSibling.innerText = ''
    }
})

phoneInput.addEventListener('blur', function () {
    const phoneValue = phoneInput.value.trim()
    const phoneRegex = /^\d{10}$/

    if (phoneValue === '') {
        phoneInput.nextElementSibling.innerText = 'phone number is required'
    } else if (!phoneRegex.test(phoneValue)) {
        phoneInput.nextElementSibling.innerText = 'Please enter valid phone number'
    } else {
        phoneInput.nextElementSibling.innerText = ''
    }
})









