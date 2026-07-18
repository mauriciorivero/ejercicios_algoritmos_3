const persona1 = {
    nombre: "Mauricio",
    apellido: "Rivero",
    edad: 42
}

const persona2 = {
    nombre: "Jeidy",
    apellido: "Lopez",
    edad: 31
}

const persona3 = {
    nombre: "Daniel",
    apellido: "Krautz",
    edad: 38
}

const persona4 = {
    nombre: "Jazmin",
    apellido: "Rodriguez",
    edad: 34
}

const persona5 = {
    nombre: "Alicia",
    apellido: "Rivero",
    edad: 2
}

const personas = [persona1, persona2, persona3, persona4, persona5]



function promedioPersonas(personas){
    let promedioEdad = 0;
    let sumaEdad = 0;
    let totalEdades = personas.length;

    for(let i=0; i<personas.length; i++){
        sumaEdad = sumaEdad+personas[i].edad;
        console.log("La edad hasta ahora es: "+sumaEdad);
    }

    promedioEdad = sumaEdad/totalEdades;

    return "El promedio de la edad en estas 5 personas es: "+promedioEdad;

}

function concatenarApellidos(personas){
    let apellidos = "";

    for(let i=0; i<personas.length; i++){
        apellidos = apellidos + personas[i].apellido + " ";
    }

    return "Los apellidos son: "+apellidos;

}

console.log(concatenarApellidos(personas));

console.log(promedioPersonas(personas));
