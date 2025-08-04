const now = new Date();
let time = document.querySelector("#date");
curr = now
time.innerHTML = now.toLocaleTimeString();

let date = document.querySelector("#time");
date.innerHTML = `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}`