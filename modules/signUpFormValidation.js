import Account from "./account.js";
import { accounts, loggedInAccount, setLoggedInAccount } from "../app.js";
import { generateAccountDisplay } from "./addUI.js";
// import { displayMap } from "./addUI";

let signUpForm = document.querySelector(".signup-form");
let loginForm = document.querySelector(".login-form");
let signupUsername = document.querySelector(".signup-username-input");
let signupUsernameError = document.querySelector(".signup-username-error");
let signupUsernameContainer = document.querySelector(".signup-username");
let signupEmail = document.querySelector(".signup-email-input");
let signupEmailError = document.querySelector(".signup-email-error");
let signupEmailContainer = document.querySelector(".signup-email");
let signupCountry = document.querySelector(".signup-country-input");
let signupCountryError = document.querySelector(".signup-country-error");
let signupCountryContainer = document.querySelector(".signup-country");
let signupZip = document.querySelector(".signup-zipcode-input");
let signupZipError = document.querySelector(".signup-zipcode-error");
let signupZipContainer = document.querySelector(".signup-zipcode");
let signupPassword = document.querySelector(".signup-password-input");
let signupPasswordError = document.querySelector(".signup-password-error");
let signupPasswordContainer = document.querySelector(".signup-password");
let signupConfirm = document.querySelector(".signup-confirm-input");
let signupConfirmError = document.querySelector(".signup-confirm-error");
let signupConfirmContainer = document.querySelector(".signup-confirm");
let submitBtn = document.querySelector(".create-account-btn");
let linkAccountPage = document.querySelector(".link-account-page");

function handleMissingValue(inputElement, errorElement) {
  if (inputElement.validity.valueMissing) {
    errorElement.textContent = "*This field is required";
  }
}

function validateUsername() {
  if (signupUsername.validity.valueMissing) {
    signupUsernameError.textContent = "*This field is required";
  } else if (signupUsername.validity.patternMismatch) {
    signupUsernameError.textContent = "Please enter only letters.";
  }
  signupUsernameContainer.classList.add("input-error");
}

function validateUsernameInputListener() {
  signupUsername.addEventListener("input", function () {
    if (signupUsername.validity.valid) {
      //reset text content and class
      signupUsernameError.textContent = "";
      signupUsernameContainer.classList.remove("input-error");
    } else {
      validateUsername();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function validateEmail() {
  handleMissingValue(signupEmail, signupEmailError);
  if (signupEmail.validity.typeMismatch) {
    signupEmailError.textContent = "Please enter a valid email address";
  }
  signupEmailContainer.classList.add("input-error");
}

function validateEmailInputListener() {
  signupEmail.addEventListener("input", function () {
    if (signupEmail.validity.valid) {
      //reset text content and class
      signupEmailError.textContent = "";
      signupEmailContainer.classList.remove("input-error");
    } else {
      validateEmail();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function validateCountry() {
  handleMissingValue(signupCountry, signupCountryError);
  if (signupCountry.validity.patternMismatch) {
    signupCountryError.textContent = "Please enter a valid country";
  }
  signupCountryContainer.classList.add("input-error");
}

function validateCountryInputListener() {
  signupCountry.addEventListener("input", function () {
    if (signupCountry.validity.valid) {
      //reset text content and class
      signupCountryError.textContent = "";
      signupCountryContainer.classList.remove("input-error");
    } else {
      validateCountry();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function validateZipCode() {
  handleMissingValue(signupZip, signupZipError);
  if (signupZip.validity.typeMismatch) {
    signupZipError.textContent = "Please enter a valid zip code";
  }
  signupZipContainer.classList.add("input-error");
}

function validateZipCodeInputListener() {
  signupZip.addEventListener("input", function () {
    if (signupZip.validity.valid) {
      //reset text content and class
      signupZipError.textContent = "";
      signupZipContainer.classList.remove("input-error");
    } else {
      validateZipCode();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function validatePassword() {
  handleMissingValue(signupPassword, signupPasswordError);
  if (signupPassword.validity.patternMismatch) {
    signupPasswordError.textContent =
      "Password must be 8 characters long, contain atleast one lowercase letter, one uppercase letter, one number and one special character";
  }
  signupPasswordContainer.classList.add("input-error");
}

function validatePasswordInputListener() {
  signupPassword.addEventListener("input", function () {
    if (signupPassword.validity.valid) {
      //reset text content and class
      signupPasswordError.textContent = "";
      signupPasswordContainer.classList.remove("input-error");
    } else {
      validatePassword();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function checkPasswordMatch() {
  return signupConfirm.value === signupPassword.value;
}

function validateConfirm() {
  handleMissingValue(signupConfirm, signupConfirmError);
  if (!checkPasswordMatch()) {
    signupConfirmError.textContent = "Passwords do not match";
  }

  signupConfirmContainer.classList.add("input-error");
}

function validateConfirmInputListener() {
  signupConfirm.addEventListener("input", function () {
    if (signupConfirm.validity.valid && checkPasswordMatch()) {
      //reset text content and class
      signupConfirmError.textContent = "";
      signupConfirmContainer.classList.remove("input-error");
    } else {
      validateConfirm();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}
// pp

function checkInputValidity() {
  let inputs = signUpForm.querySelectorAll("input");
  let valid = true;
  inputs.forEach(function (curr) {
    if (!curr.validity.valid) {
      valid = false;
    }
  });

  return valid;
  // let valid = true;
  // signupUsername.validity.valid;
  // signupEmail.validity.valid;
  // signupCountry.validity.valid;
  // signupZip.validity.valid;
  // signupPassword.validity.valid;
  // signupConfirm.validity.valid;
}

function registerAccount() {
  let name = signupUsername.value;
  let email = signupEmail.value;
  let country = signupCountry.value;
  let zip = signupZip.value;
  let password = signupPassword.value;

  let newAccount = new Account(name, email, country, zip, password);
  accounts.push(newAccount);
  setLoggedInAccount(newAccount);
  console.log(loggedInAccount);
}

function validateSignUpForm() {
  signUpForm.addEventListener("submit", function (event) {
    const isValid = checkInputValidity();

    if (!isValid) {
      event.preventDefault();
    } else if (isValid) {
      event.preventDefault();
      registerAccount();
      generateAccountDisplay();
      // displayMap();
    }
  });
}

export default function renderSignUpFormValidation() {
  validateUsernameInputListener();
  validateEmailInputListener();
  validateCountryInputListener();
  validateZipCodeInputListener();
  validatePasswordInputListener();
  validateConfirmInputListener();
  validateSignUpForm();
}
