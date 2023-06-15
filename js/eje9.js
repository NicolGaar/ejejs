var frase = prompt("Ingrese una frase:");
var contador = 0;

for (var i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase() === "a") {
    contador++;
  }
}

console.log("La letra 'a' aparece " + contador + " veces en la frase.");
