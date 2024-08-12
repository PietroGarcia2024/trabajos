console.log("hola mundo, mundoial");
var numero1 = 5;
var numero2 = 10;
var resultado = numero1 + numero2;
console.log("El resultado de: " + numero1 + " mas " + numero2 + " es " + resultado);

numero1 = prompt("Ingrese numero 1 : ");
numero2 = prompt("Ingrese numero 2 : ");
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

resultado = numero1+numero2;
alert("Resultado : " + resultado);

function suma1(numero1, numero2); {
    resultado = numero1 + numero2;
    return resultado;
}

resultado = suma1(numero1, numero2);
alert("resultado = " + resultado);
