function processEmployeeData(empleado) {
    // Determinar si el empleado es elegible para un bono
    let esElegibleParaBono = empleado.salario <= 50000;
  
    // Calcular el promedio de las calificaciones de desempeño
    let sumaDeCalificaciones = 0;
    for (let i = 0; i < empleado.calificacionesDeDesempeño.length; i++) {
      sumaDeCalificaciones += empleado.calificacionesDeDesempeño[i];
    }
    let promedioDeCalificaciones = sumaDeCalificaciones / empleado.calificacionesDeDesempeño.length;
  
    // Determinar el rango de desempeño
    let rangoDeDesempeño;
    if (promedioDeCalificaciones >= 90) {
      rangoDeDesempeño = 'A';
    } else if (promedioDeCalificaciones >= 80) {
      rangoDeDesempeño = 'B';
    } else if (promedioDeCalificaciones >= 70) {
      rangoDeDesempeño = 'C';
    } else if (promedioDeCalificaciones >= 60) {
      rangoDeDesempeño = 'D';
    } else {
      rangoDeDesempeño = 'F';
    }
  
    // Crear un objeto JSON con la información procesada
    let resultado = {
      "nombre": empleado.nombre,
      "esElegibleParaBono": esElegibleParaBono,
      "promedioDeCalificaciones": promedioDeCalificaciones,
      "rangoDeDesempeño": rangoDeDesempeño
    };
  
    return resultado;
  }
  
  // Ejemplo de uso
  let empleado = {
    "nombre": "John Doe",
    "edad": 30,
    "salario": 45000,
    "calificacionesDeDesempeño": [85, 90, 78, 92, 88]
  };
  
  let resultado = processEmployeeData(empleado);
  console.log(resultado);