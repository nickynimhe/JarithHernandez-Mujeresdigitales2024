import axios from 'axios';
import { API_CONFIG } from './config';

const dogApiInstance = axios.create({
  baseURL: API_CONFIG.DOG_API.BASE_URL,
  headers: {
    'x-api-key': API_CONFIG.DOG_API.API_KEY
  }
});

export const dogApi = {
  // Obtener lista de perros
  getRandomDogs: async (limit = 10) => {
    try {
      const response = await dogApiInstance.get('/images/search', {
        params: {
          limit,
          has_breeds: 1,
          order: 'RANDOM'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching dogs: ${error.message}`);
    }
  },

  // Obtener razas de perros
  getBreeds: async () => {
    try {
      const response = await dogApiInstance.get('/breeds');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching dog breeds: ${error.message}`);
    }
  },

  // Buscar perros por raza
  getByBreed: async (breedId) => {
    try {
      const response = await dogApiInstance.get('/images/search', {
        params: {
          breed_ids: breedId,
          limit: 10,
          has_breeds: 1
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching dogs by breed: ${error.message}`);
    }
  }
};