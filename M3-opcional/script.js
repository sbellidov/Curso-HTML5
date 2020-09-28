
function vaciar() {          //vacía el cuadro de texto con click
  document.getElementById("n1").value = "";
}

function cuadrado() {       // Cálculo del cuadrado
  let num = document.getElementById("n1");
  num.value = num.value * num.value;
}

function cubo () {          // Cálculo del cubo
    let num = document.getElementById("n1");
    num.value = num.value * num.value * num.value
}