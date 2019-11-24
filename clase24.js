
function heredaDe(prototipoHijo , prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo

    

}


function Persona (nombre , apellido, altura){
   
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
    this.altura = altura

}

Persona.prototype.saludar = function(){
console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){  
    return this.altura > 1.7}



function Desarrollador(nombre, apellido){
this.nombre =nombre 
this.apellido = apellido

}

heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function (){

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}




//var andres = new Persona('andres', 'alvarez',1.71)
//var erika = new Persona('erika', 'luna',1.50)
//var arturo = new Persona ('arturo','martinez',1.76)



