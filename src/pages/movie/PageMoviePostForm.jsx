import PostForm from 'components/movie/PostForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageMoviePostForm() {
  const navigate = useNavigate();

  const { postId } = useParams();

  return (
    <PostForm
      postId={postId}
      handleDidSave={(savedPost) => navigate(`/movie/${savedPost.id}/`)}
    />
  );
}

export default PageMoviePostForm;
