import React from 'react';

const Cart = ({ cart, onRemoveFromCart }) => {
  if (!cart || cart.length === 0) {
    return <div>No hay items en el carrito</div>;
  }

  const total = cart.reduce((sum, item) => {
    const itemPrice = typeof item.price === 'number' ? item.price : 0;
    return sum + (itemPrice * (item.quantity || 1));
  }, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            <button className="btn-primary3" onClick={() => onRemoveFromCart(item)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
