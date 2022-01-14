import { Link } from 'react-router-dom';

function PostSummary({ post }) {
  return (
    <div className="bg-gray-100 border-gray-100 border-2 rounded-lg overflow-hidden mb-10">
      {post.poster && (
        <img src={post.poster} alt={post.title} className="w-full" />
      )}
      <div className="p-8 sm:p-9 md:p-7 xl:p-9">
        <Link to={`/movie/${post.id}/`} className="font-semibold text-dark">
          {post.title}
        </Link>
      </div>
    </div>
  );
}

export default PostSummary;
