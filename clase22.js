function Persona (nombre , apellido, altura){
   
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
    this.altura = altura

}

Persona.prototype.saludar = function(){
console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto =  () =>  this.altura > 1.7

var andres = new Persona('andres', 'alvarez',1.71)
var erika = new Persona('erika', 'luna',1.50)
var arturo = new Persona ('arturo','martinez',1.76)

andres.soyAlto()
erika.soyAlto()
arturo.soyAlto()




