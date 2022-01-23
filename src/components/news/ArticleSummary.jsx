import { Link } from 'react-router-dom';

function ArticleSummary({ article }) {
  return (
    <div className="bg-gray-100 border-gray-100 border-2 rounded-lg overflow-hidden mb-10">
      {article.photo && (
        <img src={article.photo} alt={article.title} className="w-full" />
      )}
      <div className="p-8 sm:p-9 md:p-7 xl:p-9">
        <h3>
          <Link to={`/news/${article.id}/`}>{article.title}</Link>
          <p>by {article.author.username}</p>
        </h3>
      </div>
    </div>
  );
}
export default ArticleSummary;
