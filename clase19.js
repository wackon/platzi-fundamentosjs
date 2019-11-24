var jorge = {
    nombre:'jorge',
    apellido: 'alvarez',
    altura: 1.76
}

var jenny = {
    nombre:'jenny',
    apellido: 'alvarez',
    altura:1.50
}

var sergio = {
    nombre:'sergio',
    apellido: 'alvarez',
    altura: 1.71 
}



const esAlta  = ({ altura }) => altura > 1.70




var personas =  [jorge,jenny,sergio]



var personasAltas = personas.filter(esAlta)
/*var personasAltas = personas.filter(function (personas){
    return personas.altura > 1.70
})*/


//persona.altura = persona.altura *100 


const pasarAlturaACms = persona => ({    
...persona,
altura : persona.altura *100})


var personasCms = personas.map(pasarAlturaACms)


console.log(personasCms)
