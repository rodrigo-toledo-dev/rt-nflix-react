import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });
const moviedbKey = 'f13a6a23a450ebc3a77d55101cd7aaea';
const moviedbLanguage = 'pt-BR';
export { api, moviedbKey, moviedbLanguage };