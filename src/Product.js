import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("My basket >>> ", basket);

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
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
          <p></p>
        </div>
      </div>
      <img src={image} />
      <button onClick={addtoBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
