import React from "react";
import { connect } from "react-redux";
import { loadProducts } from "./_actions";
import { addToCart } from "../../core/_actions";
import { homePageSelector } from "./_selectors";
import Product from "./Product";

class HomePage extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }
  handleAddToCart(productId) {
    this.props.addToCart(productId);
  }
  render() {
    const {
      homePageData: { productsLoading, productsError, products }
    } = this.props;
    return (
      <div>
        {productsLoading && <h2>Loading Products...</h2>}
        {productsError && <h2>Products Loading Error.</h2>}
        {products &&
          products.map(item => (
            <Product
              key={item.id}
              data={item}
              onAddToCart={() => this.handleAddToCart(item.id)}
            />
          ))}
      </div>
    );
  }
}

HomePage = connect(
  state => ({
    homePageData: homePageSelector(state)
  }),
  dispatch => ({
    loadProducts: () => dispatch(loadProducts()),
    addToCart: productId => dispatch(addToCart(productId))
  })
)(HomePage);

export default HomePage;
