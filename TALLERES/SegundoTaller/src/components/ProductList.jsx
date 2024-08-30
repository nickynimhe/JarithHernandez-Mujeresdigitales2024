import React from 'react';

const imageStyle = {
    width: '150px',   // Ajusta el ancho de la imagen
    height: '150px',   // Mantiene la proporción de la imagen
  };

const ProductList = ({ products, onViewDetails }) => (
  <div className="product-list">
    {products.map(product => (
      <div key={product.id} className="product-item">
        <img src={product.imageUrl} alt={product.name} style={imageStyle} />
        <h3>{product.name}</h3>
        <p>Precio: ${product.price.toFixed(2)}</p>
        <button className="btn-primary" onClick={() => onViewDetails(product)}>Ver Detalles</button>
      </div>
    ))}
  </div>
);

export default ProductList;
