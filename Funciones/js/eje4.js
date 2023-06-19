const sumaArreglo = arr => {
    const longitud = arr.length;
    const suma = arr.reduce((a, b) => a + b, 0);
  
    return longitud + suma;
  }

  console.log(sumaArreglo([1, 2, 3, 4, 5]))
  

 /* let sumaArreglo = arr => {
    let longitud = arr.length;
    let suma = 0
//ciclo for para iterar el arr
    for (let i = 0; i < arr.length; i++){
        suma = suma + arr[i];
    }
        return longitud + suma;

  }
  console.log(sumaArreglo([1, 2, 3, 4, 5])) */