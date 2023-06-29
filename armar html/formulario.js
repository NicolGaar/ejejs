const formularioDOM = document.querySelector("#formm");


formularioDOM.addEventListener("submit",function(e) {
    e.preventDefault();
console.log("evento ok");
alert("se envio tu fornulario");
});