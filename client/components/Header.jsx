import React from 'react';

class Header extends React.Component {
  render() {
    const cartParams = this.props.cart;
    return (
      <div className="navbar bg-dark topBar">
        <h4><i className="fas fa-dollar-sign"></i> Wicked Sales</h4>
        <span className="shoppingCart float-right">{this.props.quantity} {this.props.item} <i onClick={() => this.props.setView('cart', cartParams)} className="fas fa-shopping-cart"/></span>
      </div>
    );
  }

}

export default Header;
