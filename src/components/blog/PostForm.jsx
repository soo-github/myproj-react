function PostForm({ fieldValues, handleFieldChange, handleSubmit, loading }) {
  const handleClickedSubmitButton = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성값을 지정해주세요.');
    }
  };

  return (
    <div>
      {loading && 'Loding...'}
      <div>
        <div>
          <label className="text-gray-600 font-bold mr-2">제목</label>
          <input
            type="text"
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            className="border border-gray-500 mb-4 mt-2"
            disabled={loading}
          ></input>
        </div>

        <div>
          <label className="text-gray-600 font-bold">
            내용
            <textarea
              name="content"
              value={fieldValues.content}
              onChange={handleFieldChange}
              className="bg-gray-100 border border-gray-400 leading-tight w-full py-2 px-3 mb-3 "
              disabled={loading}
            />
          </label>
        </div>

        <button
          onClick={() => handleClickedSubmitButton()}
          className="bg-blue-200 hover:bg-blue-400 cursor-pointer"
          disabled={loading}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

export default PostForm;
