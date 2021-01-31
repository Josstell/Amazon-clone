import Head from "next/head";
import HomePage from "@components/Home";

import Layout from "../src/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
      ;
    </div>
  );
}
