// Grab the element by their ID

// Create a event listener that will listen to events
// or create a function that will be called when the event is triggered

// DOM --> Document Object Modal
const phoneInput = document.getElementById('phone');
const postalInput = document.getElementById('postal')
const emailInput = document.getElementById('email')

emailInput.addEventListener('input', () => {
  emailInput.nextElementSibling.innerHTML = '';
  if (!emailInput.checkValidity()) {
    emailInput.nextElementSibling.innerHTML = 'Not valid email'
  }
})

postalInput.addEventListener('blur', function () {
  const postalValue = postalInput.value.trim()
  // REGEX <-- regular expressions
  const phoneRegex = /^\d{5}$/;

  if (postalValue === '') {
    postalInput.nextElementSibling.innerText = 'Zip Code is required'
  } else if (!phoneRegex.test(postalValue)) {
    postalInput.nextElementSibling.innerText = 'Please enter a valid zip code'
  }
  else {
    postalInput.nextElementSibling.innerText = ''
  }
})

phoneInput.addEventListener('blur', function () {
  const phoneValue = phoneInput.value.trim()
  // REGEX <-- regular expressions
  const phoneRegex = /^\d{10}$/;

  if (phoneValue === '') {
    phoneInput.nextElementSibling.innerText = 'Phone Number is required'
  } else if (!phoneRegex.test(phoneValue)) {
    phoneInput.nextElementSibling.innerText = 'Please enter a valid phone number'
  }
  else {
    phoneInput.nextElementSibling.innerText = ''
  }
})

