import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import LoadingIndicator from 'components/LoadingIndicator';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect } from 'react';

const INIT_FIELD_VALUES = { title: '', poster: '', story: '' };

function PostForm({ postId, handleDiaSave }) {
  const [{ data: post, loading: getLoading, error: getError }] = useApiAxios(
    `/movie/api/posts/${postId}/`,
    {
      manual: !postId,
    },
  );

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

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    post || INIT_FIELD_VALUES,
  );

  useEffect(() => {
    setFieldValues(
      produce((draft) => {
        draft.photo = '';
      }),
    );
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <H2>Post Form</H2>

      {saveLoading && <LoadingIndicator>저장 중..</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="title"
            vlaue={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full"
          />
          {saveErrorMessages.title?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
      </form>
      <DebugStates post={post} getLoading={getLoading} getError={getError} />
    </div>
  );
}

export default PostForm;
