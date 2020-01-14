import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ProductList />
      </React.Fragment>
    );
  }
}

export default App;
