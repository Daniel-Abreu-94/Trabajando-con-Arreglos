// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  const stringElements = array.filter(element => typeof element === 'string');
  const sortedStringElements = stringElements.sort();
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  sortedStringElements.forEach((element) => {
    if (typeof element === 'string'){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
    }
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  showList(strangeArray);
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
});
