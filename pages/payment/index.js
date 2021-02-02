import React, { useState, useEffect } from "react";
import { useStateValue } from "src/context/StateProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "src/Layout";
import CheckoutProduct from "@components/CheckoutPruduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../src/reducer/reducer";
import { db } from "../../src/firebase/firebase";
import CurrencyFormat from "react-currency-format";
import styles from "./payment.module.css";

import axios from "../../src/axios";

const Payment = () => {
  const router = useRouter();

  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows to change custumer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total in a currency subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The secret >>>", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        router.replace("/orders");
      })
      .catch((error) => console.log(error));

    //const payload = await stripe
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <Layout>
      <div className={styles.payment}>
        <div className={styles.payment_container}>
          <h1>
            Checkout (
            <Link href="/checkout">
              <a>{basket?.length} items</a>
            </Link>
            )
          </h1>
          {/**Payment section  delivery address*/}
          <div className={styles.payment_section}>
            <div className={styles.payment_title}>
              <h3>Delivery Address</h3>
            </div>
            <div className={styles.payment_address}>
              <p>{user?.email}</p>
              <p>7 sur no. 309</p>
              <p>Tianguismanalco, Puebla.</p>
            </div>
          </div>

          {/**Payment section  Review items*/}
          <div className={styles.payment_section}>
            <div className={styles.payment_title}>
              <h3>Review items and delivery</h3>
            </div>
            <div className={styles.payment_items}>
              {basket.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          {/**Payment section  Payment method*/}
          <div className={styles.payment_section}>
            <div className={styles.payment_title}>
              <h3>Payment method</h3>
            </div>
            <div className={styles.payment_details}>
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className={styles.payment_priceContainer}>
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>
                          Order Total:
                          {value}
                        </h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
