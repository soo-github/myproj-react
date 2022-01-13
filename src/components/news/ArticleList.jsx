import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    '/news/api/articles/',
    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="my-5">
      <h3>뉴스 기사 목록을 보여줄 것입니다.</h3>
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {articleList &&
        articleList.map((article, index) => (
          <div
            key={article.id}
            className="w-full md:w-1/2 px-4 transition-transform hover:-translate-y-5 duration-300"
          >
            <ArticleSummary article={article} key={index} />
          </div>
        ))}
      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}

export default ArticleList;
