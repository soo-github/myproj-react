import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import PostSummary from './PostSummary';

function PostList() {
  const [{ data: postList, loading, error }, refetch] = useApiAxios(
    '/movie/api/posts/',
    {
      manual: true,
    },
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="my-5">
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {postList && (
        <div className="flex flex-wrap">
          {postList.map((post, index) => (
            <div
              key={post.id}
              className="w-full md:w-1/2 xl:w-1/3 px-4 transition-transform hover:-translate-y-5 duration-300"
            >
              <PostSummary post={post} key={index} />
            </div>
          ))}
        </div>
      )}

      <DebugStates postList={PostList} loading={loading} error={error} />
    </div>
  );
}

export default PostList;
