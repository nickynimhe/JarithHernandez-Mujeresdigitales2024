import React from 'react';


const ProductDetails = ({ product, onAddToCart, onBack }) => (
  <div className="product-details">
    <img className="imageStyle" src={product.imageUrl}/> 
    <h2>{product.name}</h2>
    <p>Descripcion: {product.description}</p>
    <p>Precio: ${product.price.toFixed(2)}</p>
    <button className="btn-primary" onClick={() => onAddToCart(product)}>
      <i className="fas fa-shopping-cart"></i> Agregar al Carrito
    </button> 
    <button className="btn-primary2"onClick={onBack}>Volver a la lista de productos</button>
  </div>
);

export default ProductDetails;
