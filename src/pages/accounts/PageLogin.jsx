// input[type=text]  name=username
// input[type=password]  name=password
// userFieldValues 훅 쓰시고
// PageLogin 컴포넌트 내에서 fieldValues 상탯값 노출
// 로그인 버튼을 누르면, http://localhost:8000/accounts/api/token/ 주소로 POST 요청을 보내어
// (username, password) 응답을 받아서, 일단은 console.log에 출력을 합니다.
import LoginForm from 'components/accounts/LoginForm';

function PageLogin() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default PageLogin;
