import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../../src/firebase/firebase";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          router.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          router.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.login}>
      <Link href={"/"}>
        <img
          className={styles.login_logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1600px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className={styles.login_container}>
        <h2>Sign-in</h2>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.login_signInButton} onClick={signin}>
            Sign In
          </button>
          <p>
            Al continuar, aceptas las Condiciones de uso y el Aviso de
            privacidad de Amazon.
          </p>
        </form>
        <button className={styles.login_registerButton} onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
