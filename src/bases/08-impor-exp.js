import heroes, {owners} from '../data/heroes';

export const getHeroesById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

// console.log(getHeroesById(1));

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner)
}

// console.log(getHeroesByOwner('DC'));