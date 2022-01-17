import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingIndicator from 'components/LoadingIndicator';

function PostDetail({ postId }) {
  const navigate = useNavigate();

  const [{ data: post, loading, error }, refetch] = useApiAxios(
    `/movie/api/posts/${postId}/`,
  );

  const [{ loading: deleteLoading, error: deleteError }, deletePost] =
    useApiAxios(
      {
        url: `/movie/api/posts/${postId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      deletePost().then(() => {
        navigate('/movie/');
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생 했습니다.(${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response.status} ${deleteError.response.statusText})`}
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
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/movie/" className="hover:text-red-400">
          목록으로
        </Link>

        <Link to={`/movie/${postId}/edit/`} className="hover:text-red-400">
          수정하기
        </Link>

        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="hover:text-red-500"
        >
          삭제하기
        </button>
      </div>
      <DebugStates post={post} />
    </div>
  );
}

export default PostDetail;
