function Persona (nombre , apellido){
   
         this.nombre = nombre
         this.apellido = apellido
         this.edad = 20

        
        
 }



Persona.prototype.saludar = function(){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

var andres = new Persona('andres', 'alvarez')
var erika = new Persona('erika', 'luna')
var arturo = new Persona ('arturo','martinez')






