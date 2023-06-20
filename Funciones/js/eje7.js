function funcionArray(arreglo1, arreglo2) {
    // Creamos un nuevo arreglo
    const nuevoArreglo = [];
    // Recorremos los dos arreglos
    for (let i = 0; i < arreglo1.length; i++) {
      // Multiplicamos cada elemento del arreglo por 2
      nuevoArreglo.push(arreglo1[i] * 2);
    }
    // Recorremos los dos arreglos
    for (let i = 0; i < arreglo2.length; i++) {
      // Multiplicamos cada elemento del arreglo por 2
      nuevoArreglo.push(arreglo2[i] * 2);
    }
    // Devolvemos el nuevo arreglo
    return nuevoArreglo;
  }

const arreglo1 = [2, 5, 2];
const arreglo2 = [1, 5, 3];
const resultado = funcionArray(arreglo1, arreglo2);
console.log(resultado); // [4, 10, 4, 2, 10, 6]