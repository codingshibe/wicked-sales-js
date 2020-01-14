import React from 'react';

class ProductListItem extends React.Component {

  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <div className="card">
          <img src={this.props.image} className="card-img-top" alt={this.props.productName}/>
          <div className="card-body">
            <h5 className="card-title">{this.props.productName}</h5>
            <h5 className="card-subtitle text-muted">{this.props.price}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
      </div>

    );
  }
}

export default ProductListItem;
