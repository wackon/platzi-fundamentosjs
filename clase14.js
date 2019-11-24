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

    const INCREMENTO_PESO = 0.3
    const DIAS_DEL_AÑO = 365


    const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO

    //lo de arriba es igual a 
    /*  function aumentarDePeso(persona){
        return persona.peso+=200
    }*/

    const adelgazar = persona => persona.peso -= INCREMENTO_PESO
    const comeMucho = () => Math.random () <0.3
    const realizaDeporte = () => Math.random () < 0.4




        const META = sacha.peso -3
        var dias =0;

    while (sacha.peso > META){
       
        if(comeMucho()){

            aumentarDePeso (sacha)
        }
        if(realizaDeporte){

            adelgazar (sacha)
        }
        dias +=1

    }
    console.log(`pasaron ${dias} hasta que  ${sacha.nombre} adelgazo 3kg`)