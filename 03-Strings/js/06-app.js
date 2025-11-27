const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto...
const texto = ' en promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// .split divide un string
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo JavaScript #JSModernoConJuan'
console.log(tweet.split("#"));
