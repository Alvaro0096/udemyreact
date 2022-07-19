const persona = {
    nombre: 'Alvaro',
    apellido: 'Jorge',
    edad: 25,
    direccion: {
        ciudad: 'Rosario',
        zip: 2000,
        lat: 14.3232,
        lng: 34.954534,
    }
};

// console.log({persona});
// PONERLO ENTRE LLAVES CREA UN OBJETO DEL OBJETO
// Seria como console.log({persona:persona});

// TABLE ES UTIL PARA VER OBJETOS
// console.table(persona);

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);