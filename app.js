'use strict';

export const input = document.querySelector("input");
const button = document.querySelector("button");
const mail = document.querySelector(".mail");

function setErr(message) {
    const errMsg = document.querySelector(".error");
    errMsg.textContent = message;
    input.classList.add("err");
    setTimeout(() => {
      errMsg.textContent = "";
      input.classList.remove("err");
      input.value =''
    }, 2000);
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim() == "") {
        setErr("email required");
    } else if (input.validity.valid == false) {
        setErr("valid email required")
    } else {
        location = "success.html";
        sessionStorage.setItem("mail", input.value);
        input.value = '';
    }
});
try {
    mail.textContent = sessionStorage.getItem("mail")
} catch{}




