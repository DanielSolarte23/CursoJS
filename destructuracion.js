let numeros = [1,2,3,4,5,6,7,8,9];

//sin Destructuracion
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno, dos, tres);

// con Destructuracion

const[one, two, three, four] = numeros;
console.log(one, two, three, four);

let persona = {
    nombre: "Daniel",
    apellido:"Solarte",
    edad: 35
}

//Destructuracion de objetos
let{ nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad);

