import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      this is navabr
      <Link href="/Products">product</Link>
      <Link href="/About">About</Link>
      <Link href="/Products/[id]" as="/Products/3"> single product</Link>

      <Link href="/post">posts</Link>

    </div>
  );
}
