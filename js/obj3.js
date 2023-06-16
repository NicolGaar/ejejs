// Definir el objeto producto
const producto = {
    nombre: "radio",
    precio: 30000,
    descuento: 25,
    valorFinal: function() {
      return this.precio - (this.descuento * this.precio / 100);
    }
  };
  
   const precioNeto = producto.valorFinal();
  
  
  console.log("Precio con descuento: " + precioNeto);
  

