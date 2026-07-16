//ejemplo 1
let x = 0;

while(x<=10){
    console.log("El valor de X es: "+x);
    x++;
}


/**
 * Hacer un ciclo while que vaya de 1 a 100 y que me cuente 
 * cuantos numeros pares hay en ese rango
 */

let x = 0;
let totalPares = 0;
while(x<=100){
    if((x%2===0)&&(x!=0)){
       totalPares++;
    }
    x++;
}

console.log("la cantidad de pares son: "+totalPares);


/**
 * Transformar el siguiente ejercicio de for en un while
 * 
 * let numeros = [23, 45, 67, 21, 78, 6, 4, 0, 9, 10, 67, 24, 32, 56];

var suma=0;
for(let i=0;i<numeros.length;i++){
    suma=numeros[i]+suma;
}
console.log("El resultado es: "+suma);

 */

const numeros = [23, 45, 67, 21, 78, 6, 4, 0, 9, 10, 67, 24, 32, 56];

let i = 0;
let suma=0;
let totalElementos = numeros.length;
console.log("El total de elementos es: "+totalElementos);
while(i<totalElementos){
    suma=numeros[i]+suma;
    console.log("El indice actual es: "+i);
    console.log("La suma total hasta ahora es: "+suma);
    console.log("-----------------------------------");
    i++;
}
console.log("El resultado es: "+suma);

