/* const animal = {
    nombre: "Snoopy",
    sonar (){
        console.log("Hago sonidos");
    }
}
const animal2 = {
    nombre: "Lola Bunny",
    sonar (){
        console.log("Hago sonidos por sapo");
    }
}


animal.sonar()
animal2.sonar() */

//constructor
//Funcion constructora
// function Animal(nombre, genero){
//     this.nombre = nombre;
//     this.genero = genero;
//     //Metodos
//     this.sonar = function(){
//         console.log("Hago sonidos por sapo");
//     }
//     this.cagar = function(){
//         console.log("Estoy cagndo 💩");
//     }
// }


//fc constructura donde asignha metodos al prototipo
function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
    //Metodos
}
// Metodos asignados a la funcion constructora
    Animal.prototype.sonar = function(){
        console.log("Hago sonidos por sapo");
    }
    Animal.prototype.cagar = function(){
        console.log("Estoy cagndo 💩");
    }

const snoopy = new Animal("Snoppy", "Macho"),
 lola = new Animal("Lola", "Hembra")

 console.log(snoopy);
lola.cagar()