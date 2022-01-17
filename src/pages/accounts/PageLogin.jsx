// input[type=text]  name=username
// input[type=password]  name=password
// userFieldValues 훅 쓰시고
// PageLogin 컴포넌트 내에서 fieldValues 상탯값 노출
// 로그인 버튼을 누르면, http://localhost:8000/accounts/api/token/ 주소로 POST 요청을 보내어
// (username, password) 응답을 받아서, 일단은 console.log에 출력을 합니다.

import DebugStates from 'components/DebugStates';
import useFieldValues from 'hooks/useFieldValues';
import { Navigate } from 'react-router-dom';
import { useApiAxios } from 'api/base';

const INIT_FIELD_VALUES = { username: '', password: '' };

function PageLogin() {
  const [{ loading, error }, requestToken] = useApiAxios(
    {
      url: '/accounts/api/token',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then((response) => {
      const { access, refresh } = response.data;

      console.log('access:', access);
      console.log('refresh:', refresh);

      Navigate('/');
    });
  };

  return (
    <div>
      <h2>Login</h2>

      <div className="flex">
        <span>name:</span>
        <div className="ml-5 mr-5 border border-3 rounded">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
          />
        </div>

        <span>password:</span>
        <div className="ml-5 border border-3 rounded">
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
          />
        </div>

        <br />
        <div>
          <button className="bg-red-300 hover:bg-red-400 ml-5 p-2 rounded">
            로그인
          </button>
        </div>
      </div>
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}

export default PageLogin;
