/* Un Map es una colección de pares clave-valor en la que cualquier valor (tanto objetos como valores primitivos) puede ser utilizado como clave o valor. A diferencia de los objetos, las claves en un Map pueden ser de cualquier tipo, no solo cadenas o símbolos. */
/* 
Características:
Permite cualquier tipo de clave.
Mantiene el orden de inserción de los elementos.
Tiene una propiedad size que devuelve el número de elementos en el Map.
Proporciona métodos para operaciones estándar como set, get, has, delete y clear. */

const map = new Map();

// Agregar elementos
map.set('name', 'Daniel');
map.set(1, 'Uno');
map.set(true, 'boolean');

console.log(map.get('name')); // Daniel
console.log(map.get(1)); // Uno
console.log(map.get(true)); // boolean

// Verificar si existe una clave
console.log(map.has('name')); // true

// Eliminar una clave
map.delete('name');
console.log(map.has('name')); // false

// Tamaño del Map
console.log(map.size); // 2

// Iterar sobre los elementos
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// 1: one
// true: boolean



let mapa = new Map()
mapa.set("Nombre", "jon")
mapa.set("Apellido", "Snow")
mapa.set("Edad", "32")
// console.log(mapa);
// console.log(mapa.size);
// console.log(mapa.has("correo"));
// console.log(mapa.has("Nombre"));
// console.log(mapa.get("Nombre"));
// mapa.set("Nombre", "Daniel Solarte")
// console.log(mapa.get("Nombre"));

mapa.delete("Apellido")
console.log(mapa);
for (let [key, value] of mapa) {
    console.log(`LLave: ${key}, valor: ${value}`);
}
const mapa2 = new Map([
    ["nombre", "kenay"],
    ["edad", "7"],
    ["animal", "perro"],
    [null, "nulo"],
])

console.log(mapa2);

for (let [key, value] of mapa2){
    console.log(`LLave: ${key}, valor: ${value}`);
}

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);