import DebugStates from 'components/DebugStates';
import PostDetail from 'components/movie/PostDetail';
import { useParams } from 'react-router-dom';

function PageMoviePostDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h3>PageMoviePostDetail</h3>
      <PostDetail postId={postId} />
    </div>
  );
}

export default PageMoviePostDetail;
