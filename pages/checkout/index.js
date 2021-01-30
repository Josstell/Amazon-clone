import React from "react";
import Subtotal from "@components/Subtotal";
import styles from "./checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_left}>
        <img
          className={styles.checkout_ad}
          src="https://images-na.ssl-images-amazon.com/images/G/33/gift-certificates/consumer/2019/MarketingToolkitImages/gclp/es/MarketingToolkit_GCLP_dt_slideshow_1024x180_email_morning_spanish._CB452414904_.jpg"
          alt=""
        />

        <div>
          <h2 className={styles.checkout_title}> Your Shoping basket</h2>
        </div>
      </div>

      <div className={styles.checkout_right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
