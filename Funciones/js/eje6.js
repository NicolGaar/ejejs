const booleanoArray = (arreglo1,arreglo2) => {
    // Unimos los dos arreglos en uno solo
    const nuevoArreglo = [...arreglo1, ...arreglo2];
    // Verificamos si la longitud del nuevo arreglo es mayor o igual a 10
    if (nuevoArreglo.length >= 10) {
      return true;
    } else {
      return false;
    }
  }
  const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = [6, 7, 8, 9, 10];
const resultado = booleanoArray(arreglo1, arreglo2);
console.log(resultado); // true