
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

function imprimirNombreEnMayusculas (persona) {
    //var nombre = pesona.nombre
   var {  nombre } = persona
   console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Andres)
imprimirNombreEnMayusculas(Dario)
imprimirNombreYedad(Andres)
imprimirNombreYedad(Dario)
//imprimirNombreEnMayusculas({ nombre :'pepito' })
//imprimirNombreEnMayusculas({ apellido :'Gomez' })

function imprimirNombreYedad(persona){
    var {nombre}=persona
    var {edad}=persona

console.log('hola soy ,'+nombre + ' y tengo '+ edad + 'años')

}
