import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PostDetail({ postId }) {
  const navigate = useNavigate();

  const [{ data: post, loading, error }, refetch] = useApiAxios(
    `/movie/api/posts/${postId}/`,
    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && '로딩중...'}
      {error && '에러가 발생 했습니다.'}
      {post && (
        <>
          <h3 className="text-2xl my-5">{post.title}</h3>
          {post.poster && (
            <img src={post.poster} alt={post.title} className="rounded" />
          )}
          <div>
            {post.story.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div>
        <Link to="/movie/" className="hover:text-red-400">
          목록으로
        </Link>

        <Link to={`/movie/${postId}/edit/`} className="hover:text-red-400">
          수정하기
        </Link>
      </div>
      <DebugStates post={post} />
    </div>
  );
}

export default PostDetail;
