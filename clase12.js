var sacha = {
    nombre: 'sacha',
    apellido: 'Aguirre',
    edad: 28,

    ingeniero: false,
    cocinero: false,
    dj: false,
    guitarrista: true,
    drone: false
}


var juan ={
    nombre :'juan',
    apellido : 'Gomez',
    edad :13
}


function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es :`)

    if (persona.ingeniero) {
        console.log('ingeniero')
    } else { console.log('No es ingeniero') }

    if (persona.cocinero) {
        console.log('cocinero')
    }

    if (persona.dj) {
        console.log('Dj')
    }

    if (persona.guitarrista) {
        console.log('guitarrista')
    }

    if (persona.drone) {
        console.log('Piloto drone')
    }



}
const MAYORIA_DE_EDAD = 18


        //Existen varias formas de hacer lo mismo esta es con 
        //array function, esta siguiente y la que le sigue son
        //totalmente iguales


        const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

        //esta es definiendo a una constante la funcion    

   /*    const esMayorDeEdad =function (persona){
        return persona.edad >= MAYORIA_DE_EDAD}*/

        //Esta es la basica

    /*  function esMayorDeEdad(persona){
        return persona.edad >= MAYORIA_DE_EDAD}
    */

function imprimirSiesmayordeEdad(persona) {

    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso Denegado')
    }
}

const esMenorDeEdad = ({edad})=>edad< MAYORIA_DE_EDAD
   


imprimirProfesiones(sacha)