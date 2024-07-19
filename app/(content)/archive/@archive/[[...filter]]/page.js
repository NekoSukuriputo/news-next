import Link from "next/link";

import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const seletedYear = filter?.[0];
  const seletedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (seletedYear && !seletedMonth) {
    news = getNewsForYear(seletedYear);
    links = getAvailableNewsMonths(seletedYear);
  }

  if (seletedYear && seletedMonth) {
    news = getNewsForYearAndMonth(seletedYear, seletedMonth);
    links = [];
  }

  let newContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newContent = <NewsList news={news} />;
  }

  if (
    (seletedYear && !getAvailableNewsYears().includes(+seletedYear)) ||
    (seletedMonth &&
      !getAvailableNewsMonths(seletedYear).includes(+seletedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = seletedYear
                ? `/archive/${seletedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newContent}
    </>
  );
}
