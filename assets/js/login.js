"use strict";

//recuperar contraseña
document.querySelector("#spanRecover").addEventListener("click", () => {
  document.querySelector(".start").classList.add("hidden");
  document.querySelector(".recover").classList.remove("hidden");
});

//registrar cuenta
document.querySelector("#btnRegister").addEventListener("click", () => {
  document.querySelector(".register").classList.add("hidden");
  document.querySelector(".register-account").classList.remove("hidden");
});

//limitar cant de cifras en input DNI
const inputDni = document.getElementById("regDni");
inputDni.addEventListener("keypress", function (e) {
  if (inputDni.value.length >= 8) {
    e.preventDefault();
  }
});

//validar contraseñas
let btnAccount = document.querySelector("#btnAccount");
let passw1 = document.querySelector("#passw1");
let passw2 = document.querySelector("#passw2");
passw2.addEventListener("input", () => {
  if (passw1.value == passw2.value) {
    btnAccount.innerHTML = `<i class="fa-solid fa-check"></i>`
  }else{
    btnAccount.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    
    //registro exitoso
    document.querySelector("#formRegister").addEventListener("submit", (e) => {
      e.preventDefault;
      document.querySelector(".register-account").classList.add("hidden");
      document.querySelector(".success").classList.remove("hidden");
    });
  }
});
