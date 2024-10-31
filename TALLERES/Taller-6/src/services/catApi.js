import axios from 'axios';
import { API_CONFIG } from './config';

const catApiInstance = axios.create({
  baseURL: API_CONFIG.CAT_API.BASE_URL,
  headers: {
    'x-api-key': API_CONFIG.CAT_API.API_KEY
  }
});

export const catApi = {
  // Obtener lista de gatos
  getRandomCats: async (limit = 10) => {
    try {
      const response = await catApiInstance.get('/images/search', {
        params: {
          limit,
          has_breeds: 1,
          order: 'RANDOM'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching cats: ${error.message}`);
    }
  },

  // Obtener razas de gatos
  getBreeds: async () => {
    try {
      const response = await catApiInstance.get('/breeds');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching cat breeds: ${error.message}`);
    }
  },

  // Buscar gatos por raza
  getByBreed: async (breedId) => {
    try {
      const response = await catApiInstance.get('/images/search', {
        params: {
          breed_ids: breedId,
          limit: 10,
          has_breeds: 1
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching cats by breed: ${error.message}`);
    }
  }
};
