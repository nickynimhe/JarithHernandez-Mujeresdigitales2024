import React from 'react';

const imageStyle = {
  width: '500px',   
  height: '300px',   
};

const ProductDetails = ({ product, onAddToCart, onBack }) => (
  <div className="product-details">
    <h2>{product.name}</h2>
    <img src={product.imageUrl} alt={product.name} style={imageStyle} />
    <p>{product.description}</p>
    <p>Precio: ${product.price.toFixed(2)}</p>
    <button className="btn-primary" onClick={() => onAddToCart(product)}>
      <i className="fas fa-shopping-cart"></i> Agregar al Carrito
    </button>
    <button className="btn-primary2"onClick={onBack}>Volver a la lista de productos</button>
  </div>
);

export default ProductDetails;
