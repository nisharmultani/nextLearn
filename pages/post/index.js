import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Layout from "../src/components/Layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
