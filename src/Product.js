import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";


function Product({id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("My basket >>> ", basket);

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
     
      <img src={image} />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>Price : </strong>
          <small></small>
          <strong>₹{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
      </div>
      <button onClick={addtoBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
