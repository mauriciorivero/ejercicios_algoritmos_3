/**
 * 
 * La diferencia fundamental de este ciclo es que las instrucciones se ejecutan al menos una vez, incluso si la condición no se cumple desde el inicio.
Código en JavaScript:
 */

let contador = 4;
do {
  console.log("El valor es: " + contador);
  contador++;
} while (contador <= 3);


/**
 * Obtener el valor acumulado
 */

let n = 3;
let suma = 6;
do {
  n++;
  suma = suma + n;
} while (n <= 3);
console.log("La suma total es: " + suma);





/**
 * 
 * Puedes usar la palabra reservada break para salir 
 * del ciclo inmediatamente si ocurre un evento 
 * específico, sin esperar a que la condición del while sea falsa
 */
let j = 1;
do {
  if (j === 3) {
    console.log("Conteo: " + j);
    break; // Sale del ciclo al llegar a 3
  }
  console.log("Conteo: " + j);
  j++;
} while (j <= 10);


/**
 * let numeros = [23, 45, 67, 21, 78, 6, 4, 0, 9, 10, 67, 24, 32, 56, 25];

var suma=0;
for(let i=0;i<numeros.length;i++){
    suma=numeros[i]+suma;
}
console.log("El resultado es: "+suma);
 */

let numeros = [23, 45, 67, 21, 78, 6, 4, 0, 9, 10, 67, 24, 32, 56, 25];

let suma = 0;
let i = 0;
do{
  suma = numeros[i]+suma;
  i++;
}while(i<numeros.length);
console.log(suma);