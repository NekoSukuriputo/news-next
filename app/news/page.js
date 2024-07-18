import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <div>News</div>
      <Link href={"/news/1"}>News Detail</Link>
    </>
  );
}
