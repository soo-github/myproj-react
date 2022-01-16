import { useApiAxios } from 'api/base';
import H2 from 'components/H2';
import DebugStates from 'components/DebugStates';
import LoadingIndicator from 'components/LoadingIndicator';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect } from 'react';
import produce from 'immer';
import Button from 'components/Button';

const INIT_FIELD_VALUES = { title: '', poster: '', story: '' };

function PostForm({ postId, handleDidSave }) {
  const [{ data: post, loading: getLoading, error: getError }, refetch] =
    useApiAxios(`/movie/api/posts/${postId}/`, {
      manual: !postId,
    });

  const [
    { loading: saveLoading, error: saveError, errorMessage: saveErrorMessages },
    saveRequest,
  ] = useApiAxios(
    {
      url: !postId ? '/movie/api/posts/' : `/movie/api/posts/${postId}/`,
      method: !postId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues, formData } =
    useFieldValues(post || INIT_FIELD_VALUES);

  useEffect(() => {
    setFieldValues(
      produce((draft) => {
        draft.poster = '';
      }),
    );
  }, [post]);

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();

    saveRequest({
      data: formData,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <H2>Post Form</H2>

      {/* {saveLoading && <LoadingIndicator>저장 중..</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`} */}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            name="title"
            vlaue={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full"
          />
          {/* {saveErrorMessages.title?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))} */}
        </div>

        <div className="my-3">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="poster"
            onChange={handleFieldChange}
          />
          {/* {saveErrorMessages.photo?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))} */}
        </div>

        <div className="my-3">
          <textarea
            name="story"
            value={fieldValues.story}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {/* {saveErrorMessages.content?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))} */}
        </div>

        <div className="my-3">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default PostForm;
