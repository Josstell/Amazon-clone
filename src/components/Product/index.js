import React from "react";
import { useStateValue } from "src/context/StateProvider";
import styles from "./product.module.css";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    //dispatch the item into the data.
  };

  return (
    <div className={styles.product} key={id}>
      <div className={styles.product_info}>
        <p>{title} </p>
        <p className={styles.product_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product_rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>add to basket</button>
    </div>
  );
};

export default Product;
