var sacha = {
    nombre:'sacha',
    apellido : 'Carmona',
    edad:28,
    peso:75
}

var Jorge = {
    nombre: 'Jorge',
    apellido:'Alvarez',
    edad:33,
    peso:67
    }

    console.log(`Al inicio del año '${sacha.nombre} pesa ${sacha.peso} kg`) 

    console.log(`Al inicio del año '${Jorge.nombre} pesa ${Jorge.peso} kg`) 

    const IINCREMENTO_PESO = 0.2
    const DIAS_DEL_AÑO = 365


    const aumentarDePeso = persona =>  persona.peso +=IINCREMENTO_PESO

    //lo de arriba es igual a 
    /*  function aumentarDePeso(persona){
        return persona.peso+=200
    }*/

    const adelgazar = persona => persona.peso -=IINCREMENTO_PESO


    for(let i=0;i<=DIAS_DEL_AÑO;i++) {
        var random =Math.random()
            if (random < 0.25){
                //aumenta de peso
                aumentarDePeso(Jorge)
            }else if (random<0.50){
                //adelgazar
                adelgazar(Jorge)
            
        }

    }



    
    console.log(`Al final del año '${sacha.nombre} pesa ${sacha.peso.toFixed(1)} kg`) 

    console.log(`Al final del año '${Jorge.nombre} pesa ${Jorge.peso.toFixed(1)} kg`)