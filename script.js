let kazna = [
  ["عشاء", "فول"],
  ["فطور", "بيض"],
  ["غداء", "رز"],
];
let button = document.getElementById("btn");
let kelma = document.getElementById("kelma");

button.addEventListener("click", () => {
  let saf = Math.floor(Math.random() * kazna.length);
  let joa = Math.floor(Math.random() * kazna[saf].length);
  kelma.innerText = kazna[saf][joa];
});
