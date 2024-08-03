import { Article } from '@/app/_libs/microcms';
import NewsListItem from '../NewsListItem';

type Props = {
  articles?: Article[];
};

export default function NewsList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>Ask for Free Consultation</p>;
  }
  return (
    <ul>
      {articles.map((article) => (
        <NewsListItem key={article.id} news={article} />
      ))}
    </ul>
  );
}
