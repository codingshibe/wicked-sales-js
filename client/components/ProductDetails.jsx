import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  componentDidMount() {
    const idNum = this.props.viewParams.productId;
    fetch(`/api/products/${idNum}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ product: data });
      });

  }

  render() {
    if (!this.state.product) {
      return this.state.product;
    }
    let price = this.state.product.price;
    price = (price / 100).toFixed(2);
    return (
      <div className="container detailsContainer">
        <div className="row">
          <div className="col">
            <div className="text-muted" onClick={() => this.props.setView('catalog', {})}>{'< Back to catalog'}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <img className="detailsImage" src={this.state.product.image} alt={this.state.product.name}/>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h3>{this.state.product.name}</h3>
            <p>{`$ ${price}`}</p>
            <p>{this.state.product.shortDescription}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{this.state.product.longDescription}</p>
          </div>
        </div>
      </div>
    );

  }
}

export default ProductDetails;
