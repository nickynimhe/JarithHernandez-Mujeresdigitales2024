
/* FUNCIONES */


function checkAge (edad){

    let mensaje;

    if(edad < 18){
        mensaje = "Eres menor de edad";
        }
    else if (edad >= 18 && edad <= 30) {
        mensaje = "Eres joven";
        } 

    else if (edad >= 31 && edad <= 60) {
        mensaje = "Eres de la media edad";
        }  
    else if (edad >= 60) {
        mensaje = "Eres de la tercera  edad";
        } 
    else {
        mensaje = "Ingrese la edad";
        } 

        return mensaje;
    }

console.log(checkAge(15)); // "Eres menor de edad"
console.log(checkAge(25)); // "Eres joven"
console.log(checkAge(45)); // "Eres de mediana edad"
console.log(checkAge(75)); // "Eres anciano"

/************************/

function esParoImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  console.log(esParoImpar(10)); // "El número es par"
  console.log(esParoImpar(11)); // "El número es impar"
  console.log(esParoImpar(20)); // "El número es par"
  console.log(esParoImpar(21)); // "El número es impar"

  /***********************/

  function sumaPares(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        suma += arreglo[i];
      }
    }
    return suma;
  }
  
  console.log(sumaPares([1, 2, 3, 4, 5, 6])); // 12
  console.log(sumaPares([10, 20, 30, 40, 50])); // 150
  console.log(sumaPares([1, 3, 5, 7, 9])); // 0

  /*********************/


  function sumaPares() {
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
      if (i % 2 === 0) {
        suma += i;
      }
    }
    return suma;
  }
  
  console.log(sumaPares()); // 650

/*********************/

  function sumapares() {
    const n = 50 / 2; // número de pares
    return n * (n + 1); // fórmula para la suma de los pares
  }
  
  console.log(sumapares()); // 650





