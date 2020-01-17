import React from 'react';
import CartSummaryItem from './CartSummaryItem';

function CartSummary(props) {
  const cartItems = props.cartItems;
  const cartItemElements = cartItems.map(item => {
    return <CartSummaryItem key={item.productId} image={item.image} productName={item.name} price={item.price} description={item.shortDescription} />;
  });
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price;
  }
  if (cartItemElements.length === 0) {
    return (
      <div>
        <p className="text-muted" onClick={() => props.setView('catalog', {})}>{'< Back to catalog'}</p>
        <h4>There are no items in your cart</h4>
      </div>);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="text-muted" onClick={() => props.setView('catalog', {})}>{'< Back to catalog'}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>My Cart</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {cartItemElements}
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h4>Item Total $ {(totalPrice / 100).toFixed(2)}</h4>
        </div>
        <div><button className="btn btn-primary" onClick={() => props.setView('checkout', {})}>Checkout</button></div>
      </div>
    </div>);
}

export default CartSummary;
