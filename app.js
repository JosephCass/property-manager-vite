import renderSignUpFormValidation from "./modules/signUpFormValidation.js";
import renderLoginFormValidation from "./modules/loginFormValidation.js";
import renderUI from "./modules/addUI.js";
// const mbxStyles = require('@mapbox/mapbox-sdk/services/styles');
// const stylesService = mbxStyles({ accessToken: MY_ACCESS_TOKEN });
// stylesService exposes listStyles(), createStyle(), getStyle(), etc.

let loginPassInput = document.querySelector(".login-password-input");
let loginPassReveal = document.querySelector(".login-password-reveal");
let loginBtn = document.querySelector(".login-btn");
let navLoginBtn = document.querySelector(".login-btn-nav");
let navSignUpBtn = document.querySelector(".signup-btn-nav");
let loginSingUpLink = document.querySelector(".login-signup-link");
let alreadyAccountLink = document.querySelector(".already-account-link");
let signUpForm = document.querySelector(".signup-form");
let loginForm = document.querySelector(".login-form");
let signupUsername = document.querySelector(".signup-username-input");
let signupUsernameError = document.querySelector(".signup-username-error");
let signupUsernameContainer = document.querySelector(".signup-username");

let accounts = [];
let loggedInAccount = null;

function setLoggedInAccount(account) {
  loggedInAccount = account;
}

//Functionality to reveal password in login form
loginPassReveal.addEventListener("click", function () {
  if (
    loginPassReveal.src ===
    "http://127.0.0.1:5501/Property%20Manager/assets/eye-slash-regular.svg"
  ) {
    loginPassReveal.src = "assets/eye-regular.svg";
    loginPassInput.type = "text";
  } else {
    loginPassReveal.src = "assets/eye-slash-regular.svg";
    loginPassInput.type = "password";
  }
});

//checks if login data is valid then renders a page based on the data of the account
// `

renderUI();
renderSignUpFormValidation();
renderLoginFormValidation();
//add boxshadow to forms and remove blue border line maybe change background

export { accounts, loggedInAccount, setLoggedInAccount };
