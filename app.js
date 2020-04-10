var form = document.querySelector("form");
var input = document.getElementById("convert");

form.addEventListener("submit", runEvent);

/**
 * @description Method run a array map into the string values
 * @param e
 * @requires e event triggered and prevent a default behavior
 * @returns
 */
function runEvent(e) {
  const arr = [...input.value];
  if (arr.map((x) => x == 1 || x == 0)) {
    const result = parseInt(input.value, 2);
    insertNode(result);
  }
  e.preventDefault();
}

/**
 * @description Method to perform a node insertion
 * @param value
 * @requires value is used to insert a DOM Node into the HTML
 * @returns
 */
function insertNode(value) {
  if (value) {
    let queryParagraph = document.querySelector(`.result__paragraph`);
    let querySpan = document.querySelector(`.result__span`);
    if (!queryParagraph && !querySpan) {
      appendNodes("result__paragraph", "result__span", value);
    }
    setValue("result__span", value);
    cleanValue(input);
  } else {
    appendNodes(
      "result__paragraph",
      "result__span",
      "Ops, you should type a binary digit"
    );
  }
}

/**
 * @description Method to clean the input value
 * @param node
 * @requires node is the typed value to be cleaned
 * @returns
 */
function cleanValue(node) {
  return (node.value = "");
}

/**
 * @description Method to append nodes into the dom
 * @param paragraphClass
 * @requires value is used to insert a DOM Node into the HTML
 * @returns
 */
function appendNodes(paragraphClass, spanClass, value) {
  const paragraph = document.createElement("p");
  const span = document.createElement("span");

  paragraph.className = paragraphClass;
  span.className = spanClass;

  form.appendChild(paragraph);
  form.appendChild(span);

  paragraph.textContent = "O valor binário em decimal é: ";
  span.textContent = `${value}`;
}

function setValue( nameClass , value ) {
  let parent = document.querySelector( `.${nameClass}` )
  return parent.textContent = `${value}`;
}
