let op1;
let op2;
let oper = "";
let total;

const validar = () => {
  let display = document.getElementById("pantalla");
  arrayDisplay = display.value.split(",")

  for (let i = 0; i < arrayDisplay.length; i++) {
    console.log(arrayDisplay[i]);
    
  };


};

const vaciar = () => {
  document.getElementById("pantalla").value = "";
  document.getElementById("info").innerHTML = "Info sobre el número";
};

const cuadrado = () => {
  let num = document.getElementById("pantalla");
  num.value = num.value * num.value;
  rellenar_info();
};

const mod = () => {
  let num = document.getElementById("pantalla");
  if (num.value < 0) {
    num.value = -1 * num.value;
  }
  rellenar_info();
};

const fact = () => {
  let num = document.getElementById("pantalla");
  for (let i = num.value - 1; i > 1; --i) {
    num.value = num.value * i;
  }
  rellenar_info();
};

const rellenar_info = () => {
  let num = document.getElementById("pantalla");
  let info;

  if (num.value < 100) {
    info = "Info: El resultado es menor que 100";
  }
  if (num.value >= 100 && num.value <= 200) {
    info = "Info: El resultado está entre 100 y 200";
  }
  if (num.value > 200) {
    info = "Info: El resultado es superior a 200";
  }

  document.getElementById("info").innerHTML = info;
};

const operando = (operador_usado) => {
  op1 = parseInt(document.getElementById("pantalla").value);
  oper = operador_usado;
};

const eq = () => {
  op2 = parseInt(document.getElementById("pantalla").value);
  switch (oper) {
    case "sum":
      total = op1 + op2;
      break;
    case "res":
      total = op1 - op2;
      break;
    case "mul":
      total = op1 * op2;
      break;
    case "div":
      if (op2 == 0) {
        total = "error";
      } else {
        total = op1 / op2;
      }
      break;
    case "mod":
      total = op1 % op2;
      break;
    case "pot":
      total = op1 ** op2;
      break;

    default:
      break;
  }
  oper = "";
  document.getElementById("pantalla").value = total;
};

const sumatorio = () => {
  let elementos = document.getElementById("pantalla").value.split(",");
  let resultado_suma = 0;
  for (let i = 0; i < elementos.length; i++) {
    elementos[i] = parseInt(elementos[i]);
    resultado_suma = resultado_suma + elementos[i];
  }
  document.getElementById("pantalla").value = resultado_suma;
};

const ordenar = () => {
  let display = document.getElementById("pantalla");
  displayArray = display.value.split(",");

  for (let i = 0; i < displayArray.length; i++) {
    displayArray[i] = parseInt(displayArray[i]);
  }

  displayArray.sort(function (a, b) {
    return a - b;
  });
  display.value = displayArray.join(",");
};

const revertir = () => {
  let display = document.getElementById("pantalla");
  display.value = display.value.split(",").reverse().join(",");
};

const quitar = () => {
  let display = document.getElementById("pantalla");
  let arrayDisplay = display.value.split(",");
  arrayDisplay.pop();
  display.value = arrayDisplay.join(",");
};
