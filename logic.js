const form  = document.getElementById('frmFreeTrial');

const firtName = document.getElementById('firtName');
const firtNameError = document.querySelector('#firtName + span.error');

const lastName = document.getElementById('lastName');
const lastNameError = document.querySelector('#lastName + span.error');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');


firtName.addEventListener('input', function (event) {

    if (firtName.validity.valid) {
        firtNameError.textContent = '';
        firtNameError.className = 'error';
    } else {
      showError();
    }
  });

  lastName.addEventListener('input', function (event) {

    if (lastName.validity.valid) {
        lastNameError.textContent = '';
        lastNameError.className = 'error';
    } else {
      showError();
    }
  });

  email.addEventListener('input', function (event) {

    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
    } else {
      showError();
    }
  });


  password.addEventListener('input', function (event) {

  if (password.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {

  if(!email.validity.valid) {
    showError();
    event.preventDefault();
  }

  // Show message ok
});

function showError() {
  if(firtName.validity.valueMissing) {
    firtNameError.textContent = 'First name cannot be empty';
  } else if(firtName.validity.typeMismatch) {
    firtNameError.textContent = 'First name cannot contain numbers';
  }

  if(lastName.validity.valueMissing) {
    lastNameError.textContent = 'Last name cannot be empty';
  } else if(lastName.validity.typeMismatch) {
    lastNameError.textContent = 'Last name cannot contain numbers';
  }

  if(email.validity.valueMissing) {
    emailError.textContent = 'Email cannot be empty';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Looks like this is not an email';
  }

  if(password.validity.valueMissing) {
    passwordError.textContent = 'Password cannot be empty';
  } else if(password.validity.typeMismatch) {
    passwordError.textContent = 'Looks like this is not an email';
  }
}