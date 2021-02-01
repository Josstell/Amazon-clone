import React from "react";
import { useRouter } from "next/router";

import CurrencyFormat from "react-currency-format";

import { useStateValue } from "src/context/StateProvider";
import { getBasketTotal } from "../../reducer/reducer";
import styles from "./subtotal.module.css";

const Subtotal = () => {
  const router = useRouter();
  const [{ basket }] = useStateValue();

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className={styles.subtotal_gift}>
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        onClick={() => router.push("/payment")}
        className={styles.subtotal_button}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
