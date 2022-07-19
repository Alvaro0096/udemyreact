const personajes = ['Goku', 'Vegeta', 'Trunks'];
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);
const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//1. El primer valor del arr se llamara nombre
//2. El segundo valor del arr se llamara setNombre

const nuevoState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}
// const arr = nuevoState('Goku');
// arr[1]();
// console.log(arr)

const [nombre, setNombre] = nuevoState('Goku');
console.log(nombre);
setNombre();