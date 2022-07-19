//FUNCIONES JS
// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

// const saludar = function(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Alvaro'));

console.log(saludar2('Alvaro'));
console.log(saludar3('Alvaro'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Alvaro0096',
    }
}

//EL PARENTESIS INDICA DE MANERA IMPLICITA QUE ESTOY RETORNANDO ALGO
const getUser2 = () => ({
    uid: 'ABC123',
    username: 'Alvaro0096',
});

// console.log(getUser());
// console.log(getUser2());

//1. Transformar a funcion de flecha
//2. Retornar objeto implicito
//3. Prueba

// function getUsuarioActivo(nombre){
//     return{
//         uid: 'ABC567',
//         username: nombre,
//     }
// };

// const usuarioActivo = getUsuarioActivo('Alvaro');
// console.log(usuarioActivo);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Alvaro');
console.log(usuarioActivo);