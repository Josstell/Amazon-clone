import "../styles/globals.css";
import Layout from "src/Layout";

import { StateProvider } from "../src/context/StateProvider";
import reducer, { initialState } from "../src/reducer/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
