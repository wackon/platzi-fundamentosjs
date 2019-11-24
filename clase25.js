
class Persona {
    constructor(nombre, apellido, altura) {

        this.nombre = nombre
        this.apellido = apellido
        this.edad = 20
        this.altura = altura

    }

    saludar() {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.altura > 1.7
    }
}

class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {

        super (nombre,apellido,altura)
        
    }

    saludar (){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }

}




    




//var andres = new Persona('andres', 'alvarez',1.71)
//var erika = new Persona('erika', 'luna',1.50)
//var arturo = new Persona ('arturo','martinez',1.76)

