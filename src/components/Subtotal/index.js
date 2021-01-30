import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "src/context/StateProvider";

import styles from "./subtotal.module.css";

const Subtotal = () => {
  const [total, setTotal] = useState(0);
  const [{ basket }] = useStateValue();

  useEffect(() => {
    var suma = 0;
    for (let i = 0; i < basket.length; i++) {
      suma = suma + basket[i].price;
    }
    setTotal(suma);
  }, []);

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket?.length} items):
              <strong>$ {total}</strong>
            </p>
            <small className={styles.subtotal_gift}>
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className={styles.subtotal_button}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
