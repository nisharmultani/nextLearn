import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Navbar from "./src/components/Navabr";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h3>nishar multani</h3>
    </div>
  );
}
