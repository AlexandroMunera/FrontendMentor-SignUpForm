const form = document.getElementById("frmFreeTrial");

const firtName = document.getElementById("firtName");
const firtNameError = document.querySelector("#firtName + span.error");
const firtNameErrorIcon = document.getElementById("iconErrorFirstName");

const lastName = document.getElementById("lastName");
const lastNameError = document.querySelector("#lastName + span.error");
const lastNameErrorIcon = document.getElementById("iconErrorLastName");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const emailErrorIcon = document.getElementById("iconErrorEmail");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const passwordErrorIcon = document.getElementById("iconErrorPassword");

firtName.addEventListener("input", function (event) {
  if (firtName.validity.valid) {
    firtNameError.textContent = "";
    firtNameError.className = "error";
    firtNameErrorIcon.className = "iconErrorDisable";
  } else {
    showError();
  }
});

lastName.addEventListener("input", function (event) {
  if (lastName.validity.valid) {
    lastNameError.textContent = "";
    lastNameError.className = "error";
    lastNameErrorIcon.className = "iconErrorDisable";
  } else {
    showError();
  }
});

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
    emailErrorIcon.className = "iconErrorDisable";
  } else {
    showError();
  }
});

password.addEventListener("input", function (event) {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
    passwordErrorIcon.className = "iconErrorDisable";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (event) {
  if (
    !firtName.validity.valid ||
    !lastName.validity.valid ||
    !email.validity.valid ||
    !password.validity.valid
  ) {
    showError();
    event.preventDefault();
    return false;
  }
  alert("Info correct");
});

function showError() {
  if (!firtName.validity.valid) {
    firtName.className = "errorActive";
    firtNameErrorIcon.className = "iconError";
  }
  if (firtName.validity.valueMissing) {
    firtNameError.textContent = "First name cannot be empty";
  } else if (firtName.validity.patternMismatch) {
    firtNameError.textContent = "First name cannot contain numbers";
  }

  if (!lastName.validity.valid) {
    lastName.className = "errorActive";
    lastNameErrorIcon.className = "iconError";
  }
  if (lastName.validity.valueMissing) {
    lastNameError.textContent = "Last name cannot be empty";
  } else if (lastName.validity.patternMismatch) {
    lastNameError.textContent = "Last name cannot contain numbers";
  }

  if (!email.validity.valid) {
    email.className = "errorActive";
    emailErrorIcon.className = "iconError";
  }
  if (email.validity.valueMissing) {
    emailError.textContent = "Email cannot be empty";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Looks like this is not an email";
  }

  if (!password.validity.valid) {
    password.className = "errorActive";
    passwordErrorIcon.className = "iconError";
  }
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password cannot be empty";
  } else if (password.validity.typeMismatch) {
    passwordError.textContent = "Looks like this is not an email";
  }
}
