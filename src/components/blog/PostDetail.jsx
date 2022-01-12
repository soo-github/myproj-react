function PostDetail({ post, handleEdit, handleDelete }) {
  const { title, content } = post;

  return (
    <div>
      <h2>Post Detail</h2>
      <div>
        {title}
        {content}
      </div>
    </div>
  );
}

export default PostDetail;
