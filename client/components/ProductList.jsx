import React from 'react';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.getProducts();

  }

  getProducts() {
    fetch('/api/products')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ products: data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  displayProducts() {
    const products = this.state.products.map(item => {
      return <ProductListItem key={item.productId} image={item.image} productName={item.name} price={item.price} description={item.shortDescription} setView={this.props.setView} productId={item.productId} longDescription={this.props.longDescription}/>;
    });
    return products;
  }

  render() {
    const products = this.displayProducts();
    return (
      <div className="container">
        <div className="row align-items-center">
          {products}
        </div>
      </div>
    );
  }
}

export default ProductList;
