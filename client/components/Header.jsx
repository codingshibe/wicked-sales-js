import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="navbar bg-dark topBar">
        <h4><i className="fas fa-dollar-sign"></i> Wicked Sales</h4>
        <span className="shoppingCart float-right">{this.props.quantity} {this.props.item} <i className="fas fa-shopping-cart"/></span>
      </div>
    );
  }

}

export default Header;
