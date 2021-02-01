import React, { useEffect } from "react";
import Link from "next/link";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { auth } from "../../firebase/firebase";
import { useStateValue } from "src/context/StateProvider";

import styles from "./header.module.css";
const logo = "https://pngimg.com/uploads/amazon/amazon_PNG25.png";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  console.log(user);
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
        {user ? (
          <div onClick={handleAuthentication} className={styles.header_option}>
            <span className={styles.header_optionLineOne}>
              {user ? "Hello " + user.email : "Hello Guest"}
            </span>
            <span className={styles.header_optionLineTwo}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        ) : (
          <Link href={"/login"}>
            <div
              onClick={handleAuthentication}
              className={styles.header_option}
            >
              <span className={styles.header_optionLineOne}>
                {user ? "Hello " + user.email : "Hello Guest"}
              </span>
              <span className={styles.header_optionLineTwo}>
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
        )}

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
