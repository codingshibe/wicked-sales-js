import React from 'react';

class ProductListItem extends React.Component {

  render() {
    const viewValue = 'details';
    const productDetails = { name: this.props.productName, image: this.props.image, price: this.props.price, shortDescription: this.props.description, longDescription: this.props.longDescription, productId: this.props.productId };
    let price = productDetails.price;
    price = (price / 100).toFixed(2);
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-4" onClick={() => this.props.setView(viewValue, productDetails)}>
        <div className="card">
          <img src={this.props.image} className="card-img-top" alt={this.props.productName}/>
          <div className="card-body">
            <h5 className="card-title">{this.props.productName}</h5>
            <h5 className="card-subtitle text-muted">{`$ ${price}`}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
      </div>

    );
  }
}

export default ProductListItem;
