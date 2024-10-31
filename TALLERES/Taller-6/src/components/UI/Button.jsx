import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
};

export default Button;
