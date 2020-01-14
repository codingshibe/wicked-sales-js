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
    const products = this.state.products.map((item, index) => {
      return <ProductListItem key={index} image={item.image} productName={item.name} price={item.price} description={item.shortDescription} />;
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
