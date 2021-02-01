import React from "react";
import { useStateValue } from "src/context/StateProvider";
import Link from "next/link";
import Layout from "src/Layout";
import CheckoutProduct from "@components/CheckoutPruduct";

import styles from "./payment.module.css";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

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
            <div className={styles.payment_details}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
