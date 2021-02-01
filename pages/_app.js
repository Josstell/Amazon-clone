import { StateProvider } from "../src/context/StateProvider";
import reducer, { initialState } from "../src/reducer/reducer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
