const esVocal = caracter => {
    const letras = ['a', 'e', 'i', 'o', 'u'];
    const caracterMinuscula = caracter.toLowerCase();
  
    return letras.includes(caracterMinuscula);
  }
  console.log(esVocal('a'));
  console.log(esVocal('g'));
  
 