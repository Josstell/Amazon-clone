import { StateProvider } from "../src/context/StateProvider";
import reducer, { initialState } from "../src/reducer/reducer";
import "../styles/globals.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51I3nyuJOIVxoBffO5CllggWC0LnKDYGAnLRYAa1mQ6CwhNZqbt0b5gTq4mQmIHUIPJgQdbxYHWp1Hy8KwctKkZua00hNLCJZMU"
);

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Elements stripe={promise}>
        <Component {...pageProps} />
      </Elements>
    </StateProvider>
  );
}

export default MyApp;
