const numeroMayor = (num1, num2, num3) => {
    if (num1 === num2 && num2 === num3){ 
    return "Los números son iguales";
} else {
  return Math.max(num1, num2, num3);
  }
  }

const final = numeroMayor(5, 7, 9)

console.log(`${final}`)

