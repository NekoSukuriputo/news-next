import Link from "next/link";
export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((post) => (
        <li key={post.id}>
          <Link href={`/news/${post.slug}`}>
            <img src={`/images/news/${post.image}`} alt={post.title} />
            <span>{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
