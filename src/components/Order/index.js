import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

import CheckoutProduct from "@components/CheckoutPruduct";
import styles from "./order.module.css";

const Order = ({ order }) => {
  console.log(order);
  return (
    <div className={styles.order}>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
      <p className={styles.order_id}>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, index) => (
        <CheckoutProduct
          key={index}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hidenButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className={styles.order_total}>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
