import PropTypes from 'prop-types';
import Button from '../UI/Button';

const PetModal = ({ pet, onClose, onAdopt }) => {
  const breed = pet.breeds?.[0] || {};

  return (
    <div className="pet-modal-overlay">
      <div className="pet-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        
        <h2 className="pet-title">{breed.name || 'Unknown Breed'}</h2>
        
        <img src={pet.url} alt={breed.name || `${pet.type} pet`} className="pet-image" />
        
        <div className="pet-info">
          <p><strong>Raza:</strong> {breed.name || 'Desconocida'}</p>
          <p><strong>Temperamento:</strong> {breed.temperament || 'Desconocido'}</p>
          <p><strong>Esperanza de vida:</strong> {breed.life_span || 'Desconocida'}</p>
          <p><strong>Criado para:</strong> {breed.bred_for || 'Desconocido'}</p>
        </div>

        <div className="button-container">
          <Button onClick={onAdopt} variant="primary">Adoptar</Button>
          <Button onClick={onClose} variant="secondary" className="ml-2">Cerrar</Button>
        </div>
      </div>
    </div>
  );
};

PetModal.propTypes = {
  pet: PropTypes.shape({
    url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    breeds: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        temperament: PropTypes.string,
        description: PropTypes.string,
        life_span: PropTypes.string,
        weight: PropTypes.shape({
          metric: PropTypes.string,
        }),
      })
    ),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onAdopt: PropTypes.func.isRequired,
};

export default PetModal;
