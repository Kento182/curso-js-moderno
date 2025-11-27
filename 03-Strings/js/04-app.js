const producto = '           Monitor 20 Pulgadas            ';

console.log(producto);
console.log(producto.length);

// Eliminar del inicio...
console.log(producto.trimStart());
console.log(producto.trimStart().length);

// Eliminar al final...
console.log(producto.trimEnd());
console.log(producto.trimEnd().length);

// Eliminar en ambas direcciones...
console.log(producto.trim());
console.log(producto.trim().length);