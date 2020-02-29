const form = document.querySelector("form");
const input = document.getElementById("convert");
const paragraph = document.createElement("p");
const span = document.createElement("span");

let sum = 0;

paragraph.className = "result__paragraph";
span.className = "result__span";
form.addEventListener("submit", runEvent);

function runEvent(e) {
  // console.log(
  //   [...input.value].reverse().forEach(function(element, index) {
  //    sum = sum + (element * Math.pow(2, index));
  //   })
  // );
  const arr = [...input.value];
  if (arr.map(x => x == 1 || x == 0)) {
    const result = parseInt(input.value, 2);
    insertNode(result);
  }
  e.preventDefault();
}

function insertNode(value) {
  form.appendChild(paragraph);
  form.appendChild(span);
  paragraph.textContent = "O valor binário em decimal é: ";
  span.textContent = `${value}`;
  input.value = "";
}
