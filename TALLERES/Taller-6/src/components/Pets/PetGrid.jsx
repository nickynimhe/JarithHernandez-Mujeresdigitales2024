import { useState } from 'react';
import PropTypes from 'prop-types'; 
import PetCard from './PetCard';
import LoadingSpinner from '../UI/LoadingSpinner';

const PetGrid = ({ pets, loading, error, onFavorite, onPetClick }) => {
  const [filter, setFilter] = useState('all');

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const filteredPets = filter === 'all' ? pets : pets.filter(pet => pet.type === filter);

  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-4">
        {['all', 'cat', 'dog'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg ${
              filter === type 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.map((pet) => (
          <div key={pet.id} onClick={() => onPetClick(pet)}>
            <PetCard
              pet={pet}
              onFavorite={onFavorite}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

PetGrid.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool,
      breeds: PropTypes.array, 
    })
  ).isRequired,   
  loading: PropTypes.bool.isRequired,  
  error: PropTypes.string,              
  onFavorite: PropTypes.func.isRequired, 
  onPetClick: PropTypes.func.isRequired  
};

export default PetGrid;
