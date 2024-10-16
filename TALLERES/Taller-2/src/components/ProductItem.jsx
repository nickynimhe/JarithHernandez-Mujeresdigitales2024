import React from 'react';
const ProductItem = ({ product, onViewDetails, onAddToCart }) => {

    const {name, price } = product;

    return(
    <div className="product-item">
    <h3>{name}</h3>
    <p>${price.toFixed(2)}</p> 
    <button onClick={onViewDetails}>Ver Detalles</button>
    <button onClick={onAddToCart}>Agregar al Carrito</button>
  </div>
  
);
};
export default ProductItem;
