import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Layout from "../src/components/Layout";
import Date from "../../pages/src/components/date";
import utilStyles from "../../styles/utils.module.css"
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
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      </Layout>
    </>
  );
}
