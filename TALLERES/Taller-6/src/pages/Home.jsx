import { useState, useEffect } from 'react';
import { catApi } from '../services/catApi';
import { dogApi } from '../services/dogApi';
import PetGrid from '../components/Pets/PetGrid';
import PetModal from '../components/Pets/PetModal';
import Button from '../components/UI/Button';

const Home = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);

  const loadPets = async () => {
    setLoading(true);
    try {
      const [cats, dogs] = await Promise.all([catApi.getRandomCats(10), dogApi.getRandomDogs(10)]);

      const formattedPets = [
        ...cats.map((cat) => ({ ...cat, type: 'cat', isFavorite: false })),
        ...dogs.map((dog) => ({ ...dog, type: 'dog', isFavorite: false })),
      ];

      setPets((prevPets) => [...prevPets, ...formattedPets]);
    } catch (error) {
      console.error(error); 
      setError('Error cargando las mascotas. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPets();
  }, []);

  const handleFavorite = (pet) => {
    setPets((prevPets) =>
      prevPets.map((p) =>
        p.id === pet.id ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  };

  const handleAdopt = (pet) => {
    if (pet) {
      alert(`¡Gracias por tu interés en adoptar a ${pet.breeds?.[0]?.name || 'esta mascota'}! Pronto te contactaremos.`);
      setSelectedPet(null);
    } else {
      console.error('Pet is undefined');
    }
  };

  const handlePetClick = (pet) => {
    setSelectedPet(pet); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Encuentra tu compañero perfecto</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Adopta una mascota y cambia una vida. Tenemos adorables perros y gatos esperando encontrar un hogar amoroso.
        </p>
      </div>

      <PetGrid
        pets={pets}
        loading={loading}
        error={error}
        onFavorite={handleFavorite}
        onPetClick={handlePetClick} 
      />

      {selectedPet && (
        <PetModal
          pet={selectedPet}
          onClose={() => setSelectedPet(null)}
          onAdopt={handleAdopt}
        />
      )}

      <div className="text-center mt-8">
        <Button onClick={loadPets} variant="secondary" className="mx-auto">
          Cargar más mascotas
        </Button>
      </div>
    </div>
  );
};

export default Home;
