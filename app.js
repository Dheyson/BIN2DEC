const form = document.querySelector("form");
const input = document.getElementById("convert");

form.addEventListener("submit", runEvent);

function runEvent(e) {
  // let sum = 0;

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

  let qryParagraph = document.querySelector(`.result__paragraph`),
  qrySpan = document.querySelector(`.result__span`)

  if ( !qryParagraph && !qrySpan ) {
    appendNodes( 'result__paragraph' , 'result__span', value )
  }
  setValue( 'result__span', value )
  cleanValue(input);

}

function cleanValue(node) {
  return (node.value = "");
}

function appendNodes( paragraphClass, spanClass, value ) {

  const paragraph = document.createElement("p"),
  span = document.createElement("span");

  paragraph.className = paragraphClass;
  span.className = spanClass; 
  
  form.appendChild(paragraph);
  form.appendChild(span);

  paragraph.textContent = "O valor binário em decimal é: ";
  span.textContent = `${value}`;

}

function setValue( nameClass , value ) {
  let parent = qrySpan = document.querySelector( `.${nameClass}` )
  parent.textContent = `${value}`;
}
