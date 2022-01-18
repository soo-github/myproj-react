import useAuth from 'hooks/useAuth';
import useFieldValues from 'hooks/useFieldValues';
import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import { useNavigate } from 'react-router-dom';
import { useApiAxios } from 'api/base';

const INIT_FIELD_VALUES = {
  username: '',
  password: '',
};

function SignupForm() {
  const navigate = useNavigate();

  const [auth, login] = useAuth();

  const [{ loading, error }, requestToken] = useApiAxios(
    {
      url: '/accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then((response) => {
      navigate('/accounts/pagelogin/');
    });
  };

  return (
    <div>
      <h2>SignUp</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="username"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>

        <div className="my-3">
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            placeholder="password"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>

        <div className="my-3">
          <input
            type="password"
            name="password2"
            value={fieldValues.password2}
            onChange={handleFieldChange}
            placeholder="password"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>

        <Button>회원가입</Button>
      </form>

      <DebugStates auth={auth} fieldValues={fieldValues} />
    </div>
  );
}

export default SignupForm;
