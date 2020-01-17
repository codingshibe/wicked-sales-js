import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''

    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleCreditCardInput = this.handleCreditCardInput.bind(this);
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleOrder = this.handleOrder.bind(this);

  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  handleCreditCardInput(e) {
    this.setState({ creditCard: e.target.value });
  }

  handleAddressInput(e) {
    this.setState({ address: e.target.value });
  }

  handleOrder(e) {
    e.preventDefault();
    const orderToBeSent = {};
    orderToBeSent.name = this.state.name;
    orderToBeSent.creditCard = this.state.creditCard;
    orderToBeSent.shippingAddress = this.state.address;
    this.props.placeOrder(orderToBeSent);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name </label>
                  <input type="text" className="form-control" value={this.state.name} placeholder="Name" id="name" onChange={this.handleNameInput} />
                </div>
                <div className="form-group">
                  <label htmlFor="creditCard">Credit Card </label>
                  <input type="text" className="form-control" placeholder="XXXX XXXX XXXX" value={this.state.creditCard} id="creditCard" onChange={this.handleCreditCardInput} />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea className="form-control" rows="4" id="address" value={this.state.address} onChange={this.handleAddressInput} ></textarea>
                </div>
                <button className="btn btn-primary" onClick={this.handleOrder} >Place Order</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <br />
              <p onClick={() => this.props.setView('catalog', {})}>{'< Continue Shopping'}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckoutForm;
