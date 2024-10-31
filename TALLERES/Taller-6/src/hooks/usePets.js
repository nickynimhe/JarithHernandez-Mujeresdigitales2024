import { useState, useEffect } from 'react';
import { catApi } from '../services/catApi';
import { dogApi } from '../services/dogApi';

export const usePets = () => {
  const [pets, setPets] = useState({ cats: [], dogs: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPets = async () => {
    setLoading(true);
    setError(null);
    try {
      const [cats, dogs] = await Promise.all([
        catApi.getRandomCats(),
        dogApi.getRandomDogs()
      ]);
      setPets({ cats, dogs });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { pets, loading, error, fetchPets };
};