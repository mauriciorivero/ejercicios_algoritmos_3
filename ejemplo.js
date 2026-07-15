let numeros = [23, 45, 67, 21, 78, 6, 4, 0, 9, 10, 67, 24, 32, 56];

var suma=0;
for(let i=0;i<numeros.length;i++){
    suma=numeros[i]+suma;
}
console.log("El resultado es: "+suma);