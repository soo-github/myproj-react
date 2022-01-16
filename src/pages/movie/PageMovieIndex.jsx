import Button from 'components/Button';
import PostList from 'components/movie/PostList';
import { useNavigate } from 'react-router-dom';

function PageMovieIndex() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>영화 페이지</h2>
      <PostList />

      <Button onClick={() => navigate('/movie/new/')}>새 포스팅 쓰기</Button>
    </div>
  );
}
export default PageMovieIndex;
