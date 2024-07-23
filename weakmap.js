/* Un WeakMap es similar a un Map pero con diferencias clave importantes. Las claves en un WeakMap deben ser objetos, no se pueden usar valores primitivos como claves. Además, las referencias a los objetos en un WeakMap son débiles, lo que significa que si no hay otra referencia a un objeto clave, este puede ser recolectado por el garbage collector. */

/* Características:
Solo permite objetos como claves.
Las claves en un WeakMap son recogidas por el garbage collector si no hay otras referencias a ellas.
No mantiene el orden de inserción.
No tiene una propiedad size ni métodos para iterar sobre sus elementos (forEach, keys, values, etc.).
 */
const weakMap = new WeakMap();
let obj = { key: 'value' };

// Agregar elementos
weakMap.set(obj, 'some value');
console.log(weakMap.get(obj)); // some value

// Verificar si existe una clave
console.log(weakMap.has(obj)); // true

// Eliminar una clave
weakMap.delete(obj);
console.log(weakMap.has(obj)); // false

// Los objetos se recogen cuando ya no son referenciados
obj = null; // El objeto { key: 'value' } puede ser recolectado por el garbage collector


// const wm = new WeakMap();
// let llave1 = {};
// let llave2 = {};
// let llave3 = {};

// wm.set(llave1, 1);
// wm.set(llave2, 2);
// console.log(wm);
// console.log(wm.has(llave1));
// console.log(wm.has(llave3));
// wm.delete(llave2)
// console.log(wm);

