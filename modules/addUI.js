import { loggedInAccount } from "../app.js";

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
let navAccountDisplay = document.querySelector(".nav-account-display");
let defaultNavDisplay = document.querySelector(".navbar");
let navProfileName = document.querySelector(".nav-account-name");
let navProfileIcon = document.querySelector(".nav-account-logo");
let siteDescription = document.querySelector(".site-description");
let belowArrowImg = document.querySelector(".main-below-img");
let navAccountDropdown = document.querySelector(".nav-account-dropdown");
let mapDiv = document.querySelector("#map");
//Functionality to switch between login form or signup form

function generateAccountDisplay() {
  defaultNavDisplay.classList.add("hidden");
  navAccountDisplay.classList.remove("hidden");
  signUpForm.classList.add("hidden");
  siteDescription.classList.add("hidden");
  belowArrowImg.classList.add("hidden");
  navProfileName.textContent = loggedInAccount.name;
}

const isTouchDevice = () => {
  return window.matchMedia("(pointer: coarse)").matches;
};

function displayProfileDropdown() {
  if (isTouchDevice()) {
    navAccountDisplay.addEventListener("click", function () {
      navAccountDropdown.classList.toggle("hidden");
    });
  } else {
    navAccountDisplay.addEventListener("mouseover", function () {
      navAccountDropdown.classList.remove("hidden");
    });
    navAccountDisplay.addEventListener("mouseout", function () {
      navAccountDropdown.classList.add("hidden");
    });
  }
}

function renderLoginForm() {
  loginForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
}

function renderSignUpForm() {
  loginForm.classList.add("hidden");
  signUpForm.classList.remove("hidden");
}

export default function renderUI() {
  //Listens for login link or button clicks
  navLoginBtn.addEventListener("click", renderLoginForm);
  alreadyAccountLink.addEventListener("click", renderLoginForm);

  //Listens for signup link or button clicks
  navSignUpBtn.addEventListener("click", renderSignUpForm);
  loginSingUpLink.addEventListener("click", renderSignUpForm);
  displayProfileDropdown();
}

// function displayMap() {
//   mapDiv.classList.remove("hidden");
//   navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//     enableHighAccuracy: true,
//   });

//   mapboxgl.accessToken =
//     "pk.eyJ1Ijoiam9zZXBoMjQ2OCIsImEiOiJjbDd4NzRoeWQwbmJhM3BsZTRobzNiZjdqIn0.t2HVJXIqK2XlY2EYAV-C3g";

//   function successLocation(position) {
//     console.log(position);
//     setupMap([position.coords.longitude, position.coords.latitude]);
//   }

//   function errorLocation() {
//     var map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v11",
//       zoom: 5,
//     });
//     map.addControl(new mapboxgl.NavigationControl(), "top-left");

//     map.addControl(
//       new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//       })
//     );
//   }

//   function setupMap(center) {
//     var map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: center,
//       zoom: 10,
//     });
//     map.addControl(new mapboxgl.NavigationControl(), "top-left");

//     map.addControl(
//       new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl,
//       })
//     );
//   }
// }

export { generateAccountDisplay };
