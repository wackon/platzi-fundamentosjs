
var Andres = {
    nombre : 'Andres',
    apellido : 'Alvarez',
    edad : 28
}

var Dario = {
    nombre : 'Dario',
    apellido : 'Churreta',
    edad : 25
}

/*
function imprimirNombreEnMayusculas (persona){
 console.log(persona.nombre.toUpperCase())

}*/

function imprimirNombreEnMayusculas ({ nombre }) {
    console.log(nombre.toUpperCase())
   
   }

imprimirNombreEnMayusculas(Andres)
imprimirNombreEnMayusculas(Dario)
imprimirNombreEnMayusculas({ nombre :'pepito' })
imprimirNombreEnMayusculas({ apellido :'Gomez' })
