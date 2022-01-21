import { NavLink } from 'react-router-dom';
// import useAuth from 'hooks/useAuth';
import { useAuthContext } from 'hooks/AuthContext';

function TopNav() {
  // const [auth, , , logout] = useAuth();
  const [auth, logout] = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="my-3">
      <div className="flex gap-4 ">
        <MyLink to="/reviews/">리뷰</MyLink>

        <MyLink to="/movie/">영화</MyLink>

        <MyLink to="/news/">뉴스</MyLink>
        {!auth.isLoggedIn && (
          <>
            <MyLink to="/accounts/pagelogin/">로그인</MyLink>
            <MyLink to="/accounts/pagesignup/">회원가입</MyLink>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <MyLink to="/accounts/pageprofile/">프로필</MyLink>
            <button onClick={handleLogout} className={baseClassName}>
              로그아웃
            </button>
          </>
        )}

        {/* <li>
          <MyLink to="/examples/components/">컴포넌트 예시</MyLink>
        </li>
        <li>
          <MyLink to="/examples/clock/">시계</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-module/">Css Module</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-in-js/">Css in js</MyLink>
        </li>
        <li>
          <MyLink to="/examples/contextapisample/">Context API</MyLink>
        </li>
        <li>
          <MyLink to="/examples/context-api-2/">Context API #2</MyLink>
        </li> */}
      </div>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        baseClassName + ' ' + (isActive ? 'border-b-4 border-red-400' : '')
      }
    >
      {children}
    </NavLink>
  );
}
const baseClassName =
  'px-4 pt-3 pb-2 font-semibold hover:bg-red-200 hover:text-red-500 hover:text-white';

export default TopNav;
