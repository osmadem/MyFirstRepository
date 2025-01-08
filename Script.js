


//Declarar variables
var numero = "";
var numero1 = 0;
var numero2 = 0;
var operador = "";
var resultado = "0";

// Funci�n para agregar n�meros y operadores a la pantalla
function Numero(valor) {
    var pantalla = document.getElementById("num1");
    numero += valor; // Agrega el n�mero 
    pantalla.value += valor; // Muestra en pantalla 
}

// Funci�n para borrar todo
function borrar() {
    numero = "";
    numero1 = 0;
    numero2 = 0;
    operador = "";
    resultado = "0";
    document.getElementById("num1").value = ""; // Limpia la pantalla
}

// Funci�n para borrar el �ltimo n�mero o car�cter
function deleteLast() {
    const pantalla = document.getElementById("num1");
    numero = numero.slice(0, -1); // Elimina el �ltimo n�mero o car�cter
    pantalla.value = pantalla.value.slice(0, -1); // Muestra el cambio en pantalla
}

// Funci�n para sumar
function sumar() {
    numero1 = parseFloat(numero); // Guarda el primer n�mero
    operador = "+";
    numero = ""; // Reinicia la variable de n�mero
    document.getElementById("num1").value = numero1 + "+"; // Muestra el operador en pantalla
}

// Funci�n para restar
function restar() {
    numero1 = parseFloat(numero); // Guarda el primer n�mero
    operador = "-";
    numero = ""; // Reinicia la variable de n�mero
    document.getElementById("num1").value = numero1 + "-"; // Muestra el operador en pantalla
}

// Funci�n para multiplicar
function multiplicar() {
    numero1 = parseFloat(numero); // Guarda el primer n�mero
    operador = "*";
    numero = ""; // Reinicia la variable de n�mero
    document.getElementById("num1").value = numero1 + "*"; // Muestra el operador en pantalla
}

// Funci�n para dividir
function dividir() {
    numero1 = parseFloat(numero); // Guarda el primer n�mero
    operador = "/";
    numero = ""; // Reinicia la variable de n�mero
    document.getElementById("num1").value = numero1 + "/"; // Muestra el operador en pantalla
}

// Funci�n para realizar las operaciones
function resultadoFinal() {
    numero2 = parseFloat(numero); // Guarda el segundo n�mero
    var pantalla = document.getElementById("num1");

    if (isNaN(numero1) || isNaN(numero2)) {
        pantalla.value = "Error";
        return;
    }

    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero2 !== 0 ? numero1 / numero2 : "Error";
            break;
        default:
            resultado = "Error";
    }

    pantalla.value = resultado; // Muestra el resultado en pantalla
    numero = resultado.toString(); // Reinicia con el resultado
    numero1 = 0;
    operador = "";
}

