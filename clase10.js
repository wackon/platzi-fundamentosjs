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

function imprimirSiesmayordeEdad(persona) {

    if (persona.edad >= 18) {
        console.log('Sacha es mayor de edad')  //(${persona.nombre} es mayor de edad)
    } else {
        console.log('Sacha es menor de edad')  //(${persona.nombre} es menor de edad)
    }
}


imprimirProfesiones(sacha)

imprimirSiesmayordeEdad(sacha)