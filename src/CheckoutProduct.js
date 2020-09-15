import React, {forwardRef, useRef} from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";


const CheckoutProduct = forwardRef(({ id, image, price, rating, title, hideButton }, ref) => {
  const [{ basket }, dispatch] = useStateValue();

  const itemRef= useRef(null)

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct" ref={ref}>
      <img src={image} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small> <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
        {
          !hideButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )
        }
      </div>
    </div>
  );
});

export default CheckoutProduct;
