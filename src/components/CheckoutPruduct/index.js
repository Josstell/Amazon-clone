import React from "react";
import { useStateValue } from "src/context/StateProvider";
import styles from "./checkoutProduct.module.css";

const CheckoutProduct = ({ id, image, title, price, rating, hidenButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={styles.checkoutProduct}>
      <img className={styles.checkoutProduct_image} src={image} alt="" />
      <div className={styles.checkoutProduct_info}>
        <p className={styles.checkoutProduct_title}>{title}</p>
        <p className={styles.checkoutProduct_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.checkoutProduct_rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hidenButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
