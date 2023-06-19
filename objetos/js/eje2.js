const alumno = {
    nombre: "Nico",
    ingles: 70,
    programacion: 50,
    html: 45
  };
  
  // promedio
  let totalnotas = alumno.ingles + alumno.programacion + alumno.html;
  let promedio = totalnotas / 3;
  
  
  console.log(`El promedio de ${alumno.nombre}`);
  console.log(`Nota final: ${promedio}`);
  