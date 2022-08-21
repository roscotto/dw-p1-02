"use strict";

/* 1- Calcular e informar un sueldo sabiendo que:

La categoria define el sueldo basico mensual (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
La subcategoria define el multiplicador (A: x1.5, B: x2, C: x2.5)
Ambos datos son ingresados por el usuario

3- Informar dentro de que rango esta el sueldo:

Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
Rango intermedio: entre u$s 3000 exclusive y u$s 4000 inclusive
Rango avanzado: si supera los u$s 4000 */


let categoriaSueldo = 0;
let subcategoriaSueldo = "";

const categoriasValidas = [1, 2, 3];
const subcategoriasValidas = ["A", "a", "B", "b", "C", "c"];

let sueldoTotal = 0;


//FUNCION 1 - VALIDA LOS DATOS DE LA CATEGORIA INGRESADA
function validarCategoriaSueldo(valor) {
    let resultado;

    if (!(categoriasValidas.includes(categoriaSueldo))) {
        resultado = true; //DATOS INVÁLIDOS. EL LOOP DEBE REPETIRSE
        alert("La categoria ingresada es incorrecta. Recordá que los valores válidos son 1, 2 ó 3.");
    } else {
        resultado = false; // DATOS VÁLIDOS, EL LOOP PUEDE ROMPERSE Y CONTINUAR...
    }
    return resultado;
}

//FUNCION 2 - VALIDA LOS DATOS DE LA SUB CATEGORIA INGRESADA
function validarSubcategoriaSueldo(valor) {
    let resultado;

    if (!(subcategoriasValidas.includes(subcategoriaSueldo))) {
        resultado = true; //DATOS INVÁLIDOS. EL LOOP DEBE REPETIRSE
        alert("La subcategoria ingresada es incorrecta. Recordá que los valores válidos son A, B ó C.");
    } else {
        resultado = false; // DATOS VÁLIDOS, EL LOOP PUEDE ROMPERSE Y CONTINUAR...
    }
    return resultado;
}


do {
    do {
        categoriaSueldo = parseInt(prompt("Ingresá la categoría de tu sueldo básico mensual (1, 2 ó 3).")); // SE LE PIDE AL USUARIO QUE INGRESE LA CATEGORIA 1, 2 O 3

    } while (validarCategoriaSueldo(categoriaSueldo)); // LLAMAMOS A LA FUNCION 1


    do {
        subcategoriaSueldo = prompt("Ingresá la subcategoría que corresponda (A, B ó C)."); // SE LE PIDE AL USUARIO QUE INGRESE LA SUB CATEGORIA A, B O C.
    } while (validarSubcategoriaSueldo(subcategoriaSueldo)); // LLAMAMOS A LA FUNCION 2


} while (confirm("Hacé click en CANCELAR para finalizar."));

// OPERADOR TERNARIO QUE ESTABLECE SUELDO BASICO MENSUAL SEGUN CATEGORIA (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)
let sueldoBasico = (categoriaSueldo < 3) ? ((categoriaSueldo < 2) ? 1000 : 1500) : 2000;

// REALIZAMOS LA MULTIPLICACION SEGUN SUB CATEGORIA INGRESADA

switch (subcategoriaSueldo) {
    case "a":
    case "A":
        sueldoTotal = sueldoBasico * 1.5;
        break;

    case "b":
    case "B":
        sueldoTotal = sueldoBasico * 2;
        break;

    default:
        sueldoTotal = sueldoBasico * 2.5;
        break;

}


if (sueldoTotal >= 1500 && sueldoTotal <= 3000) { //Rango inicial: entre u$s 1500 inclusive y u$s 3000 inclusive
    alert("El sueldo se encuentra dentro del Rango Inicial.");
} else if (sueldoTotal > 3000 && sueldoTotal <= 4000) { //Rango intermedio: entre u$s 3000 exclusive y u$s 4000 inclusive
    alert("El sueldo se encuentra dentro del Rango Intermedio.");
} else { //Rango avanzado: si supera los u$s 4000
    alert("El sueldo se encuentra dentro del Rango Avanzado.");
}



