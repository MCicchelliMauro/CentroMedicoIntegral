"use strict";

//capturar form para prevenir envio
let forms = document.getElementsByTagName("form");
console.log(forms);
for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", (e)=> 
  e.preventDefault());
};

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
let checkBox = document.querySelector("#agree");
passw2.addEventListener("input", check);
checkBox.addEventListener("input", check);

function check(){
  if (passw1.value != "" && passw1.value == passw2.value && checkBox.checked) {
    btnAccount.innerHTML = `<i class="fa-solid fa-check"></i>`;
    //registro exitoso
    btnAccount.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(".register-account").classList.add("hidden");
      document.querySelector(".success").classList.remove("hidden");
    });
  } else {
    btnAccount.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};
