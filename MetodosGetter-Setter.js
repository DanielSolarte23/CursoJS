class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }
    sonar() {
        console.log("Hago sonidos por sapo");
    }
    cagar(nombre) {
        console.log(`soy ${nombre} y Estoy cagndo 💩`);
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamaño) {
        super(nombre, genero)
        this.tamaño = tamaño
        this.Raza = null;
    }
    sonar() {
        console.log("Soy un perro y usted es un sapo");
    }
    ladrar() {
        console.log("yo ladro y a usted que le importa");
    }

    //un metodo estatico se puede ejecutar sin necesidad de instancias la clase 

    get getRaza(){
        return this.Raza
    }

    set setRaza(raza){
        this.Raza = raza;
    }

    static queEres(){
        console.log("Los perros son gays");
    }


}

Perro.queEres()

const mimi = new Animal("mimi", "hembra");
const scoby = new Perro("scoby", "macho","gay");

console.log(mimi);
console.log(scoby);
scoby.ladrar()
scoby.cagar(scoby.nombre)
console.log(scoby.getRaza);
scoby.setRaza = "Sapo"
console.log(scoby.getRaza);
