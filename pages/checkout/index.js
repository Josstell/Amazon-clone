import React from "react";
import Subtotal from "@components/Subtotal";
import CheckoutProduct from "@components/CheckoutPruduct";

import { useStateValue } from "src/context/StateProvider";

import Layout from "../../src/Layout";
import styles from "./checkout.module.css";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <Layout>
      <div className={styles.checkout}>
        <div className={styles.checkout_left}>
          <img
            className={styles.checkout_ad}
            src="https://images-na.ssl-images-amazon.com/images/G/33/gift-certificates/consumer/2019/MarketingToolkitImages/gclp/es/MarketingToolkit_GCLP_dt_slideshow_1024x180_email_morning_spanish._CB452414904_.jpg"
            alt=""
          />

          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className={styles.checkout_title}> Your Shoping basket</h2>
          </div>

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

        <div className={styles.checkout_right}>
          <Subtotal />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
