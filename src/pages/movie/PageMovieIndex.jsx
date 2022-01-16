import PostList from 'components/movie/PostList';
import { useNavigate } from 'react-router-dom';

function PageMovieIndex() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>영화 페이지</h2>
      <PostList />

      <button
        className=" bg-blue-500 text-white py-2 px-4 font-bold rounded"
        onClick={() => navigate('/movie/new/')}
      >
        새 포스팅 쓰기
      </button>
    </div>
  );
}
export default PageMovieIndex;
