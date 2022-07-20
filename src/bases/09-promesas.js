//ASYNC AWAIT
import { getHeroesById } from "./bases/08-impor-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroesById(2);
//         resolve(p1);
//         // reject('No se pudo encontrar el heroe.');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroesByIdAsync = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroesById(id);
            if(p1){
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe.');
            }
        }, 2000);
    });
}

getHeroesByIdAsync(1)
    .then(console.log)
    .catch(console.log)