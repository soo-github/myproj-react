import TopNav from './components/TopNav';
import PageLogin from 'pages/accounts/PageLogin';
import PageProfile from 'pages/accounts/PageProfile';
import ReviewList from 'pages/reviews/ReviewList';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Components from 'pages/examples/Components';
import ReviewForm from 'pages/reviews/ReviewForm';
import PageBlog from 'pages/PageBlog';
// import Clock from 'pages/examples/Clock';
import useWindowWidth from 'pages/examples/useWindowWidth';
import CssModule from 'pages/examples/CssModule';
import CssInJs from 'pages/examples/CssInJs';
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetail from 'pages/news/PagNewsArticleDetail';
import PageNewsArticleForm from 'pages/news/PageNewsArticleForm';
import PageMovieIndex from 'pages/movie/PageMovieIndex';
import PageMoviePostDetail from 'pages/movie/PageMoviePostDetail';
import PageMoviePostForm from 'pages/movie/PageMoviePostForm';
import PageSignup from 'pages/accounts/PageSignup';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/pagelogin/" element={<PageLogin />} />
          <Route path="/accounts/pageprofile/" element={<PageProfile />} />
          <Route path="/accounts/pagesignup/" element={<PageSignup />} />
          <Route path="/blog/" element={<PageBlog />} />

          {/* ----------------------------------------------------------------- */}

          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/new/" element={<PageNewsArticleForm />} />
          <Route path="/news/:articleId/" element={<PageNewsArticleDetail />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleForm />}
          />

          {/* ----------------------------------------------------------------- */}

          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<ReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/examples/css-module/" element={<CssModule />} />
          <Route path="/examples/css-in-js/" element={<CssInJs />} />
          <Route path="/examples/context-api/" element={<ContextApiSample />} />
          <Route
            path="/examples/context-api-2/"
            element={<ContextApiSample2 />}
          />

          {/* ----------------------------------------------------------------- */}

          <Route path="/movie/" element={<PageMovieIndex />} />
          <Route path="/movie/new/" element={<PageMoviePostForm />} />
          <Route path="/movie/:postId/" element={<PageMoviePostDetail />} />
          <Route path="/movie/:postId/edit/" element={<PageMoviePostForm />} />
        </Routes>
        {/* <hr />
        윈도우 가로크기: {windowWidth}px
        <Routes>
          <Route path="/examples/clock/" element={<Clock />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
