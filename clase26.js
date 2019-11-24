
class Persona {
    constructor(nombre, apellido, altura) {

        this.nombre = nombre
        this.apellido = apellido
        this.edad = 20
        this.altura = altura

    }

    saludar(fn) {

        //var nombre = this.nombre
        //var apellido = this.apellido

        var {nombre,apellido} = this
        
        console.log(`hola, me llamo ${nombre} ${apellido}`)
        if (fn){
              fn(nombre,apellido,)  
        }
    }

    soyAlto() {
        return this.altura > 1.7
    }
}

class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {

        super (nombre,apellido,altura)
        
    }

    saludar (fn){

        var {nombre,apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (fn){
            fn(nombre,apellido,true)  
      }
    }

}

function responderSaludo  (nombre, apellido, esDev){
    console.log (` Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Ah, mira no sabia que eras desarrollador/a`)
    }
}



var andres = new Persona('andres', 'alvarez',1.71)
var erika = new Persona('erika', 'luna',1.50)
var arturo = new Desarrollador ('arturo','martinez',1.76)

andres.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)


    