var numero1 = prompt("Ingrese el primer número:");
var numero2 = prompt("Ingrese el segundo número:");

if (numero1 > numero2) {
  console.log("El primer número es mayor: " + numero1);
} else if (numero2 > numero1) {
  console.log("El segundo número es mayor: " + numero2);
} else {
  console.log("Los números son iguales.");
}