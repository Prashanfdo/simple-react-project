import React from "react";

let Product = ({ data, onAddToCart }) => (
  <div className='product'>
    <img src={data.imageUrl} alt='' />
    <h3>{data.name}</h3>
    <h4>{data.price}</h4>
    <button onClick={onAddToCart}>Add to Cart</button>
  </div>
);

export default Product;
