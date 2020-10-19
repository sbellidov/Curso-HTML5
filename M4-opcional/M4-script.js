// MODELO
var peliculas = [
  { titulo: "Superlópez", director: "Javier Ruiz Caldera", estreno: "2018" },
  { titulo: "E.T.", director: "Steven Spielberg", estreno: "1982" },
  { titulo: "Interstellar", director: "Christopher Nolan", estreno: "2014" },
];

// VISTAS
function indexView(pelis) {
  var i = 0,
    html = "<ul>";
  while (i < pelis.length) {
    html = html + `<li id="show" data-my-id="${i}"> ${pelis[i].titulo}</li>`;
    i = i + 1;
  }
  return html + `</ul> <button id="new">Crear</button> `;
}

function showView(peli) {
  return `
          La película <b> ${peli.titulo}</b>, estrenada
          en el año <b> ${peli.estreno}</b>, fue
          dirigida por <b> ${peli.director}</b>.
          
          <p><button id="index"> Volver </button></p>`;
}

function newView() {
  return `Introduce nueva película: <input type="text" id="peli"> <button id="create">Añadir</button>`
}

// CONTROLADORES
function indexContr() {
  document.getElementById("main").innerHTML = indexView(peliculas);
}
function showContr(i) {
  document.getElementById("main").innerHTML = showView(peliculas[i]);
}
function newContr() {
  document.getElementById("main").innerHTML = newView();
}
function createContr() {
  peliculas.push(document.getElementById("peli").value);
  indexContr();
}

// EVENTOS
document.addEventListener("DOMContentLoaded", (ev) => indexContr());
document.addEventListener("click", (ev) => {
  if (ev.target.matches("#index")) indexContr();
  else if (ev.target.matches("#show")) showContr(ev.target.dataset.myId);
  else if (ev.target.matches("#new")) newContr();
  else if (ev.target.matches("#create")) createContr();
});
