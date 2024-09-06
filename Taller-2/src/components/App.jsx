import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, src: '', name: 'Smartphone', price: 899.99, description: 'Smartphone de última generación con pantalla OLED de 6.5 pulgadas, 128GB de almacenamiento y cámara de 48MP.', imageUrl:'https://images.unsplash.com/photo-1634403665443-81dc4d75843a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Laptop', price: 1299.99, description: 'Laptop ultradelgada con procesador Intel i7, 16GB de RAM y SSD de 512GB. Ideal para trabajar y estudiar.', imageUrl:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Auriculares Bluetooth', price: 199.99, description: 'Auriculares inalámbricos con cancelación de ruido, batería de larga duración y sonido de alta fidelidad.', imageUrl:'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Smartwatch', price: 249.99, description: 'Reloj inteligente con monitoreo de ritmo cardíaco, GPS integrado y resistencia al agua.', imageUrl:'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 5, name: 'Cámara Digital', price: 499.99, description: 'Cámara compacta de 20MP con zoom óptico de 10x, ideal para capturar momentos especiales.', imageUrl:'https://images.unsplash.com/photo-1526413494904-7a15c807b00e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Teclado Mecánico', price: 89.99, description: 'Teclado mecánico con switches RGB retroiluminados y teclas programables. Diseñado para una experiencia de escritura precisa.', imageUrl:'https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 7, name: 'Gafas de Realidad Virtual', price: 399.99, description: 'Gafas de realidad virtual con controladores incluidos, pantalla de alta resolución y campo de visión amplio. Ofrecen una inmersión total en experiencias virtuales.', imageUrl:'https://images.unsplash.com/photo-1706264337427-fbd7405c3483?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, name: 'Router Wi-Fi 6', price: 159.99, description: 'Router de última generación con tecnología Wi-Fi 6 para una mayor velocidad y cobertura. Ideal para hogares con múltiples dispositivos.', imageUrl:'https://plus.unsplash.com/premium_photo-1671017817487-baaae0de6d4d?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]);

 

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      // Actualizar cantidad si el producto ya está en el carrito
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      ));
    } else {
      // Agregar nuevo producto al carrito con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="container">
      <h1>Tienda de Productos</h1>
      {!selectedProduct ? (
        <>
          <ProductList products={products} onViewDetails={handleViewDetails} />
          <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
        </>
      ) : (
        <ProductDetails 
          product={selectedProduct} 
          onBack={handleBackToList}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default App;
