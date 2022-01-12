function PostList({ post, handleEdit, handleDelete }) {
  const { title, content } = post;

  return (
    <div className="bg-white shadow-md border border-gray-400 my-1 p-1">
      <div>
        <span
          onClick={() => handleEdit()}
          className="hover:text-blue-400 cursor-pointer mr-1"
        >
          수정
        </span>

        <span
          onClick={() => handleDelete()}
          className="hover:text-red-400 cursor-pointer"
        >
          삭제
        </span>
      </div>
      {title}
    </div>
  );
}

export default PostList;
