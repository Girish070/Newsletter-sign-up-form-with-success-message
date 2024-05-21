"use strict";

let btnSubmit = document.querySelector(".subscrib_btn");
let btnDismiss = document.querySelector(".dissmiss_massage");
let formContainer = document.querySelector(".contact_form");
let successEl = document.querySelector(".success_massage");
let inputEl = document.querySelector("form input");

btnSubmit.addEventListener("click", () => {
  if (inputEl.value != "") {
    formContainer.classList.add("hide");
    successEl.classList.remove("hide");
  } else {
    document.querySelector(".error p").innerHTML = "Enter Valid Email";
    inputEl.classList.add("active");
  }
});

btnDismiss.addEventListener("click", () => {
  formContainer.classList.remove("hide");
  successEl.classList.add("hide");
  inputEl.classList.remove("active");
  document.querySelector(".error p").innerHTML = "";
});
