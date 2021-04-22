import { BASE_URL } from './constants';

const request = async (url: string) => {
    const response = await fetch(url);
    return response.json()
}

export const getFilms = () => {
    return request(BASE_URL + 'films/');
}

export const getPeople = () => {
    return request(BASE_URL + 'people/');
}

export const getSpecies = () => {
    return request(BASE_URL + 'species/');
}

export const getVehicles = () => {
    return request(BASE_URL + 'vehicles/');
}

export const getStarships = () => {
    return request(BASE_URL + 'starships/');
}

export const getPlanets = () => {
    return request(BASE_URL + 'planets/');
}
