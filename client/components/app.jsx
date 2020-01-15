import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  render() {
    const currentView = this.state.view.name;
    if (currentView === 'catalog') {
      return (
        <React.Fragment>
          <Header />
          <ProductList setView={this.setView} />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Header />
        <ProductDetails setView={this.setView} viewParams={this.state.view.params}/>
      </React.Fragment>
    );
  }
}

export default App;
