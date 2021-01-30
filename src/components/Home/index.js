import React from "react";
import Product from "@components/Product";
import styles from "./home.module.css";

const back_image =
  "https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_es-MX_PVD6308._CB411378860_.jpg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_container}>
        <img className={styles.home_image} src={back_image} alt="" />

        <div className={styles.home_row}>
          <Product
            id="23434"
            title="El negociador: Consejos para triunfar en la vida y en los negocios"
            price={159.0}
            image="https://m.media-amazon.com/images/I/41cXaQ03VIL.jpg"
            rating={3}
          />
          <Product
            id="54643"
            title="Xiaomi Pocophone M3 4GB 128GB Negro"
            price={4049.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61I2lgmEW-L._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className={styles.home_row}>
          <Product
            id="643"
            title="QCY T1C Auricular para móvil Biauricular Dentro de oído Negro - Auriculares (Inalámbrico, Dentro de oído, Biauricular, Intraaural, Negro)"
            price={409.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41aI8x0eVfL._AC_.jpg"
            rating={3}
          />
          <Product
            id="543"
            title="Xiaomi Mi Smart Band 4C (Versión Global)"
            price={526.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Bw2RTmVfL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="6580"
            title="TV Samsung 58 4K UHD Smart Tv LED UN58TU7000FXZX ( 2020 )"
            price={12490.0}
            image="https://images-na.ssl-images-amazon.com/images/I/91-gHZ%2BX9YL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className={styles.home_row}>
          <Product
            id="589873"
            title="M&A Sport Bandas de Resistencia Elastica 12pack, Bandas Elasticas, Bandas de resistencia para ejercicio, bandas de resistencia de fitness con 5 ligas de fitness/manijas/anclaje de puerta/correas de tobillo/bolsa de transporte de entrenamiento para interior y exteriores, bandas de gimnasio para hombres y mujeres, ejercicio desde casa"
            price={369.0}
            image="https://images-na.ssl-images-amazon.com/images/I/513zRr1FKLL._AC_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
