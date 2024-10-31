import { Link } from 'react-router-dom';
import { FaPaw, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaPaw className="text-2xl text-purple-600" />
            <span className="text-xl font-bold text-gray-800">PetAdoption</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/favorites" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600">
              <FaHeart />
              <span>Favoritos</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;