// src/components/Pets/PetCard.jsx
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Button from '../UI/Button';
import PropTypes from 'prop-types';

const PetCard = ({ pet, onFavorite, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const breed = pet.breeds?.[0] || {};

  const handleImageClick = (e) => {
    e.stopPropagation(); // Evita que el clic se propague al contenedor principal
    onClick(pet); // Llama a la función onClick pasada desde el componente padre
  };

  return (
    <div 
      className="pet-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={pet.url} 
          alt={breed.name || 'Unknown pet'}
          loading="lazy"
          onClick={handleImageClick} 
        />
        <button
          onClick={(e) => { e.stopPropagation(); onFavorite(pet); }}
          className={`favorite-button ${pet.isFavorite ? 'active' : 'inactive'} absolute top-3 right-3 p-2 rounded-full shadow-md`}
        >
          <FaHeart className="icon" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800">{breed.name || 'Unknown Breed'}</h3>
        <p className="text-lg text-gray-600">{breed.name ? `Raza: ${breed.name}` : 'Raza desconocida'}</p> 
        
        {isHovered && (
          <div className="favorite-button-container">
            <Button variant="outline" onClick={(e) => { e.stopPropagation(); onFavorite(pet); }}>
              {pet.isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

PetCard.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    breeds: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        temperament: PropTypes.string,
        bred_for: PropTypes.string,
        life_span: PropTypes.string,
      })
    )
  }).isRequired,   // Objeto que representa la mascota
  onFavorite: PropTypes.func.isRequired, // Función para marcar como favorito
  onClick: PropTypes.func.isRequired, // Función que se ejecuta al hacer clic en la tarjeta
};

export default PetCard;
