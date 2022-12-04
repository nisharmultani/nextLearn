import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      this is navabr
      <Link href="/Products">product</Link>
      <Link href="/About">About</Link>
      <Link href="/Products/21"> single product</Link>
      {/* <a href="/About"> nishar abour</a> */}

    </div>
  );
}
