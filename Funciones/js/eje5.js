const multiplicarArreglo = arreglo => {
    // Obtenemos el número menor y el número mayor del arreglo
    const menor = Math.min(...arreglo);
    const mayor = Math.max(...arreglo);
    // Multiplicamos el número menor y el número mayor
    const resultado = menor * mayor;
    // Devolvemos el resultado
    return resultado;
  }
  const arreglo = [1, 2, 3, 4, 5];
const resultado = multiplicarArreglo(arreglo);
console.log(resultado); 