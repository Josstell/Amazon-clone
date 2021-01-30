import React from "react";
import Link from "next/link";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import styles from "./header.module.css";
import { useStateValue } from "src/context/StateProvider";
const logo = "https://pngimg.com/uploads/amazon/amazon_PNG25.png";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <img className={styles.header__logo} src={logo} />
      </Link>

      <div className={styles.header_search}>
        <input type="text" className={styles.header_searchIn} />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header_nav}>
        <div className={styles.header_option}>
          <span className={styles.header_optionLineOne}>Hello Guest</span>
          <span className={styles.header_optionLineTwo}>Sign In</span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_optionLineOne}>Return</span>
          <span className={styles.header_optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_optionLineOne}>Your</span>
          <span className={styles.header_optionLineTwo}>Prime</span>{" "}
        </div>

        <Link href={"/checkout"}>
          <div className={styles.header_optionBasket}>
            <ShoppingBasketIcon />
            <span className={styles.header_basketCount}>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
