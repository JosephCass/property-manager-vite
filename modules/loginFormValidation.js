import { accounts, loggedInAccount, setLoggedInAccount } from "../app.js";
// import { displayMap } from "./addUI";

let loginForm = document.querySelector(".login-form");
let loginEmailInput = document.querySelector(".login-email-input");
let loginEmailError = document.querySelector(".login-email-error");
let loginEmailContainer = document.querySelector(".login-email-container");
let loginPasswordInput = document.querySelector(".login-password-input");
let loginPasswordError = document.querySelector(".login-password-error");
let loginPasswordContainer = document.querySelector(
  ".login-password-container"
);
let loginBtn = document.querySelector(".login-btn");

function findAccount(email) {
  let foundAccount = null;
  for (let account of accounts) {
    if (email === account.email) {
      foundAccount = account;
    }
  }
  return foundAccount;
}

function handleEmailError(account) {
  if (!account) {
    loginEmailContainer.classList.add("input-error");
    loginEmailError.textContent = "This email does not have an account";
  } else {
    loginEmailContainer.classList.remove("input-error");
    loginEmailError.textContent = "";
  }
}

function checkIfPasswordMatches(account) {
  if (loginPasswordInput.value === account.password) {
    loginPasswordContainer.classList.remove("input-error");
    loginPasswordError.textContent = "";
    setLoggedInAccount(account);
    return true;
  } else if (!account) {
    loginPasswordError.textContent = "Please enter a valid email";
    loginPasswordContainer.add("input-error");
    return false;
  } else {
    loginPasswordContainer.classList.add("input-error");
    loginPasswordError.textContent = "This password is incorrect";
    return false;
  }
}

function authenticateLoginInfo() {
  let account = findAccount(loginEmailInput.value);
  if (!account) return false;
  handleEmailError(account);
  checkIfPasswordMatches(account);

  //check if email exist
  //loop through all accounts and check for account whos .email === the input email
  // if email doesn't exist add the input-error class and make the error span text 'This email does not have an account.
}

export default function renderLoginFormValidation() {
  loginForm.addEventListener("submit", function (event) {
    if (!authenticateLoginInfo()) {
      event.preventDefault();
    } else {
      // displayMap();
      //set logged in account to be
    }
  });
}

// add and remove input-error from container class tobe redd
