import React, { useEffect, useState } from "react";
import { useStateValue } from "src/context/StateProvider";
import { db } from "src/firebase/firebase";

import Layout from "../../src/Layout";
import Order from "@components/Order";
import styles from "./orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("el pouto amo");
  console.log(user);

  useEffect(async () => {
    dispatch({
      type: "EMPTY_BASKET",
    });

    if (user) {
      await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders);
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Your orders</h1>
        <div className={styles.orders_order}>
          {orders?.map((order, index) => (
            <Order order={order} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
