function sumaLista(lista) {
  let suma = 0;
  
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  
  return suma;
}

const numeros = [8, 10, 9, 10, 52];
const resultado = sumaLista(numeros);
console.log(resultado); 