// DESESTRUCTURACION
// ASIGNACION DESESTRUCTURANTE

const persona = {
    nombre: 'Alvaro',
    edad: 25,
    clave: 'Fracaso',
};

// const {nombre, edad, clave} = persona;

// console.log(nombre, edad, clave);

// const {nombre:nombre2} = persona;
// console.log(nombre2);

// const retornaPersona = ({nombre, clave, edad, rango = 'Nada'}) => {
//     // console.log(nombre, edad, rango);
//     return{
//         nombreClave: clave,
//         anios: edad
//     }
// }

// const newPersona = retornaPersona(persona);
// console.log(newPersona);

const retornaPersona = ({nombre, clave, edad, rango = 'Nada'}) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.4323,
        }
    }
}

//PRIMER EJEMPLO DE OBJETO ANIDADO
// const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona(persona);
// console.log(nombreClave, anios);
// console.log(lat, lng);

//SEGUNDO EJEMPLO DE OBJETO ANIDADO
const {nombreClave, anios, latlng} = retornaPersona(persona);
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);