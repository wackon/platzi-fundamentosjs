var jorge = {
    nombre: 'jorge',
    apellido: 'alvarez',
    altura: 1.76,
    cantidadDeLibros: 10
}

var jenny = {
    nombre: 'jenny',
    apellido: 'alvarez',
    altura: 1.50,
    cantidadDeLibros: 20
}

var sergio = {
    nombre: 'sergio',
    apellido: 'alvarez',
    altura: 1.71,
    cantidadDeLibros: 30
}


const esAlta = ({ altura }) => altura > 1.70


var personas = [jorge, jenny, sergio]


var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})


var personasCms = personas.map(pasarAlturaACms)

/*

var acum = 0

        for (var i = 0; i < personas.length; i++) {
            
            acum =  acum +  personas[i].cantidadDeLibros
        }

        console.log(`en total todos tiene ${acum} libros `)
        */
    const reducer= (acum, {cantidadDeLibros})=> 
        acum+ cantidadDeLibros
    

     var totalDeLibros    = personas.reduce(reducer, 0)

     console.log(`en total todos tiene ${totalDeLibros} libros `)