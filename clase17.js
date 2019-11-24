var jorge = {
    nombre:'jorge',
    apellido: 'alvarez',
    peso: 1.76
}

var jenny = {
    nombre:'jenny',
    apellido: 'alvarez',
    altura:1.50
}

var sergio = {
    nombre:'sergio',
    apellido: 'alvarez',
    altura: 1.70 
}


var persona =  [jorge,jenny,sergio]

for (var i = 0 ; i< persona.length;i++){
    var personas = persona [i]
    console.log(`${personas.nombre} mide ${personas.altura}`)
}
